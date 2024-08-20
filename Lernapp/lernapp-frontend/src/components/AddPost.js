// src/components/AddPost.js
import React, { useState } from 'react';
import axios from 'axios';

const AddPost = ({ onPostAdded }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fach, setFach] = useState('');

    const handleAddPost = () => {
        axios.post('http://localhost:8080/posts', {
            title,
            content,
            author: 'Anonymous',
            timestamp: new Date().toISOString(),
            fach,
            comments: [],
            files: []
        })
            .then(response => {
                onPostAdded(response.data);
                setTitle('');
                setContent('');
                setFach('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Add New Post</h2>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Content"
            />
            <input
                type="text"
                value={fach}
                onChange={e => setFach(e.target.value)}
                placeholder="Fach"
            />
            <button onClick={handleAddPost}>Add Post</button>
        </div>
    );
};

export default AddPost;
