import style from "./footer.module.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <section className={style.left}>
        <img src={logo} />
      </section>
      <section className={style.mid}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1684.1481495384953!2d-63.242321200819575!3d-32.41122040411413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc42e7121e1a6f%3A0x8aab0361a0e5db28!2sHotel%20Republica%20Villa%20Maria!5e0!3m2!1ses-419!2sar!4v1715989075725!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>9 de julio 58 (Hotel República)</p>
      </section>
      <section className={style.right}>
        <div className={style.content}>
          <h1>Conoce mas</h1>
          
          <Link to={'/school'}>Escuela</Link>
          <Link to={'/photos'}>Fotos</Link>
          <Link to={'news'}>Noticias</Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
