import style from "./home.module.scss";
import About from "../About/About";
import modelaje from "../../assets/modelaje.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

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
    </div>
  );
});

export default Home;
