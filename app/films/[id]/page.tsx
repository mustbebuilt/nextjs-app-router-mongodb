// app/films/[id]/page.tsx
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import { connectDB } from "@/lib/db";
import { Film } from "@/models/Film";

type PageProps = {
  params: { id: string };
};

export default async function FilmPage({ params }: PageProps) {
  await connectDB();

  const { id } = params;

  let film: any = null;

  try {
    console.log(`Looking for film with id: ${id}`);
    console.log(`Type of id: ${typeof id}`);
    // If your _id fields are ObjectIds, you might need to convert the string id to an ObjectId:
    // Works whether _id is ObjectId or String. If id can't be cast to ObjectId,
    // Mongoose will throw a CastError and we fall through to 404.
    film = await Film.findById({ _id: id }).lean();
  } catch (err: any) {
    if (err?.name === "CastError") {
      notFound();
    }
    throw err; // unexpected error: surface it
  }

  if (!film) {
    notFound();
  }

  const releaseDate =
    film.releaseDate ? new Date(film.releaseDate).toDateString() : "N/A";

  return (
    <main className={styles.main}>
      <h1>{film.filmTitle}</h1>
      <p>Certificate: {film.filmCertificate}</p>
      <p>Description: {film.filmDescription}</p>
      <p>Price: {film.filmPrice}</p>
      <p>Stars: {film.stars}</p>
      <p>Release Date: {releaseDate}</p>
    </main>
  );
}
