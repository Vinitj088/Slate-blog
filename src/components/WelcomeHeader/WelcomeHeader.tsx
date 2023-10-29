import Image from "next/image";
import DawidAbramImage from '../../../public/dawidabram.webp';
import styles from './WelcomeHeader.module.css';

const WelcomeHeader = () => {
    return (
        <header className={styles.welcomeContainer}>
            <h1>
                Welcome to Slate 👋 !! <br/>
                our guide to the latest in tech, offering expert insights and in-depth analysis on innovation.<br/>
            </h1>
        </header>
    );
}

export default WelcomeHeader;