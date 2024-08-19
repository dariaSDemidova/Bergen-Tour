import './TourModalOption.scss';

const TourModalOption = ({ option }) => {
  if (!option) return null;
  return (
    <div className="tours-modal__options">
      {option.title && <p className="tours-modal__options-title">{option.title}</p>}
      <div className="tours-modal__options-price">
        <span className="options-price__title">Стоимость: </span>
        <span className="options-price__value">{option.price} {option.price_cur}</span>
      </div>
      {option.prepayment && (<div className="tours-modal__options-price">
        <span className="options-price__title">Предоплата: </span>
        <span className="options-price__value">{option.prepayment} {option.prepayment_cur}</span>
      </div>)}
      {option.info && <div className="tours-modal__options-info">{option.info}</div>}
      {option.date && option.date.map((date, index) => (
          <div className="tours-modal__options-date" key={index}>Даты: {date}</div>
      ))}
      <div className="tours-modal__options-flight">{option.flight}</div>
    </div>
  )
};

export default TourModalOption;
