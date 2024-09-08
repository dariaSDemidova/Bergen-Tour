import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import plane from '../../assets/icons/white-plane.svg';
import './Popup.scss';

const Popup = ({ onClose }) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    useEffect(() => {
        // Подключение API городов Казахстана
        const query = `[out:json];area["ISO3166-1"="KZ"][admin_level=2];node["place"="city"](area);out body;`;
        const apiUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cityNames = data.elements.map(city => city.tags.name);
                setCities(cityNames);
            })
            .catch(error => console.error('Ошибка при получении данных о городах:', error));
    }, []);

    const validateName = (name) => {
        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        if (name.length < 2) {
            return 'Имя должно содержать хотя бы 2 символа';
        }
        if (!nameRegex.test(name)) {
            return 'Имя должно содержать только буквы';
        }
        return '';
    };    

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    
        const error = validateName(newName);
        setNameError(error);
        setIsNameValid(!error);
    };
    
    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phone);
    };

    const formatPhoneNumber = (value) => {
        const cleanValue = value.replace(/\D/g, '');
        let formattedValue = '+7 ';

        if (cleanValue.length > 1) {
            formattedValue += '(' + cleanValue.substring(1, 4);
        }
        if (cleanValue.length >= 5) {
            formattedValue += ') ' + cleanValue.substring(4, 7);
        }
        if (cleanValue.length >= 8) {
            formattedValue += '-' + cleanValue.substring(7, 9);
        }
        if (cleanValue.length >= 10) {
            formattedValue += '-' + cleanValue.substring(9, 11);
        }

        return formattedValue;
    };

    const handlePhoneChange = (e) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setPhone(formattedPhone);

        if (formattedPhone.length === 18) {
            if (validatePhoneNumber(formattedPhone)) {
                setPhoneError('');
                setIsPhoneValid(true);
            } else {
                setPhoneError('Пожалуйста, введите корректный номер телефона');
                setIsPhoneValid(false);
            }
        } else {
            setPhoneError('Номер телефона введен не полностью');
            setIsPhoneValid(false);
        }
    };

    const isFormValid = () => {
        return isNameValid && selectedCity && isPhoneValid && time;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxojlCpbnvcPBsln2-qfp0KufZEYLgSrOgvbCHzDTxf_gN1hzqAQ-0DeBPCwvLPzevwlw/exec';
            const formData = new FormData(e.target);
            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message));
        } else {
            console.log('Форма заполнена некорректно');
        }
    };

    return (
        <>
            <div id="overlay" className="overlay" onClick={onClose}></div>
            <form id="popup" className="popup" name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <div className="popup__content">
                    <span id="popup__close" className="popup__close" onClick={onClose}>&times;</span>
                    <div className="popup__title">Давайте мы вам перезвоним?</div>
                    <input
                        type="text"
                        className="popup__input"
                        name="name"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <div id="name-error" className="popup__error">{nameError}</div>
                    <select
                        id="cities-select"
                        className="popup__input popup__select"
                        name="cities"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="" disabled hidden>Выберите город</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    <input
                        id="phone"
                        type="tel"
                        className="popup__input"
                        name="phone"
                        placeholder="+7 (999) 999-99-99"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    <div id="phone-error" className="popup__error">{phoneError}</div>
                    <select
                        className="popup__input popup__select"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="" disabled hidden>Выберите время</option>
                        <option value="11-12">Перезвонить с 11:00 до 12:00</option>
                        <option value="12-13">Перезвонить с 12:00 до 13:00</option>
                        <option value="13-14">Перезвонить с 13:00 до 14:00</option>
                        <option value="14-15">Перезвонить с 14:00 до 15:00</option>
                        <option value="15-16">Перезвонить с 15:00 до 16:00</option>
                        <option value="16-17">Перезвонить с 16:00 до 17:00</option>
                        <option value="17-18">Перезвонить с 17:00 до 18:00</option>
                    </select>
                    <button
                        type="submit"
                        id="submit-button"
                        className={`popup__button ${!isFormValid() ? 'disabled' : ''}`}
                        disabled={!isFormValid()}
                    >
                        Жду звонка! <img className="button-image" src={plane} alt="plane" />
                    </button>
                    <div className="popup__text">Мы перезвоним в удобное Вам время</div>
                </div>
            </form>
        </>
    );
};

Popup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Popup;
