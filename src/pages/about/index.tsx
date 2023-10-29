import Head from 'next/head'
import globalStyles from '@/styles/Main.module.css'
import styles from './AboutPage.module.css'
import Image from "next/image";
import abt from "../../../public/about.webp";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>Slate - About</title>
                <meta name="description" content="Slate - About" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={globalStyles.container}>
                <h1 className={globalStyles.mainTitle}>About</h1>
                <section className={styles.aboutMeSection}>
                    <header className={styles.imageContainer}>
                        <Image src={abt} placeholder="blur" alt="Slate" className={styles.image} />
                        <div>
                            <p>
                            Welcome to Slate
                            </p>
                            <p>
                                Your go-to source for the latest in tech news and all things related to technology. 
                                We're dedicated to bringing you insightful and engaging content that keeps you informed 
                                about the fast-paced world of innovation. 👋
                            </p>
                            <p>
                                At Slate, we believe that technology is not just a tool, 
                                but a driving force that shapes our world. Our mission is to deliver accurate, timely, 
                                and compelling information about the ever-evolving tech landscape. 
                                Whether it's breakthroughs in artificial intelligence, the latest gadgets, 
                                or in-depth analyses of industry trends, we've got you covered.
                            </p>
                            
                            <p>
                                If you are interested in more information about Slate.
                            </p>
                            <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.button}>
                                Check out my Github
                            </Link>
                        </div>
                    </header>
                </section>
            </main>
        </>
    )
}