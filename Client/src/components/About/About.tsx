import { ForwardedRef, forwardRef } from "react";
import style from "./about.module.scss";
import img1 from "../../assets/About_img1.jpg";
import img2 from "../../assets/About_img2.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const About = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={style.About} id="About" ref={ref}>
      <section>
        <div className={style.imgContainer}>
          <img src={img1} />
        </div>
        <div className={style.textContainer}>
          <p>
            ¡Bienvenida a Adda, el espacio donde la belleza se redefine y la
            autenticidad se celebra! En Adda, no creemos en los estándares de
            belleza predefinidos, sino en la belleza que emana de la confianza,
            la comodidad y la autenticidad de ser quien eres.
          </p>
          <p>
            Nuestra marca fue concebida por una mujer real, con la visión de
            ofrecer a todas las mujeres la libertad de expresarse a través de la
            moda, sin limitaciones ni restricciones. En Adda, entendemos que
            cada mujer es única y especial, con su propio estilo y personalidad,
            y es por eso que nos esforzamos por ofrecer una amplia gama de
            prendas y accesorios que se adapten a cada gusto y preferencia.
          </p>
          <p>
            Aquí en Adda, no seguimos las tendencias, las creamos. Creemos en la
            libertad de expresión a través del estilo, en la capacidad de cada
            mujer para ser una diseñadora de su propio guardarropa, combinando
            piezas únicas y creando looks que reflejen su verdadera esencia.
          </p>
        </div>
      </section>

      <section>
        <div className={style.textContainer}>
          <p>
            Cada prenda, cada accesorio que encontrarás en Adda ha sido
            cuidadosamente seleccionado y diseñado para realzar la belleza
            natural de cada mujer y reflejar su personalidad única. Desde
            elegantes vestidos hasta cómodos conjuntos de ropa informal, desde
            llamativos accesorios hasta delicadas joyas, en Adda encontrarás
            todo lo que necesitas para expresarte y sentirte hermosa en cada
            ocasión.
          </p>
          <p>
            Pero en Adda, la belleza va más allá de lo superficial. Creemos en
            embellecerse en cuerpo, mente y alma. Por eso, además de ofrecer
            moda de alta calidad, también nos comprometemos a promover el
            bienestar y la autoaceptación entre nuestras clientes, animándolas a
            amarse a sí mismas tal como son y a abrazar su individualidad con
            orgullo.
          </p>
          <p>
            Únete a la comunidad de mujeres reales que eligen Adda para expresar
            su estilo único y celebrar su belleza auténtica. ¡Descubre un mundo
            donde la moda se encuentra con la verdadera esencia de ser mujer y
            donde cada día es una oportunidad para brillar con luz propia!
          </p>
        </div>
        <div className={style.imgContainer}>
          <img src={img2} />
        </div>
      </section>
    </div>
  );
});

export default About;
