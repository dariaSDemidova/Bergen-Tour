import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Hero from '../../components/Hero/Hero';
import Tours from '../../components/Tours/Tours';
import Popup from '../../components/Popup/Popup';
import Reviews from '../../components/Reviews/Reviews';

import travel from '/assets/icons/travel-explore.svg';
import accessibility from '/assets/icons/accessibility.svg';
import person from '/assets/icons/person-add.svg';
import bag from '/assets/icons/bag.svg';
import umbrella from '/assets/icons/umbrella.svg';
import check from '/assets/icons/person-check.svg';
import hand from '/assets/icons/hand-with-heart.svg';
import sailing from '/assets/icons/sailing.svg';
import hotel from '/assets/icons/hotel.svg';
import whitePlane from '/assets/icons/white-plane.svg';
import Certificate from '/assets/images/certificate.png';
import plane from '/assets/icons/plane.svg';

import './Main.scss';

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  return (
    <>
      <Hero/>

      <section className="search">
        <div className="container search__container">
          <h2 className="search__title">Платите меньше - <span>путешествуйте больше</span></h2>
          <Link to="/search" className="search__button">Найти тур<img className="button-image" src={whitePlane} alt="plane" /></Link>
        </div>
      </section>

      <section className="why">
        <div className="container why__container">
          <h2 className="why__title">Почему мы?</h2>
          <div className="why__block">
            <div className="why__block-contacts">
              <p>+7 778 900 67 21</p>
              <button id="contacts__button" className="contacts__button why__block-contacts-btn" onClick={togglePopup}>заказать обратный звонок</button>
            </div>
            <ul className="why__block-list">
              <li>Наш сервис порадует даже самых искушенных путешественников!</li>
              <li>У нас самые приемлемые цены!</li>
              <li>Наши партнеры заслуживают доверия</li>
              <li>Мы честны перед государственными органами</li>
              <li>Путешествовать с нами безопасно!</li>
              <li>Все оформляем онлайн. Не нужно никуда ехать!</li>
              <li>Большая сеть партнеров</li>
            </ul>
          </div>
        </div>
      </section>
 
      <section className="offerings">
        <div className="container">
          <h2 className="offerings__title">Туристическое агентство<br/>«BERGEN TOUR»</h2>
          <h3 className="offerings__subtitle">оказывает следующие виды услуг:</h3>
          <div className="offerings__content">
            <ul className="offerings__list">
              <li><img src={travel} alt="travel-explore"/>продажа турпакетов</li>
              <li><img src={accessibility} alt="accessibility"/>индивидуальные туры</li>
              <li><img src={person} alt="person-add"/>групповые туры</li>
              <li><img src={bag} alt="bag"/>организация деловых поездок, корпоративных мероприятий и отдыха сотрудников вашей компании</li>
              <li><img src={umbrella} alt="umbrella"/>лечебно-оздоровительные туры</li>
            </ul>
            <ul className="offerings__list">
              <li><img src={check} alt="person-check"/>визовые услуги</li>
              <li><img src={hand} alt="hand-with-heart"/>страхование выезжающих зарубеж</li>
              <li><img src={sailing} alt="sailing"/>круизы</li>
              <li><img src={hotel} alt="hotel"/>бронирование гостиниц</li>
              <li><img src={plane} alt="plane"/>продажа авиабилетов</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h2 className="reviews__title">Отзывы наших клиентов</h2>
          <Reviews />
        </div>
      </section>

      <section className="certificates">
        <div className="container">
          <h2 className="certificates__title">Подарочные сертификаты</h2>
          <div className="certificates__content">
            <div>
              <img src={Certificate} alt="certificate" />
            </div>
            <div className="certificates__content-right">
              <div className="certificates__content-text">
                <p><span>Скидка 3%</span> при покупке от 10 сертификатов</p>
                <p><span>Скидка 5%</span> при покупке от 20 сертификатов</p>
              </div>

              <button className="search__button certificates__btn" onClick={togglePopup}>Оставить заявку <img className="button-image" src={whitePlane} alt="plane" /></button>
            </div>
          </div>
        </div>
        {isPopupOpen && <Popup onClose={togglePopup} />}
      </section>

			<section className="tours">
				<div className="container">
					<h2 className="tours__header"><span>Готовые турпакеты и отдельные услуги</span><br/>по честным ценам</h2>
					<h3 className="tours__subheader">Если найдете дешевле, свяжитесь с нами</h3>
					<Tours/>
				</div>
    	</section>
    </>
  );
};

export default Main;
