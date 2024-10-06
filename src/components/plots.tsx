import React from 'react';
import LineChart from './plots/plot';

import { temperature_data } from './plots/data/temperature_data';
import { humidity_data } from './plots/data/humidity_data';
import { rainfall_data } from './plots/data/rainfall_data';
import { temperaturePalette, humidityPalette, rainfallPalette } from './plots/constants';

function Plots() {
    return (
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <LineChart key={'temp'} title={"Temperature"} data={temperature_data} paleta={temperaturePalette} />
            <LineChart key={'humid'} title={"Humidity"} data={humidity_data} paleta={humidityPalette} />
            <LineChart key={'rain'} title={"Rainfall"} data={rainfall_data} paleta={rainfallPalette} />
        </div>
    );
}

export default React.memo(Plots);
