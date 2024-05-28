import style from "./target.module.scss";
import img from "../../assets/images/_DSC4556.jpg";

const Target = () => {
  return (
    <div className={style.Target}>
      <div className={style.ImgContainer}>
        <img src={img} />
      </div>
      <div className={style.InfoContainer}>
        <h1>PÚBLICO OBJETIVO</h1>

        <div className={style.textContainer}>
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
