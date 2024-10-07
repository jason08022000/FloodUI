import React from 'react';

const NavigationBar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Flood Prediction Model</h1>
            <ul style={styles.navLinks}>
                <li><a href="#home" style={styles.link}>Home</a></li>
                <li><a href="#about" style={styles.link}>About</a></li>
                <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
        color: 'white',
    },
    title: {
        margin: 0,
    },
    navLinks: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
};

export default NavigationBar;
