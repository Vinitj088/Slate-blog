import Head from 'next/head'
import styles from '@/styles/Main.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Vinit J - Not found</title>
                <meta name="description" content="Vinit J - Not found" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.container}>
                <div className={styles.errorContainer}>
                    <h1>404</h1>
                    <p>Oops! Page not found</p>
                </div>
            </main>
        </>
    )
}