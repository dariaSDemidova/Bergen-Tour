import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__shedule">24/7</div>
                <div className="hero__title-container">
                    <h1 className="hero__title">Мир слишком велик <span>чтобы сидеть на одном месте</span></h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;