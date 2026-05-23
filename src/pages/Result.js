import { useLocation } from "react-router-dom";
import { checkUrlSafety } from "../utils/urlChecker";
import ResultCard from "../components/ResultCard";
import { useEffect, useMemo } from "react";

function Result() {
  const { state } = useLocation();

  const result = useMemo(() => {
    return checkUrlSafety(state.url);
  }, [state.url]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.unshift({
      url: state.url,
      status: result.status,
      score: result.score,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("history", JSON.stringify(history));
  }, [state.url, result]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Detection Result</h2>
      <p><b>URL:</b> {state.url}</p>
      <ResultCard result={result} />
    </div>
  );
}

export default Result;