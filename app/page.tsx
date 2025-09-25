import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the Next.js App Router with MongoDB Example</h1>
      <p>This is a simple application demonstrating the use of Next.js App Router with MongoDB.</p>
      <p>Explore the following sections:</p>
      <menu>
        <li><Link href="/films">Films</Link></li>
        <li><Link href="/internaldata">Internal Data</Link></li>
        <li><Link href="/externalapi">External Api</Link></li>
        <li><Link href="/post">Posts from Db</Link></li>
      </menu>
      <p>View: https://www.youtube.com/watch?v=vCOSTG10Y4o&t=89s</p>
    </main>
  );
}
