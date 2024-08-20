import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [fachFilter, setFachFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error(error));
  }, []);

  const handleSelectPost = post => {
    setSelectedPost(post);
  };

  const handlePostAdded = newPost => {
    setPosts([...posts, newPost]);
    setSelectedPost(newPost);
  };

  const handleFachFilterChange = (event) => {
    setFachFilter(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
      post.fach.toLowerCase().includes(fachFilter.toLowerCase())
  );

  return (
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Post Management</h1>
                <AddPost onPostAdded={handlePostAdded} />
                <input
                    type="text"
                    value={fachFilter}
                    onChange={handleFachFilterChange}
                    placeholder="Filter by subject"
                />
                <PostList posts={filteredPosts} onSelectPost={handleSelectPost} />
                <PostDetail post={selectedPost} />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer>
            <p>&copy; 2024 Lernapp. All rights reserved.</p>
          </footer>
        </div>
      </Router>
  );
};

export default App;
