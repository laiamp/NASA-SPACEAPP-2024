import React from 'react';
import LineChart from './plots/plot';

import { datos } from './plots/datos';
import { temperaturePalette, humidityPalette, rainfallPalette } from './plots/constants';

function Plots() {
    return (
        <>
            <LineChart key={'temp'} title ={"Temperature"} data ={datos} paleta ={temperaturePalette}/>
            <LineChart key={'humid'} title ={"Humidity"} data ={datos} paleta ={humidityPalette}/>
            <LineChart key={'rain'} title ={"Rainfall"} data ={datos} paleta ={rainfallPalette}/>

        </>
    );
};

export default React.memo(Plots);
