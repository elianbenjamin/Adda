import style from "./navBar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeIcon } from "../../assets/icons";
import { useEffect, useState } from "react";

interface Props {
  scroll: (target: "top" | "bottom") => void;
}

export const NavBar = (props: Props) => {
  const { pathname } = useLocation();
  /* const navigate = useNavigate(); */
  const { scroll } = props;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${style.navBar} ${
        isScrolled || pathname !== "/" ? style.navBar_active : ""
      }`}
    >
      <img src={logo} />

      <ul>
        <li
          className={pathname === "/about" ? style.active : ""}
          onClick={() => {
            setTimeout(() => {
              scroll("bottom");
            }, 0);
          }}
        >
          <Link to={"/"}>Quienes Somos</Link>
        </li>
        <li className={pathname === "/school" ? style.active : ""}>
          <Link to="/school">Escuela</Link>
        </li>
        <li className={pathname === "/photos" ? style.active : ""}>
          <Link to="/photos">Fotos</Link>
        </li>
        {/*  no borres los Link vacios que estan para que tambien tengan el tamaño correcto (pongo esto pq veo que los otros los sacaste jaja) */}
        <li className={pathname === "/photos" ? style.active : ""}>
          <Link to="/photos">Noticias</Link>
        </li>
        <li className={pathname === "/photos" ? style.active : ""}>
          <Link to="/photos">Contacto</Link>
        </li>
      </ul>

      {(pathname !== "/" || isScrolled) && (
        <HomeIcon
          onClick={() => {
            scroll("top");
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
