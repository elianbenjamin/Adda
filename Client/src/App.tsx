import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import School from "./Pages/School/School";
import Photos from "./components/Photos/Photos";
import { RefObject, useRef } from "react";

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
      </Routes>
    </>
  );
}

export default App;
