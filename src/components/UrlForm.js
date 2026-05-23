import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UrlForm() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }
    navigate("/result", { state: { url } });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        type="text"
        placeholder="Paste URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: "10px", width: "320px" }}
      />
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: "10px 25px" }}>
        Check Link
      </button>
    </div>
  );
}

export default UrlForm;