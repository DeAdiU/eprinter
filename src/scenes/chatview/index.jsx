import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import './index.css'

import io from 'socket.io-client';
import Header from "../../components/Header";
import React from "react";

import { useState,useEffect } from "react";

import Chat from "./Chat";
import Transfer  from './Transfer'
import axios from "axios";

import Chat1 from "./Chat1";
import { useLocation,useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const USER_URL="https://barcklays.onrender.com/api/employee/"
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InNvaGFtNCIsImVtYWlsIjoiZW1wb3llZTFAZ21haWwuY29tIiwicm9sZSI6IkNVU1RPTUVSX0NBUkVfUkVQIiwiZW1wbG95ZWVfaWQiOiIxMjM0NTY3ODkxIiwiaWF0IjoxNzEyNDI0NzcwfQ.nmS57dnlbM0wZzV330qqVSR0-36i72jszkqENiuw-4s'



const socket = io.connect("https://deploying-ws-server-1.onrender.com/");
const styles = {
  button: {
    backgroundColor: "#4cceac",
    borderColor: "#1D2129",
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 2,
    color: "#1D2129",
    fontSize: 18,
    fontWeight: "bold",
    outline: "none"
  },
  selected: {
    color: "#4cceac",
    backgroundColor: "#4cceac",
    borderColor: "#0084FF"
  }
};

const users = {
  0: "You",
};

const ChatView = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const location = useLocation();
  const selectedRowData = location.state;
  const [selectedData ,setselectedData]=useState(null)
  const navigate=useNavigate()
  const [customerData,setCustomerData]=useState({})
  const [customerDocs, setCustomerDocs] = useState([]);
  var rooom=toString(room)

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true)
    }
  };
  const handleClick=()=>{
    setselectedData()
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const status = [
    {
      value: 'solved',
      label: 'Resolved',
    },
    {
      value: 'closed',
      label: 'Closed',
    },
    {
      value: 'escalated',
      label: 'Escalated',
    },  
    {
      value: 'transfer_to',
      label: 'Transfer To',
    },  
  ];

  const past = [
    {
      value: 'solved',
      label: 'Credit Card Theft',
    },
    {
      value: 'pending',
      label: 'Net Banking Not Working',
    },
    {
      value: 'escalated',
      label: 'spaid but payment',
    },  
  ];
  const docs = [
    {
      id:'23',
      value: 'problem_image',
      label: 'Problem Image',
      file:'src/data/Unit-01.pdf'
    },
    {
      id:'234',
    value: 'pasbook_image',
    label: 'PasBook',
    file:'src/data/Unit-01.pdf'
  },
  {
    value: 'payment_failed',
    label: 'paid but payment was unscucessful',
    file: 'https://unified-box-doc-storage.s3.us-east-1.amazonaws.com/3ea46456e9c773e75ed4c623adb4eeeec1644c30ec7bf84df9dbe7228fcc5a98?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDO1bGGUyxgyoQi10p7N4aTM8wyXW09R6b7ZlpMIr4TaQIgWRVR1ZoBkkhgaYqmNmmoH5tYXr4ot67zT%2F6DRHRdd8YqhAMIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzMzk3MTMwNTkzNDYiDMRHZNPaODwwFr6LUirYAksdu%2FGqMbcAMZ2JIPEW1J9r3LiEBqQoNAgfKW0gV4IX%2FpDS%2FeZkHNSuF93P94dhYT%2Byio5vU2tM430xY%2FJCTOAYAVvaYYfU5lJQmHF%2B4Xk8NZhsGPS%2BFNNqPs5jGb29ToDPDnGUhZ5I80lyYfSNQp76t2t4FCuVR11G6btzgFeF33ucLsQde3tn4uPdz7vUpfPjxAfFTSV0ErV7fk8bHV%2B068zkFWKtb4GTlmN6foFCsceBBnMRWYLmo%2BPew6DVJxWpV9B%2FDYYVuysRbNnoVL00UaR7OzIlqh8qsZpqkvW%2Fe34FxldDZU5y06lvdSkUqEmjJgZ0j%2FUIhCOqzvkjW12sNn4oNVWsZ4YKf%2BY64V2NYzjNPnkUCaAiuyJgejJPohXLEWzBNQaXoxIJ8HSccCmd%2F3sEnRJR%2F6JwSiKyXbBv38yAj2wTGp3NkYTgXoDWlujqGpVtn5%2FcMKjsw7AGOrMCC3BYKvCeOjvL%2FBaQstJMzeuvs7GXyvapQhbFOaGYzkYzS01xQeXNDeB%2Fd3zjLCkmFcli5Cp0dzwgZPHLRnBtgHCmphtqrO7fzj79DgKiB0DkHTKkyPu0WgYvRCci0ddYT496jYLhkFGfjnEK%2FrXXNPLvMUr%2BLPzu28PkuDVlMMpbm6%2FAxYx3qxAOh48ks%2B9IrvXEb951A4a9LmCTYLkFTpNFqJpNky7vzj5362oBbXc22Z%2BieDOOC4RFcd8Uc8FeCDFmvqJ9TFaAloAHwIpimxNSxY9pB%2BiuH%2B7lBrYjfeTCDiW1LFuWu8S6R3dL5HkIydrIMMml1n3GI8QG4HLlsOfn%2Fne41PqdcC66cRCtWFHXiMJuIe%2BVy8ASq3JpqCGx%2FrQiCUBV6LMGoXqWR%2BJtQPPEww%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240406T071403Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAU6GDZ5IJCLVMWIW6%2F20240406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=716f67c478b4c89abb46827b8351f69040a253c44e8c49e32f1bd00c24907d3e'
  },  
];
useEffect(() => {
  handleSubmit({ preventDefault: () => { } });
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setRoom(selectedRowData.id)
    joinRoom(room)
    console.log(selectedRowData)
    try {
      if (!URL) {
      console.log('URL is not defined');
                  return;
                }
          
                const config = {
                  headers: { 
                    'Content-Type': 'application/json', 
                  },
                };
          
                const response = await axios.post(USER_URL+'get_customer_profile/' ,{"id":selectedRowData.customer_id},config);
                
                if (!response?.data) {
                  console.log('Response data is empty');
                  return;
                }
                
                setCustomerData(response.data)
                console.log(customerData)
              } catch (err) {
                console.log(err);
                
    }
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
          
                const response= await axios.get(USER_URL+'customer/'+selectedRowData.customer_id+'/documents',config);
                if (!response?.data) {
                  console.log('Response data is empty');
                  return;
                }
                
                setCustomerDocs(response.data)
                console.log(customerDocs)
              } catch (err) {
                console.log(err);
                
    }

    
  } catch (err) {
    console.log(err);
  }
  }
  
  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <Transfer id={selectedRowData.id}/>
          </Box>
      </Box>

    

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="900px"
          borderRadius={2}
        >      
          <div className="App">
               {!showChat ? (
              <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                <input
                  type="text"
                  placeholder="John..."
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>Join A Room</button>
              </div>
            ) : (
              <Chat socket={socket} username={username} room={room} />
            )}
            
    </div>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          height="700px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Customer Details
            </Typography>
          </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  Customer Name :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{customerData.name}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  Customer ID : 
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedRowData.customer_id}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  Account Number :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{customerData.account_number}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`30px solid ${colors.primary[500]}`}
              borderRadius={2}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  Complaint Description :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedRowData.customer_description}</Typography>
            </Box>
            <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              overflow="auto"
              height="200px"
              borderBottom={`30px solid ${colors.primary[500]}`}
            >
            {docs.map((doc, i) => (
            <Box
              key={`${docs.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {doc.value}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {doc.label}
                </Typography>
              </Box>  
            </Box>
          ))}
          </Box>
            <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              overflow="auto"
              height="200px"
            >
            {docs.map((doc, i) => (
            <Box
              key={`${docs.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              onClick={() => {
                if (doc.file) {
                  setselectedData(doc);
                  console.log(selectedData);
                } else {
                  // Handle cases where doc.file is null (e.g., display a message)
                  console.error("No file associated with this document");
                }
              }}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  
                </Typography>
              </Box>  
            </Box>
          ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatView;



