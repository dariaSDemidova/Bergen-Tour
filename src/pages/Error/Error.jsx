import { useNavigate } from 'react-router-dom';
import './Error.scss';

const Error = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <main className='error'>
            <h1 className='error__title'>404</h1>
            <h2 className='error__subtitle'>Страница не найдена</h2>
            <button className='error__button' onClick={handleClick}>
                Вернуться на главную
            </button>
        </main>
    );
};

export default Error;

