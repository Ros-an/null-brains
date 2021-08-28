import Home from "./home/Home";
import {Routes, Route} from "react-router-dom";
import Footer from "./footer/Footer";
import Slider from "./slider/Slider";
import Floater from "./general/Floater";


function App() {
  return (
    <main>
      <Slider />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/features" element={<Home />} />
        <Route exact path="/contact" element={<Home />} />
        <Route exact path="/blog" element={<Home />} />
      </Routes>    
      <Floater /> 
      <Footer />
    </main>
  );
}

export default App;
