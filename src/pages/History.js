function History() {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  return (
    <div style={{ margin: "40px" }}>
      <h2>🔍 Checked History</h2>

      {history.length === 0 && <p>No history yet</p>}

      {history.map((item, index) => (
        <div key={index} style={{ border: "1px solid gray", padding: "10px" }}>
          <p><b>URL:</b> {item.url}</p>
          <p>Status: {item.status}</p>
          <p>Score: {item.score}%</p>
          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}

export default History; 