import style from "./navBar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeIcon } from "../../assets/icons";

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className={style.navBar}
      style={pathname === "/" ? { backgroundColor: "transparent" } : {}}
    >
      <img src={logo} />

      <ul>
        <li className={pathname === "/about" ? style.active : ""}>
          <Link to="/about">Quienes somos</Link>
        </li>
        <li className={pathname === "/school" ? style.active : ""}>
          <Link to="/school">Escuela</Link>
        </li>
        <li className={pathname === "/photos" ? style.active : ""}>
        
        <Link to="/photos">Fotos</Link> 
        </li>
        <li>
        Noticias
        </li>
        <li>
        Contacto
        </li>
      </ul>

      {pathname !== "/" && (
        <HomeIcon
          onClick={() => {
            navigate("/");
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
