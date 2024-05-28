import style from "./promotersModelsCourses.module.scss";
import promotersImg from '../../assets/images/promoters.png';
import modelsImg from '../../assets/images/models.png';
import coursesImg from '../../assets/images/courses.png';
import { useEffect, useRef, useState } from "react";

const PromotersModelsCourses = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!titleRef.current) return;
      const distance = titleRef.current.getBoundingClientRect().top;
      if (distance <= window.innerHeight) setAnimation(true);
    })
  }, [])

  return (
    <div className={style.PromotersModelsCourses}>
      <div className={style.content}>
        <section>
          <h1 className={animation ? style.titleAnimation : ''} ref={titleRef}>Promotores</h1>
          <div className={animation ? style.contentAnimation : ''}>
            <img src={promotersImg} />
          </div>
        </section>

        <section>
          <h1 className={animation ? style.titleAnimation : ''}>Modelos</h1>
          <div className={animation ? style.contentAnimation : ''}>
            <img src={modelsImg} />
          </div>
        </section>

        <section>
          <h1 className={animation ? style.titleAnimation : ''}>Cursos</h1>
          <div className={animation ? style.contentAnimation : ''}>
            <img src={coursesImg} />
          </div>
        </section>
      </div>

      <h1 className={`${style.title} ${animation ? style.contentAnimation : ''}`}>
        SERVICIOS ADDA MODELS
      </h1>
    </div>
  );
};

export default PromotersModelsCourses;