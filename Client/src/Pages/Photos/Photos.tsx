import style from "./photos.module.scss";
import image from "../../assets/cami.jpg";
import image2 from "../../assets/s9.jpg";
import image3 from "../../assets/s8.jpg";
import image4 from "../../assets/s7.jpg";

const Photos = () => {
  

  return (
    <>
      <div className={style.container}>
        <img className={style.image} src={image} alt="cami" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
    </>
  );
};

export default Photos;
