import pic1 from '/assets/images/service-slider/pic1.jpg';
import pic2 from '/assets/images/service-slider/pic2.jpg';
import pic3 from '/assets/images/service-slider/pic3.jpg';
import pic4 from '/assets/images/service-slider/pic4.jpg';

import ServiceSlider from '../../components/ServiceSlider/ServiceSlider';
import './Service.scss';

const Service = () => {
  const images = [pic1, pic2, pic3, pic4];

  return (
    <main>
      <section className="service">
        <div className="service-container">
          <h1 className="service__header"><span className="service__header-orange">Мы предлагаем следующие виды услуг</span><br/>по
            организации деловых и корпоративных<br/>мероприятий</h1>
          <h2 className="service__subheader">различной сложности и уровня</h2>
          <div className="service-wrapper">
            <div className="service-block">
              <ul className="service-block__list">
                <li>Бронирование и продажа авиабилетов</li>
                <li>Бронирование гостиниц</li>
                <li>Организация конференций и аренда конференц-зала</li>
                <li>Индивидуальные, групповые трансферы</li>
                <li>VIP-обслуживание в залах аэропортов</li>
                <li>Медицинское страхование выезжающих за рубеж</li>
                <li>Организация поощрительных поездок для сотрудников и клиентов с возможностью предоставления «Туристского подарочного сертификата» любого номинала</li>
                <li>Организация корпоративного путешествия на борту круизного корабля</li>
                <li>Комплексная организация деловых визитов и отдыха во всех странах мира</li>
              </ul>
            </div>
            <ServiceSlider images={images}/>
          </div>
        </div>
      </section>
    </main>
  );
};


export default Service;
