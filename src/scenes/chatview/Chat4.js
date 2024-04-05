
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://websocket-api-51zi.onrender.com');

function Chat4() {
  const [activeUsers, setActiveUsers] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [complaintId, setComplaintId] = useState('');
  const name = prompt('What is your name?');
  const id = prompt('What is the complaint id?');
  setUsername(name);
  setComplaintId(id);
  
  
  useEffect(() => {
    socket.emit('new-user', name, id);

    socket.on('user-connected', (activeUsers) => {
      setActiveUsers(activeUsers);
    });

    socket.on('receive-msg', (fromWho, message, time) => {
      const formattedMessage = `${fromWho}: ${message} at ${time}`;
      setMessages(prevMessages => [...prevMessages, formattedMessage]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const time = new Date();
    const message = messageInput.trim();
    if (message) {
      socket.emit('chat-with', message, time);
      setMessages(prevMessages => [...prevMessages, `You: ${message}`]);
      setMessageInput('');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div id="sidebar" style={{ width: '20%', backgroundColor: '#f0f0f0', height: '100vh', overflowY: 'auto' }}>
        {activeUsers.map(user => (
          <div key={user} className="active-user">{user}</div>
        ))}
      </div>
      <div id="chat-container" style={{ flexGrow: 1, padding: '20px' }}>
        <div id="message-container" style={{ height: '70vh', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <form id="send-container" onSubmit={sendMessage} style={{ display: 'flex' }}>
          <input type="text" id="message-input" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} style={{ flexGrow: 1 }} />
          <button type="submit" id="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat4;