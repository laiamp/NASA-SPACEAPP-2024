import React from 'react';
import LineChart from './home/plot';

const Water = () => {
    return (
        <div>
            <h2>Water</h2>
            <LineChart />
            <LineChart />
            <LineChart />
            <p>Estos son nuestros servicios.</p>
        </div>
    );
};

export default React.memo(Water);
