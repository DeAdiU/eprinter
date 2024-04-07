import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import './index.css'
import axios from 'axios'
const URL = "https://barcklays.onrender.com/api/employee/complaints/"
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InNvaGFtNCIsImVtYWlsIjoiZW1wb3llZTFAZ21haWwuY29tIiwicm9sZSI6IkNVU1RPTUVSX0NBUkVfUkVQIiwiZW1wbG95ZWVfaWQiOiIxMjM0NTY3ODkxIiwiaWF0IjoxNzEyNDI0NzcwfQ.nmS57dnlbM0wZzV330qqVSR0-36i72jszkqENiuw-4s'

function Chat1({ socket, username, room, complaintId }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [messageRDS,setMessageRDS]=useState([])
  const [previousMessage, setPreviousMessage] = useState({});
  const [presentMessage, setPresentMessage] = useState({});
  var rooom=room
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        complaint: {connect: {id: complaintId}}
      };
      const messageRDS= {
        "message":currentMessage,
        "time": `${new Date().getHours()}:${new Date().getMinutes()}`,
        "complaint_id": complaintId
      }
      try {
        const config = {
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}` 
          },
        };

        const response = await axios.post(URL+room+'/send-message', messageRDS,config);

        if (!response?.data) {
          console.log('Response data is empty');
          return;
        }
        console.log(response.data)
      } catch (err) {
        console.log(err);
        console.log(currentMessage)
      }
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      socket.emit("send_message", messageData);
    }
  };

  const getMessages = async () => {
    try {
      if (!URL) {
        console.log('URL is not defined');
        return;
      }

      const config = {
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        },
      };

      const response = await axios.get(URL+complaintId+'/messages',config);

      if (!response) {
        console.log('Response is null');
        return;
      }

      if (!response.data) {
        console.log('Response data is empty');
        return;
      }

      const data = response.data; 

      if (!Array.isArray(data)) {
        console.log('Response data is not an array');
        return;
      }

      setMessageRDS(data);
      console.log(messageRDS);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages()
  }, [socket]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setPresentMessage(data);
      if (previousMessage.data !== presentMessage.data) {
        setMessageList((list) => [...list, data]);
        setPreviousMessage(presentMessage);
      }
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageRDS.map((messageC, index) => (
            <div
              key={index}
              className="message"
              id={'EMPLOYEE' === messageC.sender ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageC.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageC.time}</p>
                  <p id="author">{messageC.sender}</p>
                </div>
              </div>
            </div>
          ))}
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.sender}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div>
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && sendMessage()}
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }} />
      </div>
    </div>
  );
}

export default Chat1;

