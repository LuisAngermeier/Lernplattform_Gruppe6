// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Willkommen zur Lernplattform</h1>
      <nav className="mt-4">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/material-exchange">Austausch von Lernmaterialien</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/study-groups">Organisation von Lerngruppen</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/discussion-forum">Diskussionsforum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
