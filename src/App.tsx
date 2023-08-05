import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Nav from 'components/navbar/Nav';
import About from 'components/about/About';
import Resume from 'components/resume/Resume';

function App() {
  return (
    <>
      <div className='app__nav'>
        <Nav />     
      </div>
      <div className='app__about_container'>
          <div className='app__about'>
            <About />
          </div>
      </div>
      <div className='app__resume_container'>
          <div className='app__resume'>
              <Resume />
          </div>
      </div>
    </>
  );
}

export default App;
