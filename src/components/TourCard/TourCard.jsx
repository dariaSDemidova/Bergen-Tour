import React from 'react';
import './TourCard.scss';

const TourCard = ({ tour, onSelect }) => {
  return (
    <div className="tours__item" data-tour-id={tour.id} onClick={() => onSelect(tour)}>
      <div className="tours__item-label">{tour.price} тг</div>
      <img className="tours__item-img" src={tour.img} alt={tour.title} />
      <h4 className="tours__item-title">{tour.title}</h4>
      <p className="tours__item-place">{tour.place}</p>
      <p className="tours__item-date">
        {tour.date.map((dateStr, index) => (
          <React.Fragment key={index}>
           
            {dateStr && <p>{dateStr}</p>}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default TourCard;
