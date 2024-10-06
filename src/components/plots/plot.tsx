import React from 'react';
import Plot from 'react-plotly.js';
import { datos } from './datos';
import { paleta1 } from './constants';
import { generate_raw_data, calculateMonthlyAverages } from './data_raw_generator';

function LineChart() {
    const raw_data = generate_raw_data(calculateMonthlyAverages(datos), paleta1);
    const yaxis_title = 'temperature';
    const data: Record<string, any>[] = [];
    for (const data_instance of raw_data) {
        data.push(data_instance.get_plotline_information());
    }

    return (
        <Plot
          data={data}
          config={{
            responsive: true,
            displayModeBar: true,
            modeBarPosition: 'top', // Mover la barra de herramientas a la parte superior
          }}
          layout={{
            autosize: true,
            height: 160, // Altura baja del gráfico
            width: 260,
            margin: { t: 40, r: 10, l: 40, b: 40 }, // Ajustar márgenes
            yaxis: {
              title: yaxis_title,
              tickfont: { size: 10 }, // Tamaño de la fuente de los ticks del eje Y
              automargin: true, // Ajustar automáticamente el margen
            },
            xaxis: {
              tickfont: { size: 10 }, // Tamaño de la fuente de los ticks del eje X
              automargin: true, // Ajustar automáticamente el margen
            },
            showlegend: false, // Ocultar leyenda
          }}
        />
    );
}

export default LineChart;
