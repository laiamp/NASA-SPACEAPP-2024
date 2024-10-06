import React from 'react';
import LineChart from './plots/plot';

function Plots() {
    return (
        <>
            <LineChart />
            <LineChart />
            <LineChart />
        </>
    );
};

export default React.memo(Plots);
