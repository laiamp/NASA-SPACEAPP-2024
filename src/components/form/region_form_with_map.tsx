import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, Rectangle } from "react-leaflet";
import L from "leaflet";

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

// Configuramos el ícono del marcador
const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});

// Componente que permite seleccionar puntos en el mapa
const MapClickHandler = ({ onClick }: { onClick: (lat: number, lon: number) => void }) => {
    useMapEvents({
        click(e) {
            onClick(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
};

const RegionFormWithMap: React.FC = () => {
    // Estado para almacenar los puntos seleccionados
    const [points, setPoints] = useState<{
        topLeft: { lat: number; lon: number } | null;
        bottomRight: { lat: number; lon: number } | null;
    }>({
        topLeft: null,
        bottomRight: null,
    });

    // Estado para almacenar los datos del feed
    const [feed, setFeed] = useState<string[]>([]);

    // Manejador de selección de puntos
    const handleMapClick = (lat: number, lon: number) => {
        if (!points.topLeft) {
            setPoints({ ...points, topLeft: { lat, lon } });
        } else if (!points.bottomRight) {
            setPoints({ ...points, bottomRight: { lat, lon } });
        }
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!points.topLeft || !points.bottomRight) {
            alert("Selecciona ambos puntos de la región.");
            return;
        }

        const region: Region = {
            topLeft: {
                lat: points.topLeft.lat,
                lon: points.topLeft.lon,
            },
            bottomRight: {
                lat: points.bottomRight.lat,
                lon: points.bottomRight.lon,
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

                // Actualizar el feed con la respuesta
                setFeed((prevFeed) => [...prevFeed, JSON.stringify(data)]);
            } else {
                console.error("Error al enviar los datos:", response.statusText);
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    // Manejador para resetear la selección
    const handleReset = () => {
        setPoints({ topLeft: null, bottomRight: null });
    };

    // Manejador para mover marcadores
    const handleMarkerDrag = (type: 'topLeft' | 'bottomRight', lat: number, lon: number) => {
        setPoints((prevPoints) => ({
            ...prevPoints,
            [type]: { lat, lon },
        }));
    };

    // Calcular los límites del rectángulo a partir de los puntos seleccionados
    const getBounds = () => {
        if (points.topLeft && points.bottomRight) {
            return [
                [points.topLeft.lat, points.topLeft.lon],
                [points.bottomRight.lat, points.bottomRight.lon],
            ];
        }
        return null;
    };

    // Función para manejar el cambio en las coordenadas introducidas manualmente
    const handleCoordinateChange = (type: 'topLeft' | 'bottomRight', lat: string, lon: string) => {
        const newPoints = {
            ...points,
            [type]: {
                lat: parseFloat(lat),
                lon: parseFloat(lon),
            },
        };

        // Solo actualiza si ambas coordenadas son válidas
        if (!isNaN(newPoints[type]!.lat) && !isNaN(newPoints[type]!.lon)) {
            setPoints(newPoints);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Point 1: </label>
                    <input
                        type="number"
                        placeholder="Latitud"
                        value={points.topLeft ? points.topLeft.lat : ''}
                        onChange={(e) => handleCoordinateChange('topLeft', e.target.value, points.topLeft?.lon.toString() || '')}
                    />
                    <input
                        type="number"
                        placeholder="Longitud"
                        value={points.topLeft ? points.topLeft.lon : ''}
                        onChange={(e) => handleCoordinateChange('topLeft', points.topLeft?.lat.toString() || '', e.target.value)}
                    />
                </div>
                <div>
                    <label>Point 2: </label>
                    <input
                        type="number"
                        placeholder="Latitud"
                        value={points.bottomRight ? points.bottomRight.lat : ''}
                        onChange={(e) => handleCoordinateChange('bottomRight', e.target.value, points.bottomRight?.lon.toString() || '')}
                    />
                    <input
                        type="number"
                        placeholder="Longitud"
                        value={points.bottomRight ? points.bottomRight.lon : ''}
                        onChange={(e) => handleCoordinateChange('bottomRight', points.bottomRight?.lat.toString() || '', e.target.value)}
                    />
                </div>


                {/* Mapa */}
                <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MapClickHandler onClick={handleMapClick} />
                    {points.topLeft && (
                        <Marker
                            position={[points.topLeft.lat, points.topLeft.lon]}
                            icon={markerIcon}
                            draggable
                            eventHandlers={{
                                dragend: (e) => {
                                    const { lat, lng } = e.target.getLatLng();
                                    handleMarkerDrag("topLeft", lat, lng);
                                },
                            }}
                        />
                    )}
                    {points.bottomRight && (
                        <Marker
                            position={[points.bottomRight.lat, points.bottomRight.lon]}
                            icon={markerIcon}
                            draggable
                            eventHandlers={{
                                dragend: (e) => {
                                    const { lat, lng } = e.target.getLatLng();
                                    handleMarkerDrag("bottomRight", lat, lng);
                                },
                            }}
                        />
                    )}
                    {getBounds() && <Rectangle bounds={getBounds() as L.LatLngBoundsExpression} />}
                </MapContainer>
                <button type="submit" disabled={!points.topLeft || !points.bottomRight}>
                    Send field
                </button>
                <button type="button" onClick={handleReset}>
                    Reset form
                </button>
            </form>
        </div>
    );
};

export default RegionFormWithMap;
