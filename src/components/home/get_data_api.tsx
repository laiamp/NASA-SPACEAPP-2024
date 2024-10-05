import { Plotline, paleta2 } from './constants';
import axios from 'axios';

async function fetchDataAPI(url: string, params: Record<string, any>): Promise<any> {
    try {
        const response = await axios.get(url, {
            params: params
        });
        return response.data;
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        throw error;
    }
}

const APIurl = 'https://127.0.0.1:5000/data'; // Cambia esto a la URL que desees
const fieldid = '1234'

fetchDataAPI(APIurl, { 'id': fieldid })
    .then(data => {
        console.log('Datos recibidos:', data); // Maneja los datos recibidos
    })
    .catch(error => {
        console.error('Se produjo un error:', error); // Manejo del error
    });