import style from './home.module.scss';
import logo from '../../assets/logo.jpg'

import modelaje from '../../assets/modelaje.mp4';

const Home = () => {
  return (
    <div className={style.Home}>
      <nav>
        <img src={logo} />

        <ul>
          <li>Quienes somos</li>
          <li>Escuela</li>
          <li>Fotos</li>
          <li>Noticias</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <video className={style.video} src={modelaje} autoPlay loop muted />
    </div>
  )
}

export default Home
