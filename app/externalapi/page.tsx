import styles from "../page.module.css";

const getData = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) throw new Error(res.statusText);

    return res.json();

}

const BlogPage = async () => {

    const posts = await getData();

    return (
        <main className={styles.main}>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default BlogPage;