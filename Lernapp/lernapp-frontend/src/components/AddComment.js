// src/components/AddComment.js
import React, { useState } from 'react';
import axios from 'axios';

const AddComment = ({ postId, onCommentAdded }) => {
    const [content, setContent] = useState('');

    const handleAddComment = () => {
        axios.post('http://localhost:8080/comments', {
            postId,
            content,
            author: 'Anonymous',
            timestamp: new Date().toISOString()
        })
            .then(response => {
                onCommentAdded(response.data);
                setContent('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <input
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default AddComment;
