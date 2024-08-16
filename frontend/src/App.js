import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Streaming from "./Pages/Streaming";
import Contact from "./Pages/Contact";
import eventsPage from "./Pages/Events";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<eventsPage />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
