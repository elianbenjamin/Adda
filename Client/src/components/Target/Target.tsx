import style from "./target.module.scss";
import img from './../../assets/images/targetImg.jpg'
import { useEffect, useRef, useState } from "react";

const Target = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!imgRef.current) return;
      const distance = imgRef.current.getBoundingClientRect().top;
      if (distance <= window.innerHeight) setAnimation(true);
    });
  }, []);

  return (
    <div className={style.Target}>
      <div
        className={`${style.ImgContainer} ${
          animation ? style.imgAnimation : ""
        }`}
        ref={imgRef}
      >
        <img src={img} />
      </div>
      <div className={style.InfoContainer}>
        <h1 className={animation ? style.titleAnimation : ''}>PÚBLICO OBJETIVO</h1>

        <div className={`${style.textContainer} ${animation ? style.textAnimation : ''}`}>
          <section>
            <h3>PERSONALIDADES:</h3>
            <p>CREATIVAS. EXPRESIVAS. AVENTURERAS</p>
          </section>
          <section>
            <h3>INTERESES:</h3>
            <p>DISEÑO. VIAJES. CULTURA</p>
          </section>
          <section>
            <h3>MOTIVACIONES:</h3>
            <p>INDEPENDENCIA. INDIVIDUALIDAD. VERSATILIDAD</p>
          </section>
          <section>
            <h3>ESTILO DE VIDA:</h3>
            <p>COSMOPOLITAN</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Target;
