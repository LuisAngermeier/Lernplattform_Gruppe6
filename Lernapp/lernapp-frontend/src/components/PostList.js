// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = ({ onSelectPost }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} onClick={() => onSelectPost(post)}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
