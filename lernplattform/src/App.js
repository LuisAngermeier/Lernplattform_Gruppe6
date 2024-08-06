// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Willkommen zur Lernplattform</h1>
      <nav>
        <ul>
          <li>
            <Link to="/material-exchange">Austausch von Lernmaterialien</Link>
          </li>
          <li>
            <Link to="/study-groups">Organisation von Lerngruppen</Link>
          </li>
          <li>
            <Link to="/discussion-forum">Diskussionsforum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
