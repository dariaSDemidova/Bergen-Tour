import { Link } from 'react-router-dom';
import plane from '../../assets/icons/white-plane.svg';
import './Main.scss';

const Main = () => {
    return (
        <>
            <section className="search">
                <div className="container">
                    <h2 className="search__title">Платите меньше - <span>путешествуйте больше</span></h2>
                    <Link to="/search" className="search__button">Найти тур<img className="button-image" src={plane} alt="plane" /></Link>
                </div>
            </section>
        </>
    );
};


export default Main;
