import React, { useEffect } from 'react';
import styles from './slider.module.css'; // Import your styles here
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes'; // Import useTheme

const Slider = () => {
    const { theme } = useTheme(); // Get the current theme
    const isDarkMode = theme === "dark";
    
  return (
    <div>
        <div className={`${styles.scrolling_text} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <div className={`${styles.text} ${isDarkMode ? styles.darkModetext : styles.lightModetext}`}>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
            </div>
            <div className={`${styles.text} ${isDarkMode ? styles.darkModetext : styles.lightModetext}`}>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
                <span>LATEST ARTICLES - </span>
            </div>
        </div>
    </div>
    );
};

export default Slider;
