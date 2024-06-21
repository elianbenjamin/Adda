import style from "./navBar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../../assets/icons";
import { useEffect, useState } from "react";
import logo from "../../assets/Adda.svg";

interface Props {
  scroll: (target: "top" | "bottom") => void;
}

export const NavBar = (props: Props) => {
  const { pathname } = useLocation();
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
      <ul>
        <li
          className={pathname === "/" && isScrolled ? style.active : ""}
          onClick={() => {
            setTimeout(() => {
              scroll("bottom");
            }, 0);
          }}
        >
          <Link to={"/"}>QUIENES SOMOS</Link>
        </li>
        <li className={pathname === "/school" ? style.active : ""}>
          <Link to="/school">ESCUELA</Link>
        </li>
        <li className={pathname === "/photos" ? style.active : ""}>
          <Link to="/photos">FOTOS</Link>
        </li>
        <li className={pathname === "/news" ? style.active : ""}>
          <Link to="/news">NOTICIAS</Link>
        </li>
      </ul>
      {/* 
      {(pathname !== "/" || isScrolled) && (
        <HomeIcon
          onClick={() => {
            scroll("top");
          }}
        />
      )} */}

      <div className={style.logoContainer}>
        <img src={logo} alt="logo"></img>
      </div>
    </nav>
  );
};

export default NavBar;
