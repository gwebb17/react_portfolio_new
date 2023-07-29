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
        <div className="app__about_container">
          <div className="app__about">
            <About />
          </div>
        </div>
      </>
    );
}

export default App;
