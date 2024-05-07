import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
