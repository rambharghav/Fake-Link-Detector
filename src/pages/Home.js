import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    // 👉 RESULT PAGE ki pampistham
    navigate("/result", { state: { url } });
  };

  return (
    <div className="home-container">
      <h1 className="title">🔐 Check if a Link is Safe</h1>

      <p className="subtitle">
        Detect scams, phishing & fake URLs instantly ⚡
      </p>

      <div className="input-box">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste URL here..."
        />

        {/* 🔥 FIX HERE */}
        <button onClick={handleCheck}>Check Link </button>
      </div>

      <div className="features">
        <div>⚡ Fast Detection</div>
        <div>🤖 AI Powered</div>
        <div>🛡️ Secure Analysis</div>
      </div>
    </div>
  );
}

export default Home;