import pickle

def serialize_object(obj):
    return pickle.dumps(obj) 

def deserialize_object(data):
    return pickle.loads(data) 


"""
get_soil_moisture_from_region(
    region: Region,
    start_date: datetime,
    end_date: datetime,
    interval_hours: int,
    step: tuple[float, float],
    output_format: str = 'csv'
) """
def moistureDeserialize(mData):
    return [
        deserialize_object(mData['region']), 
        deserialize_object(mData['start_date']),
        deserialize_object(mData['end_date']),
        mData['interval_hours'],
        tuple(mData['step'][0], mData['step'][1])
        ]

def moistureSerialize(mData):
    return [
        serialize_object(mData['region']), 
        serialize_object(mData['start_date']),
        serialize_object(mData['end_date']),
        mData['interval_hours'],
        [mData['step'][0], mData['step'][1]]
        ] 