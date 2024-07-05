import style from "./news.module.scss";
import img from "../../assets/Desfile-bodega-villa-nueva.jpeg";
import { CalendarIcon, MapMarkerIcon } from "../../assets/icons";

const News = () => {
  return (
    <div className={style.News}>
      <article>
        <h1> !LA BODEGA EN PASARELA! </h1>

        <div className={style.dataContainer}>
          <h3>
            <CalendarIcon /> 4 de Agosto{" "}
          </h3>
          <p>|</p>
          <h3>
            <MapMarkerIcon />
            <a href="https://maps.app.goo.gl/coZdCwMaGVprMT3r5" target="_blank">
              La bodega, Villa Nueva
            </a>
          </h3>
        </div>

        <div className={style.imgContainer}>
          <img src={img} alt="Imagen de presentación" />
        </div>

        <p className={style.text}>
          Estamos emocionados de anunciar el "Desfile en la Bodega de Villa
          Nueva", un evento imperdible para los amantes de la moda, el sábado 15
          de julio a las 7:00 PM. Participarán diseñadores nacionales e
          internacionales, presentando colecciones desde alta costura hasta
          streetwear vanguardista, con énfasis en la moda ética y sostenible.
          <br />
          <br />
          La Bodega de Villa Nueva ofrecerá una experiencia única con
          degustación de vinos locales y aperitivos gourmet. Los boletos son
          limitados y están a la venta en nuestra página web. Para más
          información, visita nuestro sitio web o contáctanos en redes sociales.
          ¡Te esperamos!
        </p>
      </article>

      {/* <div className={style.contentContainer}>
          <h1>¡LA BODEGA EN PASARELA!</h1>

          <div className={style.dateAndUbi}>
            <div className={style.dateContainer}>
              <CalendarIcon />
              <p>4 de Agosto</p>
            </div>
            -
            <div className={style.ubiContainer}>
              <MapMarkerIcon />
              <p>LA BODEGA, VILLA NUEVA</p>
            </div>
          </div>

          <p className={style.text}>
            Estamos emocionados de anunciar el "Desfile en la Bodega de Villa
            Nueva", un evento imperdible para los amantes de la moda, el sábado
            15 de julio a las 7:00 PM. Participarán diseñadores nacionales e
            internacionales, presentando colecciones desde alta costura hasta
            streetwear vanguardista, con énfasis en la moda ética y sostenible.
            <br />
            <br />
            La Bodega de Villa Nueva ofrecerá una experiencia única con
            degustación de vinos locales y aperitivos gourmet. Los boletos son
            limitados y están a la venta en nuestra página web. Para más
            información, visita nuestro sitio web o contáctanos en redes
            sociales. ¡Te esperamos!
          </p>
        </div>

        <div className={style.imgContainer}>
          <img src={img} />
        </div> */}
    </div>
  );
};

export default News;
