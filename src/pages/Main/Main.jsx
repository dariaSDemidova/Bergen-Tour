import { Link } from 'react-router-dom';
import Tours from '../../components/Tours/Tours';
import travel from '../../assets/icons/travel-explore.svg';
import accessibility from '../../assets/icons/accessibility.svg';
import person from '../../assets/icons/person-add.svg';
import bag from '../../assets/icons/bag.svg';
import umbrella from '../../assets/icons/umbrella.svg';
import check from '../../assets/icons/person-check.svg';
import hand from '../../assets/icons/hand-with-heart.svg';
import sailing from '../../assets/icons/sailing.svg';
import hotel from '../../assets/icons/hotel.svg';
import plane from '../../assets/icons/plane.svg';
import whitePlane from '../../assets/icons/white-plane.svg';
import Reviews from '../../components/Reviews/Reviews';
import certificate from '../../assets/images/certificate.png';

import './Main.scss';

const Main = () => {
    return (
        <>
            <section className="search">
                <div className="container">
                    <h2 className="search__title">Платите меньше - <span>путешествуйте больше</span></h2>
                    <Link to="/search" className="search__button">Найти тур<img className="button-image" src={whitePlane} alt="plane" /></Link>
                </div>
            </section>

 <section className="containerServices">
      <div className="why-header">
        <h2 className="textLato800">Почему мы?</h2>
        <div className="why-contacts">
          <p className="textLato900">+7 778 900 67 21</p>
          <button id="why-contacts__button" className="contacts__button why-contacts-btn">заказать обратный звонок</button>
        </div>
      </div>
      
      <div className="whyussection">
        <ul className="why-list">
          <li><img src={plane} alt="plane"/>Наш сервис порадует даже самых искушенных путешественников!</li>
          <li><img src={plane} alt="plane"/>У нас самые приемлемые цены!</li>
          <li><img src={plane} alt="plane"/>Наши партнеры заслуживают доверия</li>
          <li><img src={plane} alt="plane"/>Мы честны перед государственными органами</li>
          <li><img src={plane} alt="plane"/>Путешествовать с нами безопасно!</li>
          <li><img src={plane} alt="plane"/>Все оформляем онлайн. Не нужно никуда ехать!</li>
          <li><img src={plane} alt="plane"/>Большая сеть партнеров</li>
        </ul>
      </div>
    </section>
            <section className="offerings">
                <div className="container">
                    <h1 className="offerings__title">Туристическое агентство «BERGEN TOUR»</h1>
                    <h2 className="offerings__subtitle">оказывает следующие виды услуг:</h2>
                    <ul className="offerings__list">
                        <div className="offerings__left-container">
                            <li className="offerings__list-item"><img src={travel} alt="travel-explore"/>продажа турпакетов</li>
                            <li className="offerings__list-item"><img src={accessibility} alt="accessibility"/>индивидуальные туры</li>
                            <li className="offerings__list-item"><img src={person} alt="person-add"/>групповые туры</li>
                            <li className="offerings__list-item"><img src={bag} alt="bag"/>организация деловых поездок, корпоративных мероприятий и отдыха сотрудников вашей компании</li>
                            <li className="offerings__list-item"><img src={umbrella} alt="umbrella"/>лечебно-оздоровительные туры</li>
                        </div>
                        <div className="offerings__right-container">
                            <li className="offerings__list-item"><img src={check} alt="person-check"/>визовые услуги</li>
                            <li className="offerings__list-item"><img src={hand} alt="hand-with-heart"/>страхование выезжающих зарубеж</li>
                            <li className="offerings__list-item"><img src={sailing} alt="sailing"/>круизы</li>
                            <li className="offerings__list-item"><img src={hotel} alt="hotel"/>бронирование гостиниц</li>
                            <li className="offerings__list-item"><img src={plane} alt="plane"/>продажа авиабилетов</li>
                        </div>
                    </ul>
                </div>
            </section>
            <section className="servicescolor backgroundcolor">
      <div className="reviewsectionheader">
        <h2 className="textLato800">Отзывы от наших клиентов</h2>
                </div>
      
        </section>
        <Reviews />
 
        <section className="servicescolor backgroundimg">
      <div className="reviewsectionheader">
        <h2 className="textLato800">Подарочные сертификаты</h2>
        <div className="reviewscert">
          <div className="certsection">
            <div className="reviewColumn">
              <div className="certbackground" >
                <div> <input type="text" className="inputorder" value="100000"/> </div>
                <div> <input type="text" name="clientname" className="inputorder"/></div>
              </div>
            </div>
          </div>
          <div className="certsection">
            <div className="reviewRow">
              <div className="rowsection">
                <div className="inputsection">
                  <div>Сумма</div>
                  <div>Количество</div>
                </div>
                <div>
                  <div className="inputsection">
                    <div> <input type="text" name="summ" className="inputsumm"/></div>
                    <div> <input type="text" name="number" className="inputsumm"/> </div>
                  </div>
                </div>
              </div>
              <div className="cert-discount"><span className="cert-discount-orange">Скидка 3%</span> при покупке от 10 сертификатов</div>
              <div className="cert-discount"><span className="cert-discount-orange">Скидка 5%</span> при покупке от 20 сертификатов</div>
              <div>
                <form action="https://wa.me/77789006721">
                  <button type="submit" className="buttoncert">Оставить заявку <img src="./assets/img/airplane.png" alt="airplane"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
			<section className="tours">
				<div className="container">
					<h2 className="tours__header"><span className="tours__header-orange">Готовые турпакеты и отдельные услуги</span><br/>по честным ценам</h2>
					<h3 className="tours__subheader">Если найдете дешевле, то свяжитесь с нами</h3>
					<Tours/>
				</div>
    		</section>
        </>
    );
};


export default Main;
