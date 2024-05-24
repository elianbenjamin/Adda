import { useEffect, useRef, useState } from "react";
import style from "./news.module.scss";

const News = () => {
  const title = useRef<HTMLHeadingElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (title.current) {
        const { current } = title;
        const distance = current.getBoundingClientRect().top;
        if (distance <= window.innerHeight) setAnimation(true);
      }
    })
  }, []);

  return (
    <div className={style.News}>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eius
        excepturi provident hic voluptas possimus reprehenderit nulla, quae
        exercitationem doloremque sint itaque? Aperiam quae harum molestiae
        dolore corrupti numquam id!
      </div>

      <h1 ref={title} className={animation ? style.titleAnimation : ""}>
        Holaaaa
      </h1>
    </div>
  );
};

export default News;
