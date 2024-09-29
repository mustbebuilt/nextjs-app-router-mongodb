const users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Fred'
    },
    {
        id: 3,
        name: 'Jane'
    },
    {
        id: 4,
        name: 'Mary'
    },
    {
        id: 5,
        name: 'Anna'
    },
    {
        id: 6,
        name: 'Peter'
    },
    {
        id: 7,
        name: 'Tom'
    },
    {
        id: 8,
        name: 'Alice'
    },
    {
        id: 9,
        name: 'Kate'
    },
    {
        id: 10,
        name: 'Sue'
    }
]
const posts = [
    { id: 1, title: 'Post 1', body: 'This is post 1', userId: 1 },
    { id: 2, title: 'Post 2', body: 'This is post 2', userId: 2 },
    { id: 3, title: 'Post 3', body: 'This is post 3', userId: 3 },
    { id: 4, title: 'Post 4', body: 'This is post 4', userId: 4 },
    { id: 5, title: 'Post 5', body: 'This is post 5', userId: 5 },
    { id: 6, title: 'Post 6', body: 'This is post 6', userId: 6 },
    { id: 7, title: 'Post 7', body: 'This is post 7', userId: 7 }
]

export const getPosts = async () => {
    return posts;
}