import style from "./footer.module.scss";
import footerImg from "../../assets/images/footer-img.png";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.imgContainer}>
        <img src={footerImg} />
      </div>
      <div className={style.content}>
        <div className={style.titleContainer}>
          <h1>ADDA MODELS</h1>
          <h3>www.addamodels.com</h3>
        </div>
        <div className={style.infoContainer}>
          <p>addamodelsvm@gmail.com</p>
          <p>@addamodelss</p>
          <p>(353) 15-413-7494</p>
          <p>RUTA 158 KM 155.5 SHOOPING VM</p>
          <p>VILLA MARIA, CORDOBA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
