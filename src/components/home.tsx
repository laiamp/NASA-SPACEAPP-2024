import React from "react";
import { faAppleAlt, faCarrot, faPepperHot } from '@fortawesome/free-solid-svg-icons';
import Recommender from "./home/Recommender";
import CropsProgress from "./home/cropsProgress"; // Importa el nuevo componente

const cropsData = [
    { icon: faCarrot, label: 'Potato', progress: 75 },
    { icon: faPepperHot, label: 'Corn', progress: 58 },
    { icon: faAppleAlt, label: 'Tomato', progress: 24 }
];

const cropData = [
  { name: 'Corn', compatibility: 0.1 },
  { name: 'Wheat', compatibility: 0.7 },
  { name: 'Rice', compatibility: 0.8 },
  { name: 'Soybeans', compatibility: 0.5 },
  { name: 'Barley', compatibility: 0.6 },
];

function Home() {
    return (
        <div>
            <h2 style={{ color: '#333' }}>Welcome back, Luis</h2>
            <p style={{ color: '#555' }}>Here are your crops.</p>

            <CropsProgress cropsData={cropsData} /> {/* Usa el nuevo componente */}

            <h1> </h1>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '20px' }}>
                <Recommender crops={cropData} />
            </div>
        </div>
    );
}

export default React.memo(Home);
