import { getUser } from "@/lib/livedata";
import styles from "./userDetails.module.css";
import Image from "next/image";

const UserDetails = async ({ userId }) => {
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span className={styles.title}>Author {userId}</span>
                <span className={styles.username}>UserName: {user.username}</span>
            </div>
        </div>
    );
};

export default UserDetails;