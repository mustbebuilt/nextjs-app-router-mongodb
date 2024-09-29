// Create some dummy data
const dummyPosts = [
    {
        title: "Post 1",
        desc: "This is the first post.",
        img: "https://example.com/post1.jpg",
        userId: "user1",
        slug: "post1"
    },
    {
        title: "Post 2",
        desc: "This is the second post.",
        img: "https://example.com/post2.jpg",
        userId: "user2",
        slug: "post2"
    },
    {
        title: "Post 3",
        desc: "This is the third post.",
        img: "https://example.com/post3.jpg",
        userId: "user3",
        slug: "post3"
    },
    {
        title: "Post 4",
        desc: "This is the fourth post.",
        img: "https://example.com/post4.jpg",
        userId: "user4",
        slug: "post4"
    },
    {
        title: "Post 5",
        desc: "This is the fifth post.",
        img: "https://example.com/post5.jpg",
        userId: "user5",
        slug: "post5"
    }
];

// Save the dummy data to the database
async function saveDummyPosts() {
    try {
        connectDB();
        for (const post of dummyPosts) {
            const newPost = new Post(post);
            await newPost.save();
        }
        console.log("Dummy posts saved successfully.");
    } catch (err) {
        console.log(err);
    }
}

// Call the function to save the dummy data
saveDummyPosts();