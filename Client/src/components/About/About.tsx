import style from "./about.module.scss";

const About = () => {
  return (
    <div className={style.About}>
      <section className={style.section1}>
        <div className={style.image}>Imagen</div>
        <div className={style.textContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            architecto rerum possimus voluptates vel impedit, sequi debitis
            velit dolores unde ipsum error quam modi commodi? Soluta minus
            eveniet sed numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda iure tenetur cum odio inventore
            voluptates ducimus laboriosam reiciendis, tempore laudantium ullam
            odit nulla illum animi libero, nemo quaerat vero. Soluta!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
