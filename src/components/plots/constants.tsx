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

export const paleta1 = ['#243642', '#387478', '#629584', '#E2F1E7']
export const paleta2 = ['#16423C', '#6A9C89', '#C4DAD2', '#E9EFEC']