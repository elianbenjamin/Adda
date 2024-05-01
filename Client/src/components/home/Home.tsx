import style from './home.module.scss';
import logo from '../../assets/logo.jpg'
import video from '../../assets/video.mp4';

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
      <video autoPlay loop>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Home
