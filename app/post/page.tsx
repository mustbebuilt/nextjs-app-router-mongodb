import styles from "../page.module.css";
import { getPosts } from '../../lib/livedata';
import UserDetails from "@/components/userDetails";




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
                        <UserDetails userId={post.userId} />
                    </li>

                ))}
            </ul>
        </main>
    )

}

export default BlogPage;