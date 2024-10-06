import React from "react";
import { faAppleAlt, faCarrot, faPepperHot } from '@fortawesome/free-solid-svg-icons';
import Recommender from "./home/Recommender";
import CropsProgress from "./home/cropsProgress"; // Importa el nuevo componente

const cropsData = [
    { icon: faCarrot, label: 'Potato', progress: 75 },
    { icon: faPepperHot, label: 'Corn', progress: 58 },
    { icon: faAppleAlt, label: 'Tomato', progress: 24 }
];

const itemsArray = [
    ['Item 1', 1],
    ['Item 2', 0.4],
    ['Item 3', 0.8],
    ['Item 4', 0],
    ['Item 5', 0.9],
];

function Home() {
    return (
        <div>
            <h2 style={{ color: '#333' }}>Welcome back, Luis</h2>
            <p style={{ color: '#555' }}>Bienvenido a la página de inicio.</p>

            <CropsProgress cropsData={cropsData} /> {/* Usa el nuevo componente */}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '20px' }}>
                <h2 style={{ color: '#333' }}>Crop Compatibility</h2>
                <Recommender items={itemsArray} />
            </div>
        </div>
    );
}

export default React.memo(Home);
