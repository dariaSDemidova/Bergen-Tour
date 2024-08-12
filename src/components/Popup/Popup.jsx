// import { useState, useEffect } from 'react';
// import plane from '../../assets/icons/white-plane.svg';
// import './Popup.scss';

// const Popup = ({ onClose }) => {
//     const [cities, setCities] = useState([]);
//     const [phone, setPhone] = useState('');
//     const [phoneError, setPhoneError] = useState('');
//     const [isPhoneValid, setIsPhoneValid] = useState(false);

//     useEffect(() => {
//         // Подключение API городов Казахстана
//         const query = `[out:json];area["ISO3166-1"="KZ"][admin_level=2];node["place"="city"](area);out body;`;
//         const apiUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 const cityNames = data.elements.map(city => city.tags.name);
//                 setCities(cityNames);
//             })
//             .catch(error => console.error('Ошибка при получении данных о городах:', error));
//     }, []);

//     const validatePhoneNumber = (phone) => {
//         const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
//         return phoneRegex.test(phone);
//     };

//     const formatPhoneNumber = (value) => {
//         const cleanValue = value.replace(/\D/g, '');
//         let formattedValue = '+7 ';

//         if (cleanValue.length > 1) {
//             formattedValue += '(' + cleanValue.substring(1, 4);
//         }
//         if (cleanValue.length >= 5) {
//             formattedValue += ') ' + cleanValue.substring(4, 7);
//         }
//         if (cleanValue.length >= 8) {
//             formattedValue += '-' + cleanValue.substring(7, 9);
//         }
//         if (cleanValue.length >= 10) {
//             formattedValue += '-' + cleanValue.substring(9, 11);
//         }

//         return formattedValue;
//     };

//     const handlePhoneChange = (e) => {
//         const formattedPhone = formatPhoneNumber(e.target.value);
//         setPhone(formattedPhone);

//         if (formattedPhone.length === 18) {
//             if (validatePhoneNumber(formattedPhone)) {
//                 setPhoneError('');
//                 setIsPhoneValid(true);
//             } else {
//                 setPhoneError('Пожалуйста, введите корректный номер телефона');
//                 setIsPhoneValid(false);
//             }
//         } else {
//             setPhoneError('Номер телефона введен не полностью');
//             setIsPhoneValid(false);
//         }
//     };

//     return (
//         <>
//             <div id="overlay" className="overlay" onClick={onClose}></div>
//             <div id="popup" className="popup">
//                 <div className="popup__content">
//                     <span id="popup__close" className="popup__close" onClick={onClose}>&times;</span>
//                     <div className="popup__title">Давайте мы вам перезвоним?</div>
//                     <select id="cities-select" className="popup__input popup__select" name="cities">
//                         {cities.map(city => (
//                             <option key={city} value={city}>{city}</option>
//                         ))}
//                     </select>
//                     <input
//                         id="phone"
//                         type="tel"
//                         className="popup__input"
//                         placeholder="+7 (999) 999-99-99"
//                         value={phone}
//                         onChange={handlePhoneChange}
//                     />
//                     <div id="phone-error" className="popup__error">{phoneError}</div>
//                     <select className="popup__input popup__select" name="time">
//                         <option value="12">Перезвонить в 12:00</option>
//                         <option value="14">Перезвонить в 14:00</option>
//                         <option value="16">Перезвонить в 16:00</option>
//                         <option value="18">Перезвонить в 18:00</option>
//                     </select>
//                     <a
//                         href="https://wa.me/77789006721"
//                         id="submit-button"
//                         className="popup__button"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         disabled={!isPhoneValid}
//                     >
//                         Жду звонка! <img className="button-image" src={plane} alt="plane" />
//                     </a>
//                     <div className="popup__text">Мы перезвоним в удобное Вам время</div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Popup;




import { useState, useEffect } from 'react';
import plane from '../../assets/icons/white-plane.svg';
import './Popup.scss';

const Popup = ({ onClose }) => {
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
        return selectedCity && isPhoneValid && time;
    };

    return (
        <>
            <div id="overlay" className="overlay" onClick={onClose}></div>
            <div id="popup" className="popup">
                <div className="popup__content">
                    <span id="popup__close" className="popup__close" onClick={onClose}>&times;</span>
                    <div className="popup__title">Давайте мы вам перезвоним?</div>
                    <select
                        id="cities-select"
                        className="popup__input popup__select"
                        name="cities"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="">Выберите город</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    <input
                        id="phone"
                        type="tel"
                        className="popup__input"
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
                        <option value="">Выберите время</option>
                        <option value="12">Перезвонить в 12:00</option>
                        <option value="14">Перезвонить в 14:00</option>
                        <option value="16">Перезвонить в 16:00</option>
                        <option value="18">Перезвонить в 18:00</option>
                    </select>
                    <a
                        href={isFormValid() ? "https://wa.me/77789006721" : "#"}
                        id="submit-button"
                        className={`popup__button ${!isFormValid() ? 'disabled' : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={!isFormValid()}
                        onClick={(e) => {
                            if (!isFormValid()) e.preventDefault();
                        }}
                    >
                        Жду звонка! <img className="button-image" src={plane} alt="plane" />
                    </a>
                    <div className="popup__text">Мы перезвоним в удобное Вам время</div>
                </div>
            </div>
        </>
    );
};

export default Popup;


