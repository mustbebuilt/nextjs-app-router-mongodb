import styles from "../page.module.css";
import { getPosts } from '../../lib/harddata';




const BlogPage = async () => {

    const posts = await getPosts();

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