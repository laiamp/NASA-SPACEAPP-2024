import React, { useState } from "react";

// Definimos la estructura de la región
interface Region {
    topLeft: {
        lat: number;
        lon: number;
    };
    bottomRight: {
        lat: number;
        lon: number;
    };
}

const RegionForm: React.FC = () => {
    // Estado para almacenar los valores del formulario
    const [formValues, setFormValues] = useState({
        lat1: "",
        lon1: "",
        lat2: "",
        lon2: "",
    });

    // Manejador de cambio para actualizar los valores del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Convertir los valores de latitud y longitud a número
        const region: Region = {
            topLeft: {
                lat: parseFloat(formValues.lat1),
                lon: parseFloat(formValues.lon1),
            },
            bottomRight: {
                lat: parseFloat(formValues.lat2),
                lon: parseFloat(formValues.lon2),
            },
        };

        // Enviar los datos a la API
        try {
            const response = await fetch("https://api.tuapi.com/region", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(region),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Datos enviados con éxito:", data);
            } else {
                console.error("Error al enviar los datos:", response.statusText);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    return (
        <div>
            <h2>Define una región cuadrada de tu parcela</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Latitud Punto Superior Izquierdo:</label>
                    <input
                        type="number"
                        name="lat1"
                        value={formValues.lat1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Longitud Punto Superior Izquierdo:</label>
                    <input
                        type="number"
                        name="lon1"
                        value={formValues.lon1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Latitud Punto Inferior Derecho:</label>
                    <input
                        type="number"
                        name="lat2"
                        value={formValues.lat2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Longitud Punto Inferior Derecho:</label>
                    <input
                        type="number"
                        name="lon2"
                        value={formValues.lon2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar región</button>
            </form>
        </div>
    );
};

export default RegionForm;
