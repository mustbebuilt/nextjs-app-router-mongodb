import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/films">Films</Link>
      <Link href="/internaldata">Internal Data</Link>
      <Link href="/externalapi">External Api</Link>
      <Link href="/post">Posts from Db</Link>
      <p>https://www.youtube.com/watch?v=vCOSTG10Y4o&t=89s</p>
    </main>
  );
}
