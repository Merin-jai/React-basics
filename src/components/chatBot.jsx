import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

const API_KEY = "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"; // Replace with your OpenAI API Key

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle sending messages to OpenAI API
  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent empty messages

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: newMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
        <Navbar/>
      <h2>AI Chatbot</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#dcf8c6" : "#ececec",
            }}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p>Thinking...</p>}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

// Basic Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  chatBox: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    width: "400px",
    border: "1px solid #ccc",
    overflowY: "scroll",
    padding: "10px",
    background: "#f9f9f9",
    borderRadius: "8px",
  },
  message: {
    padding: "10px",
    margin: "5px",
    borderRadius: "8px",
    maxWidth: "75%",
  },
  inputContainer: { display: "flex", marginTop: "10px" },
  input: { flex: 1, padding: "10px", fontSize: "16px" },
  button: { padding: "10px", marginLeft: "10px", cursor: "pointer" },
};

export default Chatbot;
