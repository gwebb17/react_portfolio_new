import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import About from 'components/about/About';

function App() {
    return (
      <>
        <div className="app__nav">
          <Nav />     
        </div>
        <div className="app__about">
          <About />
        </div>
      </>
    );
}

export default App;
