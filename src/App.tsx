import React from 'react';
import './App.css';
import Nav from 'components/navbar/Nav';
import About from 'components/about/About';
import Resume from 'components/resume/Resume';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//*Initialize Swiper*//
//https://swiperjs.com/get-started
const swiper = new Swiper('.swiper',{
  modules: [Navigation, Pagination],  //configure swiper to use these modules
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function App() {
    return (
      <>
        <div className='app__nav'>
          <Nav />     
        </div>
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <div className='app__about_container swiper-slide slide_1'>
                <div className='app__about'>
                  <About />
                </div>
            </div>
            <div className='app__resume_container swiper-slide slide_2'>
                <div className='app__resume'>
                    <Resume />
                </div>
            </div>

            <div className='swiper-pagination'></div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
            <div className='swiper-scrollbar'></div>

          </div>
        </div>
      </>
    );
}

export default App;
