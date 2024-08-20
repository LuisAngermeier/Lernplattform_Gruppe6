// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetail = ({ post }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        if (post) {
            axios.get(`http://localhost:8080/comments/post/${post.id}`)
                .then(response => setComments(response.data))
                .catch(error => console.error(error));
        }
    }, [post]);

    const handleAddComment = () => {
        axios.post('http://localhost:8080/comments', {
            postId: post.id,
            content: newComment,
            author: 'Anonymous',
            timestamp: new Date().toISOString()
        })
            .then(response => {
                setComments([...comments, response.data]);
                setNewComment('');
            })
            .catch(error => console.error(error));
    };

    if (!post) return null;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.author}</strong>: {comment.content}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default PostDetail;
