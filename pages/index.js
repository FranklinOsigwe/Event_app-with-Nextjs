import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
 
export default function Home({data}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Events app</title>
                <meta name="description" content="Generated by create" />
                 <link rel="icon" href='/favicon.ico' />
            </Head>
            
            <header>
                <nav>
                    <Link href="/" passHref>
                        <a>Home</a>
                    </Link>

                    <Link href="/events/london" passHref>
                        <a>Events</a>
                    </Link>
                     
                    <Link href="/about-us" passHref>
                    <a>About Us</a>
                    </Link>
                <img />
                </nav>
            </header>
/** */
            <main className={styles.main}>
                {data.map((ev) => (
                    <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                    <a key={ev.id}>
                        <Image width={300} height={'300'} src={ev.image} alt={ev.title}  />
                        
                        <h2>{ev.title}</h2> <p>{ev.description}</p>
                        
                    </a>
                    </Link>
                ))}

                <a href="events/london">
                    <img />
                    <h2>Event in London</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                </a>
            </main>

            <footer className={styles.footer}>
              <p>@ 2022 Time to Code - A Project Built with next.js</p>
            </footer>
        </div>
    )
}

export async function getServerSideProps() {
    const {events_categories} = await import('/data/data.json');
    console.log({events_categories} )
    return {
    props: {
        data: events_categories
    },
}
}