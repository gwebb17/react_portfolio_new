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
const SwiperAfterMount = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Parallax],
      
      spaceBetween: 0,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      parallax:true,
    
      direction: 'horizontal',
      loop: true,
      speed: 3200,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },      
    });
  },[]);

  //Have to return something in order to use the component SwiperAfterMount in the below App component
  //without calling SwiperAfterMount we don't initialize it properly hence the break on refresh bug
  return(
    <div>
    </div>
  )
}

function swiperRightClicked() {
  console.log("Right Swiper button clicked")
}
function swiperLeftClicked() {
  console.log("Left Swiper button clicked")
}

function App() {
  return (
    <>
      <SwiperAfterMount/>
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
