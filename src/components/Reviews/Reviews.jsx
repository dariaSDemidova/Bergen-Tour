import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import review1 from '../../assets/images/review_1.jpg';
import review2 from '../../assets/images/review_2.jpg';
import review3 from '../../assets/images/review_3.jpg';

import './Reviews.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Reviews = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img src={review1} alt='img1'/></SwiperSlide>
      <SwiperSlide><img src={review2} alt='img2'/></SwiperSlide>
      <SwiperSlide><img src={review3} alt='img3'/></SwiperSlide>
    </Swiper>
  );
}

export default Reviews;
