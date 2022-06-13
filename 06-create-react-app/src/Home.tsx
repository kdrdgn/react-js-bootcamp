import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {

  const counter = 0;

  return (
    <div>      
      <ul>
        <li>
          <Link to={`/counter/${counter}`}>🔢  Counter</Link>
        </li>
        <li>
          <Link to="/todo">🗒  Todo List</Link>
        </li>
        <li>
          <Link to="/styling">🌈 Styling</Link>
        </li>
        <li>
          <Link to="/redux">🎛 Redux</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
