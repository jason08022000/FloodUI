import React from 'react';

const ControlButtons = ({ onStart, onPause, onReset }) => {
    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={onStart}>Start</button>
            <button style={styles.button} onClick={onPause}>Pause</button>
            <button style={styles.button} onClick={onReset}>Reset</button>
        </div>
    );
};

const styles = {
    container: {
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        marginRight: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ControlButtons;
