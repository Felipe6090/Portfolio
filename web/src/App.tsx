import { Menu } from "./components/menu";
import { Home } from "./pages/home/index";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Skills } from "./pages/skills";
import { Works } from "./pages/works";
import { WorkPage } from "./pages/workPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:workName" element={<WorkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
