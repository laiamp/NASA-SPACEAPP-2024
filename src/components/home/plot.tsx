import React from 'react';
import Plot from 'react-plotly.js';

// Meses del año
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Clase Plotline
class Plotline {
    private year: number;
    private data: number[];
    private color: string;

    constructor(year: number, data: number[], color: string) {
        this.year = year;
        this.data = data;
        this.color = color;
    }

    public get_year(): number {
        return this.year;
    }

    public get_data(): number[] {
        return this.data;
    }

    public get_color(): string {
        return this.color;
    }

    public get_plotline_information(): Record<string, any> {
        return {
            x: months,
            y: this.data,
            mode: 'lines+markers',
            type: 'scatter',
            marker: { color: this.color },
            line: { shape: 'linear', color: this.color },
            name: this.year.toString(),
        };
    }
}

function get_humidity_from_api(

)

const paleta1 = ['#243642', '#387478', '#629584', '#E2F1E7']
const paleta2 = ['#16423C', '#6A9C89', '#C4DAD2', '#E9EFEC']

function ScatterPlot() {
    const raw_data: Plotline[] = [
        new Plotline(2020, [5, 10, 8, 12, 18, 15, 20, 22, 14, 28, 16, 30], paleta2[0]),   // Cambié los valores para 2020
        new Plotline(2021, [7, 12, 15, 19, 21, 18, 24, 26, 20, 22, 30, 32], paleta2[1]), // Cambié los valores para 2021
        new Plotline(2022, [6, 14, 10, 16, 21, 17, 22, 28, 18, 24, 12, 20], paleta2[2]), // Cambié los valores para 2022
    ];
    const yaxis_title = 'temperature';
    const data: Record<string, any>[] = [];
    for (const data_instance of raw_data) {
        data.push(data_instance.get_plotline_information());
    }

    return (
        <div>
            <Plot
                data={data}
                config={{ responsive: true }}
                layout={{
                    title: 'Scatter Plot with Line',
                    yaxis: {
                        title: yaxis_title,
                    },
                }}
            />
        </div>
    );
};

export default React.memo(ScatterPlot)
