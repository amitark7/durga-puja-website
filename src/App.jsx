import Home from "./pages/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./pages/Expenses";
import Events from "./pages/Events";
import Galleries from "./pages/Galleries";
import Funds from "./pages/Funds";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/expense" element={<Expenses />} />
      </Routes>
      <Routes>
        <Route path="/fund" element={<Funds />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Galleries />} />
      </Routes>
      <Routes>
        <Route path="/event" element={<Events />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
