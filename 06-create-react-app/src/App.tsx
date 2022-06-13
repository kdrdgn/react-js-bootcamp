import React, { useContext } from 'react';
import './App.css';
import CounterUseEffect from './01-basic-hooks/CounterUseEffect';
import SwitchButton from './02-advance-hooks/SwitchButton';
import { ThemeContext } from './02-advance-hooks/ThemeContext';
import Todo from './02-custom-hooks/Todo';
import { Link } from 'react-router-dom';

function App() {
  
  const theme = useContext(ThemeContext)

  const darkMode = theme.state.darkMode;

  return (
    <div className={`App ${darkMode ? "bg-dark" : "bg-light"}`}>
      <SwitchButton />
      <Todo />
      <Link to="counter">Go to counter</Link>
    </div>
  );
}

export default App;
