import TourModalOption from '../TourModalOption/TourModalOption';
import './TourModal.scss';

const TourModal = ({ tourInfo, options, onClose }) => {
  if (!tourInfo) return null;

  return (
    <div className="tours-modal" id="toursModal" onClick={onClose}>
      <div className="tours-modal__body" id="toursModalBody" onClick={e => e.stopPropagation()}>
        <ul className="tours-modal__date-list">
          {tourInfo.date_main.map((date, index) => (
            <li key={index} className="tours-modal__date-list-item">{date}</li>
          ))}
        </ul>
        <div className="tours-modal__content">
          <h2 className="tours-modal__title">{tourInfo.title_main}</h2>
          <ul className="tours-modal__list">
            {tourInfo.content.map((item, index) => (
              <li key={index} className="tours-modal__item">{item}</li>
            ))}
          </ul>
          {tourInfo.info_main && <div className="tours-modal__info">{tourInfo.info_main}</div>}
          <div className="tours-modal__include-wrapper">
            <div className="tours-modal__include-block">
              <div className="tours-modal__include-title">В стоимость входят:</div>
              <ul className="tours-modal__include-list">
                {tourInfo.included.map((item, index) => (
                  <li key={index} className="tours-modal__include-item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="tours-modal__include-block">
              <div className="tours-modal__include-title">В стоимость не входят:</div>
              <ul className="tours-modal__include-list">
                {tourInfo.not_included.map((item, index) => (
                  <li key={index} className="tours-modal__include-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tours-modal__options-wrapper">
            {options.map((option, index) => (
              <TourModalOption key={index} option={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourModal;
