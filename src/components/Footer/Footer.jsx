import logo from '../../assets/icons/logo.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import instagram from '../../assets/icons/instagram.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
            <Link to="/"><img src={logo} alt="logo" className="footer__logo" /></Link>
                <div className="footer__info">
                    <div className="footer__phone">+7 778 900 67 21</div>
                    <div className="footer__address">010000, Республика Казахстан, город Астана,
                        ул. Казыбек би, 15</div>
                    <a href="mailto:bergen_tour@mail.ru" className="footer__mail">bergen_tour@mail.ru</a>
                    <div className="footer__bin">БИН/ИИН 940921450614</div>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__menu">
                        <li className="footer__menu-item"><Link to="/" className="footer__menu-link">Главная</Link></li>
                        <li className="footer__menu-item"><Link to="/search" className="footer__menu-link">Подбор тура</Link></li>
                        <li className="footer__menu-item"><Link to="/about" className="footer__menu-link">О нас</Link></li>
                        <li className="footer__menu-item"><Link to="/service" className="footer__menu-link">Корпоративное обслуживание</Link></li>
                        <li className="footer__menu-item"><Link to="/certificates" className="footer__menu-link">Подарочные сертификаты</Link></li>
                    </ul>
                </nav>
                <div className="footer__social">
                    <div className="footer__newsletter-text">Подпишитесь на нашу рассылку</div>
                    <a href="https://t.me/bergen_tour" className="footer__button" target="_blank">Подписаться</a>
                    <div className="footer__follow-text">Следите за нами в соцсетях</div>
                    <div className="footer__social-icons">
                        <a href="https://t.me/bergen_tour" className="footer__telegram" target="_blank"><img src={telegram} alt="telegram"/></a>
                        <a href="https://wa.me/77789006721" className="footer__whatsapp" target="_blank"><img src={whatsapp} alt="whatsapp"/></a>
                        <a href="https://www.instagram.com/bergen_tour_kz" className="footer__instagram" target="_blank"><img src={instagram} alt="instagram"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
