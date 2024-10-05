import React from 'react';
import Plot from 'react-plotly.js';
import { datos } from './datos';
import { paleta1 } from './constants';
import { generate_raw_data, calculateMonthlyAverages } from './data_raw_generator';


function LineChart() {
    const raw_data = generate_raw_data(calculateMonthlyAverages(datos), paleta1)
    const yaxis_title = 'temperature';
    const data: Record<string, any>[] = [];
    for (const data_instance of raw_data) {
        data.push(data_instance.get_plotline_information());
    }

    return (
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
            <Plot
                data={data}
                config={{ responsive: true }}
                layout={{
                    autosize: true,
                    height: 300, // Reduce la altura del gráfico
                    margin: { t: 10, r: 10, l: 40, b: 40 }, // Reduce los márgenes
                    yaxis: {
                        title: yaxis_title,
                        tickfont: { size: 10 }, // Reduce el tamaño de la fuente de los ticks del eje Y
                    },
                    xaxis: {
                        tickfont: { size: 10 }, // Reduce el tamaño de la fuente de los ticks del eje X
                    },
                    showlegend: false, // Si no necesitas la leyenda, esto libera espacio
                }}
            />
        </div>
    );
};

export default LineChart;
