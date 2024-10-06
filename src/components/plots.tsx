import React from 'react';
import LineChart from './plots/plot';

import { datos } from './plots/datos';
import { paleta1, paleta2, rainfallPalette } from './plots/constants';

function Plots() {
    return (
        <>
            <LineChart title ={"Temperature"} data ={datos} paleta ={paleta1}/>
            <LineChart title ={"Humidity"} data ={datos} paleta ={paleta2}/>
            <LineChart title ={"Rainfall"} data ={datos} paleta ={rainfallPalette}/>

        </>
    );
};

export default React.memo(Plots);
