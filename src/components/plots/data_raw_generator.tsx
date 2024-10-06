import { MonthlyAverage, Data, Plotline } from "./constants";

export function generate_raw_data(data: MonthlyAverage, paleta: string[]): Plotline[] {
    const raw_data: Plotline[] = [];

    let i = 0;
    Object.keys(data).map(Number).sort((a, b) => b - a).forEach(year => {
        raw_data.push(new Plotline(year, data[year], paleta[i]));
        i = i + 1;
    });

    return raw_data;
}


export function calculateMonthlyAverages(data: Data[]): MonthlyAverage {
    const monthlyTotals: { [key: string]: { sum: number; count: number } } = {};

    data.forEach(entry => {
        const date = new Date(entry.date);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth(); // Meses de 0 a 11

        const key = `${year}-${month}`;

        if (!monthlyTotals[key]) {
            monthlyTotals[key] = { sum: 0, count: 0 };
        }
        monthlyTotals[key].sum += entry.value;
        monthlyTotals[key].count += 1;
    });

    const monthlyAverages: MonthlyAverage = {};

    for (const key in monthlyTotals) {
        const [year, month] = key.split('-');
        const average = monthlyTotals[key].sum / monthlyTotals[key].count;

        if (!monthlyAverages[Number(year)]) {
            monthlyAverages[Number(year)] = new Array(12).fill(null);
        }
        monthlyAverages[Number(year)][Number(month)] = average;
    }

    return monthlyAverages;
}