import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import School from "./Pages/School/School";
import Photos from "./Pages/Photos/Photos";
import { RefObject, useRef } from "react";
import Footer from "./components/Footer/Footer";
import News from './Pages/News/News';

function App() {
  const ref = useRef<{
    ref1: RefObject<HTMLDivElement>;
    ref2: RefObject<HTMLDivElement>;
  }>(null);

  const scroll = (target: "top" | "bottom") => {
    if (ref.current) {
      const { ref1, ref2 } = ref.current;
      if (target === "top") {
        ref1.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        ref2.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <NavBar scroll={scroll} />

      <Routes>
        <Route path="/" element={<Home ref={ref} />} />
        <Route path="/school" element={<School />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
