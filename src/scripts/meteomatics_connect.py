import requests
import pandas as pd
from requests.auth import HTTPBasicAuth
from io import StringIO
from datetime import datetime
from dataclasses import dataclass
from typing import TypeAlias
import numpy as np
import json

METEOMATICS = 'https://api.meteomatics.com'
USERNAME = 'salasis_pau'
PASSWORD = 'tTnF8Hs220'
TIME_FORMAT = '%Y-%m-%dT%H:%M:%SZ'
DICT_FEATURE_APICODE = {
    'temperature': 't_0m:C'
}

Point: TypeAlias = tuple[float, float]

@dataclass
class Region:
    bot_left: Point
    top_right: Point

@dataclass
class SoilMoisture:
    data: pd.DataFrame
    location: Point

HistoricalSoilMoisture = list[list[SoilMoisture]]


def _generate_time_interval(
    start_date: datetime,
    end_date: datetime,
    interval_hours: int
) -> str:
    return f"{start_date.strftime(TIME_FORMAT)}--{end_date.strftime(TIME_FORMAT)}:PT{interval_hours}H"


def _get_location(
    latitude: float,
    longitude: float
) -> str:
    return f'{latitude},{longitude}'


def _make_dataframe_cool(
    dataframe: pd.DataFrame,
    uggly_name: str,
    new_name: str
) -> pd.DataFrame:
    df = dataframe.copy()
    df[['date', new_name]] = df[uggly_name].str.split(';', expand=True)
    df['date'] = pd.to_datetime(df['date'])
    df[new_name] = pd.to_numeric(df[new_name])
    df.set_index('date', inplace=True)
    df = df[[new_name]]
    return df


def get_meteomatics_data(
    time_interval: str,
    api_parameters: str,
    location: str,
    output_format: str = 'csv'
) -> pd.DataFrame:
    """
    Returns a dataframe containing a dataset from Meteomatics.

    Parameters
    -------
    time_interval: str
        Time innterval of the data must be in the format:
        '2024-10-05T00:00:00Z--2024-10-08T00:00:00Z:PT1H'
        --start--              --end--           --space--
    api_parameters: str
        Parameters of the api concerning the type of data collected
        (ej: temperature, pressure)
    location: str
        Location of the request must be in the format:
        52.520551,13.461804 (latitude, longitude)
    output_format: str
        Format of the output
    """
    api_url = f'{METEOMATICS}/{time_interval}/{api_parameters}/{location}/{output_format}'
    response = requests.get(api_url, auth=HTTPBasicAuth(USERNAME, PASSWORD))

    if response.status_code == 200:
        csv_data = StringIO(response.text)
        df = pd.read_csv(csv_data)
        return df
    else:
        print(f'Error: {response.status_code}')
        print('Mensaje:', response.text)


def get_soil_moisture_from_region(
    region: Region,
    start_date: datetime,
    end_date: datetime,
    interval_hours: int,
    step: tuple[float, float],
    output_format: str = 'csv'
) -> HistoricalSoilMoisture:
    time_interval = _generate_time_interval(
        start_date=start_date,
        end_date=end_date,
        interval_hours=interval_hours
    )
    hist_soil_moisture: HistoricalSoilMoisture = []
    for latitude in np.arange(region.bot_left[0], region.top_right[0], step[0]):
        temp: list[SoilMoisture] = []
        for longitude in np.arange(region.bot_left[1], region.top_right[1], step[1]):
            data = get_meteomatics_data(
                time_interval=time_interval,
                api_parameters='soil_moisture_index_-5cm:idx',
                location=_get_location(latitude, longitude),
                output_format=output_format
            )
            data = _make_dataframe_cool(
                dataframe=data,
                uggly_name='validdate;soil_moisture_index_-5cm:idx',
                new_name='soil_moisture'
            )
            temp.append(SoilMoisture(
                data = data,
                location = (latitude, longitude)
            ))
        hist_soil_moisture.append(temp)
    return hist_soil_moisture


def _get_center_of_region(region: Region) -> Point:
    return (
        (region.bot_left[0] + region.top_right[0]) / 2,
        (region.bot_left[1] + region.top_right[1]) / 2,
    )


def get_feature_historical(
    region: Region,
    start_date: datetime,
    end_date: datetime,
    interval_hours: int,
    feature: str,
    output_format: str = 'csv'
) -> pd.DataFrame:
    location = _get_center_of_region(region=region)
    time_interval = _generate_time_interval(
        start_date=start_date,
        end_date=end_date,
        interval_hours=interval_hours
    )
    data = get_meteomatics_data(
        time_interval=time_interval,
        api_parameters=DICT_FEATURE_APICODE[feature],
        location=_get_location(location[0], location[1]),
        output_format=output_format
    )
    data = _make_dataframe_cool(
        dataframe=data,
        uggly_name='validdate;' + DICT_FEATURE_APICODE[feature],
        new_name=feature
    )
    return data


def parse_soil_moisture_historical_to_json(
    soil_moisture_data: HistoricalSoilMoisture
) -> str:
    result = []

    for group in soil_moisture_data:
        group_data = []
        for soil_moisture in group:
            df = soil_moisture.data
            location = soil_moisture.location
            
            df.index = df.index.to_series().apply(lambda x: x.isoformat())
            records = df.reset_index().to_dict(orient='records')
            
            group_data.append({
                "location": location,
                "data": records
            })
        
        result.append(group_data)

    return json.dumps(result, indent=2)


def parse_feature_to_json(
    data: pd.DataFrame
) -> str:
    data.index = data.index.to_series().apply(lambda x: x.isoformat())
    records = data.reset_index().to_dict(orient='records')
    return json.dumps(records, indent=2)


if __name__ == '__main__':
    '''
    a = get_meteomatics_data(
        time_interval='2024-10-05T00:00:00Z--2024-10-08T00:00:00Z:PT1H',
        api_parameters='t_2m:C',
        location='52.520551,13.461804',
        output_format='csv'
    )
    '''
    '''
    a = get_soil_moisture_from_region(
        region=Region(
            top_right=(41.600273, 0.812349),
            bot_left=(41.569333, 0.722734)
        ),
        start_date=datetime(2021, 1, 1),
        end_date=datetime(2024, 10, 8),
        interval_hours=24,
        step=(0.03094 / 2, 0.089615 / 5)
    )
    print(parse_soil_moisture_historical_to_json(a))
    '''
    a = get_feature_historical(
        region=Region(
            top_right=(41.600273, 0.812349),
            bot_left=(41.569333, 0.722734)
        ),
        feature='temperature',
        start_date=datetime(2021, 1, 1),
        end_date=datetime(2024, 10, 8),
        interval_hours=24,
    )
    print(parse_feature_to_json(a))

# 41.600273, 0.812349 ---- 41.569333, 0.722734