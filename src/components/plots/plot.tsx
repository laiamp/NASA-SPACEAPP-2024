import React from 'react';
import Plot from 'react-plotly.js';

import { generate_raw_data, calculateMonthlyAverages } from './data_raw_generator';

function LineChart({ title, data, paleta }) {
    // Generate the raw data using the provided color palette
    const raw_data = generate_raw_data(calculateMonthlyAverages(data), paleta);

    // Update data traces with color information based on the palette
    const plotData = raw_data.map((data_instance, index) => {
        // Ensure we cycle through the palette if there are more traces than colors
        const color = paleta[index % paleta.length];

        // Get the plot line information and add the color attribute
        const plotlineInfo = data_instance.get_plotline_information();
        return {
            ...plotlineInfo,
            line: {
                color, // Assign color from the palette
                width: 2, // Customize line width if needed
            },
        };
    });

    return (
        <Plot
            data={plotData} // Use the updated plot data with color
            config={{
                responsive: true,
                displayModeBar: true,
                modeBarPosition: 'top', // Move the toolbar to the top
            }}
            layout={{
                autosize: true,
                height: 160, // Lower chart height
                width: 260,
                margin: { t: 40, r: 10, l: 40, b: 40 }, // Adjust margins
                yaxis: {
                    title: title,
                    tickfont: { size: 10 }, // Font size for Y-axis ticks
                    automargin: true, // Automatically adjust margin
                },
                xaxis: {
                    tickfont: { size: 10 }, // Font size for X-axis ticks
                    automargin: true, // Automatically adjust margin
                },
                showlegend: false, // Hide the legend
            }}
        />
    );
}

export default LineChart;
