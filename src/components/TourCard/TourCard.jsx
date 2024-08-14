import './TourCard.scss';

const TourCard = ({ tour, onSelect }) => {
  return (
    <div className="tours__item" data-tour-id={tour.id} onClick={() => onSelect(tour)}>
      <div className="tours__item-label">{tour.price_main} тг</div>
      <img className="tours__item-img" src={tour.img} alt={tour.title} />
      <h4 className="tours__item-title">{tour.title_main}</h4>
      <p className="tours__item-place">{tour.place}</p>
      <ul className="tours__item-date">
        {tour.date_main.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
}

export default TourCard;
