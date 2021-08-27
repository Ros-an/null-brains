import Home from "./home/Home";
import {Routes, Route} from "react-router-dom"
// import astronaut from "./assets/taxi-welcome-to-space-1.png"

function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/features" element={<Home />} />
        <Route exact path="/contact" element={<Home />} />
        <Route exact path="/blog" element={<Home />} />
      </Routes>     
    </main>
  );
}

export default App;
