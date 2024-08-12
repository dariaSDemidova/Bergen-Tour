import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';
import './Header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__main">
                    <Link to="/"><img src={logo} alt="logo" className="header__logo" /></Link>
                    <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
                        <ul className={`menu ${isMenuOpen ? 'menu-active' : ''}`}>
                            <li className="menu__item"><Link to="/" className="menu__link" onClick={toggleMenu}>Главная</Link></li>
                            <li className="menu__item"><Link to="/search" className="menu__link" onClick={toggleMenu}>Подбор тура</Link></li>
                            <li className="menu__item"><Link to="/about" className="menu__link" onClick={toggleMenu}>О нас</Link></li>
                            <li className="menu__item"><Link to="/service" className="menu__link" onClick={toggleMenu}>Корпоративное обслуживание</Link></li>
                            <li className="menu__item"><Link to="/certificates" className="menu__link" onClick={toggleMenu}>Подарочные сертификаты</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="contacts">
                    <div className="contacts__info">
                        <img src={whatsapp} alt="phone" className="contacts__icon" />
                        <div>
                            <div className="contacts__phone">+7 778 900 67 21</div>
                        </div>
                    </div>
                    <button id="contacts__button" className="contacts__button" onClick={togglePopup}>заказать обратный звонок</button>
                </div>
                <div className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {isPopupOpen && <Popup onClose={togglePopup} />}
        </header>
    );
};

export default Header;