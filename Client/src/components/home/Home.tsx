import style from "./home.module.scss";
import modelaje from "../../assets/modelaje.mp4";

const Home = () => {
  return (
    <div className={style.Home}>
        <video src={modelaje} autoPlay loop muted />
    </div>
  );
};

export default Home;
