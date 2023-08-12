
//SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import About from 'components/about/About';
import Resume from 'components/resume/Resume';

export default () => {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
        >
            <SwiperSlide>
                <About/>
            </SwiperSlide>
            <SwiperSlide>
                <Resume/>
            </SwiperSlide>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </Swiper>
    );
};