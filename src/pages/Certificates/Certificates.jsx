import './Certificates.scss';
import number1 from "../../assets/icons/number1.svg"
import number2 from "../../assets/icons/number2.svg"
import number3 from "../../assets/icons/number3.svg"
const Certificates = () => {
    return (
        <main>
          <section className="cert">
        <div className="container">
            <h1 className="certificates">Подарочные сертификаты</h1>
            <div className="box box1">
                <img className="number" src={number1} alt="number1"/>
                <div className="box-text">Почувствуйте себя волшебниками, <span className="box-text-orange">подарите
                        сказку</span> своим друзьям, родственникам, коллегам или партнерам по бизнесу.
                </div>
            </div>
            <div className="box box2"> <img className="number" src={number2} alt="number2"/>
                <div className="box-text">
                    Вы можете приобрести в нашей компании Подарочный Сертификат <span className="box-text-orange">на круиз,
                        экскурсию или авиабилеты.</span> Или, например, внести любую сумму денег, для частичной оплаты
                    проживания в отеле, или оплаты приятного сюрприза, который будет ждать Ваших близких в отеле.
                </div>
            </div>
            <div className="box box3">
                <img src={number3} className="number" alt="number3"/>
                <div className="box-text"> Наши Подарочные Сертификаты красиво оформлены, в нужный день <span
                        className="box-text-orange">Вы сможете преподнести сертификат,</span> как чудесный подарок –
                    впечатления от будущего путешествия!
                </div>
            </div>
        </div>
    </section>
        </main>
    );
};


export default Certificates;
