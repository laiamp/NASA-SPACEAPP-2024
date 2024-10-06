const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class Plotline {
    private year: number;
    private data: (number | null)[];
    private color: string;

    constructor(year: number, data: (number | null)[], color: string) {
        this.year = year;
        this.data = data;
        this.color = color;
    }

    public get_year(): number {
        return this.year;
    }

    public get_data(): (number | null)[] {
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

export interface TemperatureData {
    date: string;
    temperature: number;
}

export interface MonthlyAverage {
    [year: number]: (number | null)[];
}

export const temperaturePalette = ['#FFCCCB', '#FF9999', '#FF6666', '#FF3333', '#FF0000', '#B22222'];
export const humidityPalette = ['#A8E6CE', '#66BB6A', '#388E3C', '#2E7D32', '#1B5E20', '#004D40'];
export const rainfallPalette = ['#003366', '#336699', '#6699CC', '#99CCFF', '#CCE5FF'];
