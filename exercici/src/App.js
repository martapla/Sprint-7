import React from 'react';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Navbar pages={[
          {
            name: 'Inicio',
            link: '#',
            isActive: true,
          },
          {
            name: 'Checkbox',
            link: '/checkbox',
            isActive: false,
          }
        ]} />
      </header>
      <div className='container'>
        <h1>Welcome!</h1> <br/>
        <h2>Choose what service do you need and calculate your budget.</h2>
      </div>
    </div>
  );
}

export default App;
