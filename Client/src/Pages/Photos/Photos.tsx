import style from "./photos.module.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21
} from "../../assets/image";
const Photos = () => {
  

  return (
    <>
      <div className={style.container}>
        <img className={style.image} src={image1} alt="cami" />
        <img className={style.image} src={image2} alt="" />
        <img className={style.image} src={image3} alt="" />
        <img className={style.image} src={image4} alt="" />
        <img className={style.image} src={image5} alt="" />
        <img className={style.image} src={image6} alt="" />
        <img className={style.image} src={image7} alt="" />
        <img className={style.image} src={image8} alt="" />
        <img className={style.image} src={image9} alt="" />
        <img className={style.image} src={image10} alt="" />
        <img className={style.image} src={image11} alt="" />
        <img className={style.image} src={image12} alt="" />
        <img className={style.image} src={image13} alt="" />
        <img className={style.image} src={image14} alt="" />
        <img className={style.image} src={image15} alt="" />
        <img className={style.image} src={image16} alt="" />
        <img className={style.image} src={image17} alt="" />
        <img className={style.image} src={image18} alt="" />
        <img className={style.image} src={image19} alt="" />
        <img className={style.image} src={image20} alt="" />
        <img className={style.image} src={image21} alt="" />
      </div>
    </>
  );
};

export default Photos;
