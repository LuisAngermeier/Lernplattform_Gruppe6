// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MaterialExchange from './components/MaterialExchange';
import StudyGroups from './components/StudyGroups';
import DiscussionForum from './components/DiscussionForum';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/material-exchange" element={<MaterialExchange />} />
      <Route path="/study-groups" element={<StudyGroups />} />
      <Route path="/discussion-forum" element={<DiscussionForum />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
