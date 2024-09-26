import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import review1 from '../../assets/images/reviews/review_1.jpg';
import review2 from '../../assets/images/reviews/review_2.jpg';
import review3 from '../../assets/images/reviews/review_3.jpg';
import fullReview1 from '../../assets/images/reviews/fullReview1.jpg';
import fullReview2 from '../../assets/images/reviews/fullReview2.jpg';
import fullReview3 from '../../assets/images/reviews/fullReview3.jpg';

import './Reviews.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Reviews = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img src={review1} alt='img1' onClick={() => handleImageClick(fullReview1)}/></SwiperSlide>
        <SwiperSlide><img src={review2} alt='img2' onClick={() => handleImageClick(fullReview2)}/></SwiperSlide>
        <SwiperSlide><img src={review3} alt='img3' onClick={() => handleImageClick(fullReview3)}/></SwiperSlide>
      </Swiper>

      {selectedImage && (
        <div className="reviews__modal" onClick={handleCloseModal}>
          <div className="reviews__modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="reviews__modal-close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="Full review" />
          </div>
        </div>
      )}
    </>
  );
}

export default Reviews;
