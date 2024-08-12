import { useState } from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import './ServiceSlider.scss';

const ServiceSlider = ({ images}) => {
  const [position, setPosition] = useState(1);

  const slidesToScroll = 1;
  const totalSlides = images.length;

  const showSlides = (position) => {
    return {
      transform: `translateX(-${(position - 1) * 101}%)`
    };
  };

  const handlePrevClick = () => {
    setPosition(position === 1 ? totalSlides : position - slidesToScroll);
  };

  const handleNextClick = () => {
    setPosition(position >= totalSlides ? 1 : position + slidesToScroll);
  };

  return (
    <div className="service-slider">
      <div className="service-slider__container">
        <div
          className="service-slider__items"
          style={showSlides(position)}
        >
          {images.map((img, index) => (
            <div className="service-slider__item" key={index}>
              <img src={img} alt={`photo-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="service-slider__btns">
        <button
          className="service-slider__btn service-slider__btn_prev"
          onClick={handlePrevClick}
        >
          <img src={arrowLeft} alt="prev" />
        </button>
        <button
          className="service-slider__btn service-slider__btn_next"
          onClick={handleNextClick}
        >
          <img src={arrowRight} alt="next" />
        </button>
      </div>
    </div>
  );
};

ServiceSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ServiceSlider;
