function ResultCard({ result }) {
  // 👉 if result not loaded yet
  if (!result) {
    return null; // or loading spinner pettachu
  }

  const color =
    result.status === "Safe"
      ? "#22c55e"
      : result.status === "Suspicious"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="card">
      {/* STATUS */}
      <h2 style={{ color }}>{result.status}</h2>

      {/* PROGRESS BAR */}
      <div className="progress">
        <div
          className="progress-inner"
          style={{
            width: `${result.score || 0}%`,
            background: color
          }}
        >
          {result.score || 0}%
        </div>
      </div>

      {/* 🔥 KEYWORDS / REASONS */}
      <div className="reasons">
        <h4>🔍 Analysis:</h4>

        {result?.reasons?.length === 0 ? (
          <p className="safe-msg">No suspicious patterns found</p>
        ) : (
          <ul>
            {result?.reasons?.map((reason, index) => (
              <li key={index}>⚠️ {reason}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ResultCard;