import globalStyles from '@/styles/Main.module.css';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={globalStyles.container}>
            <footer className={styles.footer}>
                <p>© {new Date().getUTCFullYear()} by Vinit J. All rights reserved.</p>
                <a
                    href="https://github.com/"
                    className={styles.sourceCodeLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Source Code
                </a>
            </footer>
        </div>
    );
};

export default Footer;