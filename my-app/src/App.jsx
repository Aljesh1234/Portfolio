import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

    // <div className="App">
    //     <Header/>
    //     <Home/>
    //     <About/>
    //   <Experience/>
    //   <Work/>
    //   <Contact/>
    // </div>
  );
}

export default App;
