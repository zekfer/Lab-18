import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import DetailsPage from "./Components/Pages/DetailsPage";
import HelpPage from "./Components/Pages/HelpPage";
import ContactPage from "./Components/Pages/ContactPage";
import FaqPage from "./Components/Pages/FaqPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<DetailsPage />} />
          <Route path="/help" element={<HelpPage />}>
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
