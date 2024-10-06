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

export interface Data {
    date: string;
    value: number;
}

export interface MonthlyAverage {
    [year: number]: (number | null)[];
}

export const temperaturePalette = ['#B22222', '#FF0000', '#FF3333', '#FF6666', '#FF9999', '#FFCCCB'];
export const humidityPalette = ['#004D40', '#1B5E20', '#2E7D32', '#388E3C', '#66BB6A', '#A8E6CE'];
export const rainfallPalette = ['#003366', '#336699', '#6699CC', '#99CCFF', '#CCE5FF'];
