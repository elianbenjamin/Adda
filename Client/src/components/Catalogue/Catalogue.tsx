import style from "./catalogue.module.scss";
import tobiasSalomonImg from "../../assets/images/TobiasSalomon.jpg";
import michelBioleImg from "../../assets/images/MichelBiole.jpg";
import lucasGutierrezImg from "../../assets/images/LucasGutierrez.jpg";
import araceliYLudmilaNicolettiImg from "../../assets/images/AraceliYLudmilaNicoletti.jpg";
import camilaRodriguezImg from "../../assets/images/CamilaRodriguez.jpg";

const Catalogue = () => {
  return (
    <div className={style.Catalogue}>
      <h1>CATÁLOGO</h1>
      <div className={style.cards}>
        <section>
          <div>
            <img src={tobiasSalomonImg} />
          </div>
          <p>TOBIAS SALOMON</p>
        </section>
        <section>
          <div>
            <img src={michelBioleImg} />
          </div>
          <p>MICHEL BIOLE</p>
        </section>
        <section>
          <div>
            <img src={lucasGutierrezImg} />
          </div>
          <p>LUCAS GUTIERREZ</p>
        </section>
        <section>
          <div>
            <img src={araceliYLudmilaNicolettiImg} />
          </div>
          <p>ARACELY Y LUDMILA NICOLETTI</p>
        </section>
        <section>
          <div>
            <img src={camilaRodriguezImg} />
          </div>

          <p>CAMILA RODRIGUEZ</p>
        </section>
      </div>
    </div>
  );
};

export default Catalogue;
