const TourModal = ({ tourInfo, onClose }) => {
  if (!tourInfo) return null;

  return (
    <div className="tours-modal" id="toursModal" onClick={onClose}>
      <div className="tours-modal__body" id="toursModalBody" onClick={e => e.stopPropagation()}>
        <div className="tours-modal__date">{tourInfo.date}</div>
        <div className="tours-modal__content">
          <h2 className="tours-modal__title">{tourInfo.title}</h2>
          <ul className="tours-modal__list">
            {tourInfo.content.map((item, index) => (
              <li key={index} className="tours-modal__item">{item}</li>
            ))}
          </ul>
          <div className="tours-modal__price-wrapper">
            <div className="tours-modal__price">
              <span className="price-title">Стоимость:</span> <span className="price-value">{tourInfo.price}</span> ₸
            </div>
            <div className="tours-modal__price">
              <span className="price-title">Предоплата:</span> <span className="price-value">{tourInfo.prepayment}</span> ₸
            </div>
            <div className="tours-modal__price-info">остаток после получения визы</div>
          </div>
          <div className="tours-modal__include-wrapper">
            <div className="tours-modal__include-title">В стоимость входят:</div>
            <ul className="tours-modal__include-list">
              {tourInfo.included.map((item, index) => (
                <li key={index} className="tours-modal__include-item" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
          <div className="tours-modal__include-wrapper">
            <div className="tours-modal__include-title">В стоимость не входят:</div>
            <ul className="tours-modal__include-list">
              {tourInfo.not_included.map((item, index) => (
                <li key={index} className="tours-modal__include-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tours-modal__flight">{tourInfo.flight_info}</div>
      </div>
    </div>
  );
}
