import styles from './Resume.css';
import AppContext from '../../AppContext.js';

const Resume = () => {
    return (
        <div className='resume__outer_container'>
            <h2 className='resume__header_text'>
                RESUME
            </h2>
            <p className='resume__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Vestibulum sed arcu non odio euismod lacinia. Nunc vel risus commodo viverra maecenas accumsan lacus. Nunc id cursus metus aliquam. 
                Ac odio tempor orci dapibus ultrices in iaculis nunc. Lectus sit amet est placerat. Sed tempus urna et pharetra pharetra massa massa. 
                Fermentum iaculis eu non diam phasellus vestibulum. Dolor sit amet consectetur adipiscing elit duis tristique. Sed augue lacus viverra 
                vitae congue eu consequat ac felis. Tempor nec feugiat nisl pretium. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Id 
                ornare arcu odio ut sem nulla. Nam aliquam sem et tortor consequat id. Morbi enim nunc faucibus a pellentesque. Sem nulla pharetra diam sit. 
                Aliquam nulla facilisi cras fermentum odio eu feugiat. Aliquet lectus proin nibh nisl condimentum id. Ac feugiat sed lectus vestibulum mattis 
                ullamcorper. Gravida cum sociis natoque penatibus et. Risus ultricies tristique nulla aliquet enim tortor at. Arcu bibendum at varius vel 
                pharetra. Pellentesque habitant morbi tristique senectus et.
            </p>

            {/* <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide_1">Slide 1</div>
                    <div class="swiper-slide slide_2">Slide 2</div>
                    <div class="swiper-slide slide_3">Slide 3</div>
                    <div class="swiper-slide slide_4">Slide 4</div>
                    <div class="swiper-slide slide_5">Slide 5</div>
                </div>
            </div> */}
        </div>
    )
}

export default Resume;