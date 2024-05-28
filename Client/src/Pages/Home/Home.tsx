import style from "./home.module.scss";
import About from "../../components/About/About";
import modelaje from "../../assets/modelaje.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";
import TheBrand from "../../components/TheBrand/TheBrand";
import Quote from "../../components/Quote/Quote";
import MisionVisionValues from "../../components/MisionVisionValues/MisionVisionValues";
import Moodboard from "../../components/Moodboard/Moodboard";
import Target from "../../components/Target/Target";
import Catalogue from "../../components/Catalogue/Catalogue";
import PromotersModelsCourses from "../../components/PromotersModelsCourses/PromotersModelsCourses";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = forwardRef((_, ref) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useImperativeHandle(ref, () => ({
    ref1,
    ref2,
  }));

  return (
    <div className={style.Home}>
      <div className={style.videoContainer} ref={ref1}>
        <video src={modelaje} autoPlay loop muted />
      </div>
      <About ref={ref2} />
      <TheBrand />
      <Quote />
      <MisionVisionValues />
      <Moodboard />
      <Target />
      <Catalogue />
      <PromotersModelsCourses />
    </div>
  );
});

export default Home;
