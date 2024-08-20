// src/App.js
import React, { useState } from 'react';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleSelectPost = post => {
    setSelectedPost(post);
  };

  const handlePostAdded = newPost => {
    setPosts([...posts, newPost]);
    setSelectedPost(newPost);
  };

  return (
      <div className="App">
        <h1>Lernapp</h1>
        <AddPost onPostAdded={handlePostAdded} />
        <PostList onSelectPost={handleSelectPost} />
        <PostDetail post={selectedPost} />
      </div>
  );
};

export default App;
