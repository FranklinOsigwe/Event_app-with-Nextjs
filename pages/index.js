import styles from '../styles/Home.module.css';
import Head from 'next/head'
 
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Event Apps</title>
                   
            </Head>
            
            <header>
                <nav>
                <img />
                <a href="/">Home</a>
                <a href="/events">Events</a>
                <a href="/about-us">About Us</a>
                </nav>
            </header>

            <main className={styles.main}>
                <div>
                    <img />
                    <h2>Event in London</h2>
                    <p>{' '}</p>
                </div>

            </main>
        </div>
    )
}