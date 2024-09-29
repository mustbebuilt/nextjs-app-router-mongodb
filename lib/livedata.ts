import { Post } from "@/models/Post";
import { connectDB } from "./db";
import { User } from "@/models/User";

export const getPosts = async () => {
    try {
        connectDB();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Error in getPosts");
    }
}

export const getPost = async (slug) => {
    try {
        connectDB();
        const post = await Post.findOne({ slug });
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Error in getPost");
    }
}

export const getUsers = async () => {
    try {
        connectDB();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Error in getPosts");
    }
}

export const getUser = async (id) => {
    try {
        connectDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Error in getUser");
    }
}