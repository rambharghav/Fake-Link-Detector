import { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I can help you detect fake links!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("http")) {
      return "🔗 Looks like a URL. Paste it above to check safety!";
    }

    if (msg.includes("fake")) {
      return "⚠️ Fake links often contain words like login, verify, free, win.";
    }

    if (msg.includes("safe")) {
      return "✅ Always check HTTPS and correct domain name!";
    }

    if (msg.includes("hello") || msg.includes("hi")) {
      return "👋 Hello! Ask me about link safety.";
    }

    return "🤖 Try asking about fake links or paste a URL!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg = {
        text: getBotReply(input),
        sender: "bot"
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* BUTTON */}
      <div className="chatbot-icon" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {/* CHATBOX */}
      {open && (
        <div className="chatbox">
          <div className="chat-header">AI Assistant</div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {typing && <div className="bot typing">Typing...</div>}

            <div ref={chatEndRef}></div>
          </div>
          <div className="chat-header">
  <span>AI Assistant</span>

  {/* ❌ CLOSE BUTTON */}
  <button className="close-btn" onClick={() => setOpen(false)}>
    ✖
  </button>
</div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;