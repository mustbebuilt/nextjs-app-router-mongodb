import Image from "next/image";
import styles from "../page.module.css";
import { connectDB } from '../../lib/db';
import { Film } from '../../models/Film';
import Link from "next/link";

export default async function Films() {

    'use server'
    await connectDB();

    const films = await Film.find({});

    return (
        <main className={styles.main}>
            <h1>Films</h1>
            <ul>
                {films.map((film) => (
                    <div key={film._id}>
                        <h2>{film.filmTitle}</h2>
                        <p><Link href={`/films/${film._id}`}>More Details</Link></p>
                    </div>
                ))}
            </ul>
        </main>
    );
}
