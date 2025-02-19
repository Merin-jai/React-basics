import React, { useState } from "react";
import axios from "axios";
import Navbar from './navbar';

const API_KEY = "AIzaSyAOORVvfx5Qp6QKTbcmgwx1564kWmvjyw8"

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Stores chat history
  const [input, setInput] = useState(""); // User input
  const [loading, setLoading] = useState(false);

  // Handle sending messages
  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent empty messages
    setLoading(true);

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      const botMessage = { role: "assistant", content: response.data.candidates[0].content.parts[0].text };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <>
    <Navbar />
    <div style={styles.container}>
      <h2>AI Chatbot</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.role === "user" ? styles.userMessage : styles.botMessage}>
            {msg.content}
          </div>
        ))}
      </div>
      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={sendMessage} disabled={loading} style={styles.button}>
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
    </>
  );
};

// Styling
const styles = {
  container: { textAlign: "center", padding: "20px", width: "800px", margin: "auto" },
  chatBox: { height: "400px", overflowY: "scroll", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "10px" },
  userMessage: { textAlign: "right", background: "#e0f7fa", padding: "10px", margin: "5px", borderRadius: "5px" },
  botMessage: { textAlign: "left", background: "#f1f1f1", padding: "10px", margin: "5px", borderRadius: "5px" },
  inputBox: { display: "flex", gap: "10px" },
  input: { flex: 1, padding: "10px", fontSize: "16px", borderRadius: "5px" },
  button: { padding: "10px", fontSize: "16px", borderRadius: "5px", cursor: "pointer" },
};

export default Chatbot;
