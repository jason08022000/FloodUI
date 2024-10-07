import React, { useState } from 'react';

const ParameterControls = ({ onParameterChange }) => {
    const [rainfall, setRainfall] = useState(50);

    const handleChange = () => {
        onParameterChange({ rainfall});
    };

    return (
        <div style={styles.container}>
            <h2>Adjust Model Parameters</h2>
            <div style={styles.control}>
                <label>Rainfall: {rainfall}</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={rainfall}
                    onChange={(e) => { setRainfall(e.target.value); handleChange(); }}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    control: {
        marginBottom: '15px',
    },
};

export default ParameterControls;
