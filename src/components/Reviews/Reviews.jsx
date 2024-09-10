import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import review1 from '../../assets/images/review_1.jpg';
import review2 from '../../assets/images/review_2.jpg';
import review3 from '../../assets/images/review_3.jpg';

import './Reviews.scss';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img src={review1} alt='img1'/> </SwiperSlide>
      <SwiperSlide><img src={review2} alt='img2'/> </SwiperSlide>
      <SwiperSlide><img src={review3} alt='img3'/> </SwiperSlide>

      
    </Swiper>
  );
};