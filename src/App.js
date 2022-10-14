import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Contactus from "./pages/contactus";
import Heading from "./components/heading";

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;