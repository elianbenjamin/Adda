import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/home/Home";
import School from "./components/School/School";
import Photos from "./components/Photos/Photos";




function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/school" element={<School />}/>
        <Route path="/photos" element={<Photos />} />
        
      </Routes>
    </>
  );
}

export default App;
