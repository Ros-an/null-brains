import Home from "./home/Home";
import {Routes, Route} from "react-router-dom";
import Footer from "./footer/Footer";


function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/features" element={<Home />} />
        <Route exact path="/contact" element={<Home />} />
        <Route exact path="/blog" element={<Home />} />
      </Routes>     
      <Footer />
    </main>
  );
}

export default App;
