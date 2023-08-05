import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Nav from 'components/navbar/Nav';
import About from 'components/about/About';
import Resume from 'components/resume/Resume';
//SWIPER
import Swiper from 'swiper';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//init swiper
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Parallax],

  observer: true,
  observeParents: true,
  parallax:true,

  direction: 'horizontal',
  loop: false,
  speed: 2500,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//SWIPER BUG:
//page is mounting twice on refresh and once when IDE saves
//when page mounts twice the pagination and buttons dont work
//when page mounts once the pagination and buttons DO work
//possible solution could be using React way again and splitting Swiper into its own component


function swiperRightClicked() {
  console.log("Right Swiper button clicked")
}
function swiperLeftClicked() {
  console.log("Left Swiper button clicked")
}

function App() {
  useEffect(() => {
    console.log("mounted")
  },[]);

  return (
    <>
      <div className='app__nav'>
        <Nav />     
      </div>
      <div className='swiper'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div className='app__about_container'>
              <div className='app__about'>
                <About />
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='app__resume_container'>
              <div className='app__resume'>
                  <Resume />
              </div>
            </div>
          </div>
        </div>
        <div className='swiper-pagination'></div>
        <div className='swiper-button-prev' onClick={()=>swiperLeftClicked()}></div>
        <div className='swiper-button-next' onClick={()=>swiperRightClicked()}></div>
      </div>
    </>
  );
}

export default App;
