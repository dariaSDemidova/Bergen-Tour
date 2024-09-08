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
import './About.scss';

const About = () => {
    return (
        <main>
            <section className="about">
                <div className="about__container">
                    <h1 className="about__title">Туристическое агентство<br/>«BERGEN TOUR»</h1>
                    <h2 className="about__subtitle">оказывает следующие виды услуг:</h2>
                    <ul className="about__list">
                        <li className="about__list-item"><img src={travel} alt="travel-explore"/>продажа турпакетов</li>
                        <li className="about__list-item"><img src={accessibility} alt="accessibility"/>индивидуальные туры</li>
                        <li className="about__list-item"><img src={person} alt="person-add"/>групповые туры</li>
                        <li className="about__list-item"><img src={bag} alt="bag"/>организация деловых поездок, корпоративных мероприятий и отдыха сотрудников вашей компании</li>
                        <li className="about__list-item"><img src={umbrella} alt="umbrella"/>лечебно-оздоровительные туры</li>
                        <li className="about__list-item"><img src={check} alt="person-check"/>визовые услуги</li>
                        <li className="about__list-item"><img src={hand} alt="hand-with-heart"/>страхование выезжающих зарубеж</li>
                        <li className="about__list-item"><img src={sailing} alt="sailing"/>круизы</li>
                        <li className="about__list-item"><img src={hotel} alt="hotel"/>бронирование гостиниц</li>
                        <li className="about__list-item"><img src={plane} alt="plane"/>продажа авиабилетов</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};


export default About;
