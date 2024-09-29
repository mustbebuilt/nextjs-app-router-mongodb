import Image from "next/image";
import styles from "../page.module.css";
import { connectDB } from '../../lib/db';
import { Film } from '../../models/Film';

export default async function Films() {

    'use server'
    await connectDB();

    const films = await Film.find({});

    return (
        <main className={styles.main}>
            <h1>Films</h1>
            <ul>
                {films.map((film) => (
                    <li key={film._id}>
                        <h2>{film.filmTitle}</h2>
                        <p>Certificate: {film.filmCertificate}</p>
                        <p>Description: {film.filmDescription}</p>
                        <p>Price: {film.filmPrice}</p>
                        <p>Stars: {film.stars}</p>
                        <p>Release Date: {film.releaseDate.toDateString()}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
