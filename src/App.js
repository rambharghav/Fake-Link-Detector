import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Awareness from "./pages/Awareness";
import History from "./pages/History";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="light">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/history" element={<History />} />
        </Routes>

        {/* 🔥 ADD THIS LINE (IMPORTANT) */}
        <ChatBot />
      </BrowserRouter>
    </div>
  );
}

export default App;