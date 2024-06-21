import style from "./news.module.scss";
import img from "../../assets/Desfile-bodega-villa-nueva.jpeg";

const News = () => {
  return (
    <div className={style.News}>
      <section className={style.new1}>
        <div className={style.contentContainer}>
          <h1>DESFILE EN LA BODEGA DE VILLA NUEVA</h1>

          <p className={style.text}>
            Estamos emocionados de anunciar un evento imperdible para todos los
            amantes de la moda y el estilo: el "Desfile en la Bodega de Villa
            Nueva". Este espectacular desfile de modas se llevará a cabo el
            próximo sábado 15 de julio a las 7:00 PM, en el encantador entorno
            de la bodega ubicada en Villa Nueva. El desfile contará con la
            participación de destacados diseñadores nacionales e internacionales
            que presentarán sus más recientes colecciones. Los asistentes podrán
            disfrutar de una variedad de estilos, desde la alta costura hasta
            las tendencias más vanguardistas del streetwear, destacando nuevas
            propuestas sostenibles que promueven la moda ética y responsable.
            <br />
            <br />
            La Bodega de Villa Nueva, conocida por su ambiente acogedor y su
            exquisita selección de vinos, ofrecerá una experiencia única para
            todos los asistentes. El evento incluirá una recepción con
            degustación de vinos locales y una selección de aperitivos gourmet,
            haciendo de esta velada un deleite para todos los sentidos. Los
            boletos para el "Desfile en la Bodega de Villa Nueva" ya están a la
            venta en nuestra página web. Debido a la exclusividad del evento,
            las entradas son limitadas, por lo que se recomienda adquirirlas con
            antelación. Para más información y compra de boletos, visita nuestro
            sitio web o contáctanos a través de nuestras redes sociales. ¡Te
            esperamos!
          </p>
        </div>

        <div className={style.imgContainer}>
          <img src={img} />
        </div>
      </section>
    </div>
  );
};

export default News;
