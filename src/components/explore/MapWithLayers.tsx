import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient('https://xerznahnphhiokptbyjx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlcnpuYWhucGhoaW9rcHRieWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzM0MzIsImV4cCI6MjA0MzcwOTQzMn0.43Ix3rbImmo4f_n0LiGU0TW7FbexOs4O31zgwc5ppTI');

// Fix marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const { BaseLayer, Overlay } = LayersControl;

const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const MapWithLayers = () => {
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('landmarks')
        .select('*');
    
      if (error) {
        console.error('Error fetching markers:', error);
      } else {
        setLayers(data);
      }
    };
    fetchData();
  }, []);

  // Function to add a new marker layer to Supabase and the map
  const addLayer = async (latlng) => {
    const markerName = window.prompt('Enter a name for the marker:', 'My Marker');
    if (markerName) {
      const newLayer = {
        lat: latlng.lat,
        lon: latlng.lng,
        name: markerName,
      };
      const { error, data } = await supabase
        .from('landmarks')
        .insert(newLayer)
        .select('*');

      if (error) {
        console.log('Error inserting marker:', error);
      } else {
        setLayers([...layers, newLayer ]);
      }
    }
  };

  const deleteLayer = async (id, e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the map
    const { error } = await supabase
      .from('landmarks')
      .delete()
      .eq('id', id);

    if (error) {
      console.log('Error deleting marker:', error);
    } else {
      setLayers(layers.filter(layer => layer.id !== id));
    }
  };

  return (
    <div>
      <p>Click on the map to add a marker layer. You can delete or name each marker from the popup.</p>

      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '200px', width: '100%' }}>
        <MapClickHandler onMapClick={addLayer} />

        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>

          {layers.length > 0 && layers.map((layer) => (
            <Overlay key={layer.id} checked name={layer.name}>
              <LayerGroup>
                <Marker position={[layer.lat, layer.lon]}>
                  <Popup>
                    <strong>{layer.name}</strong>
                    <br />
                    Coordinates: {layer.lat.toFixed(4)}, {layer.lon.toFixed(4)}
                    <br />
                    <button onClick={(e) => deleteLayer(layer.id, e)}>Delete Marker</button>
                  </Popup>
                </Marker>
              </LayerGroup>
            </Overlay>
          ))}
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapWithLayers;
