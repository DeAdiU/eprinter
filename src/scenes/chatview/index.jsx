import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import './index.css'
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ChatFeed, ChatBubble, BubbleGroup, Message } from "react-chat-ui";
import io from 'socket.io-client';
import Header from "../../components/Header";
import React from "react";
import StatBox from "../../components/StatBox";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const status = [
    {
      value: 'solved',
      label: 'Resolved',
    },
    {
      value: 'pending',
      label: 'Pending',
    },
    {
      value: 'escalated',
      label: 'Escalated',
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
      label: 'Fucked Bitches and paid but payment',
    },  
  ];
  const docs = [
    {
      value: 'solved',
      label: 'Problem Image',
    },
    {
      value: 'pending',
      label: 'PasBook',
    },
    {
      value: 'escalated',
      label: 'Fucked Bitches and paid but payment',
    },  
  ];
  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <TextField
            id="outlined-select-currency"
            select
            label="Mode"
            defaultValue="Active"
            sx={{ color: colors.greenAccent[600], fontSize: "26px",padding:"auto",m:1,width:"275px" }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value} sx={{ color: colors.greenAccent[600] }}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
          <Chat/>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="750px"
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
              Costumer Details
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
              justifyContent='space-between'>Damnnn</Typography>
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
              justifyContent='space-between'>Damnnn</Typography>
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
              justifyContent='space-between'>Damnnn</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`100px solid ${colors.primary[500]}`}
              borderRadius={2}
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
              justifyContent='space-between'>Damnnn</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`100px solid ${colors.primary[500]}`}
              borderRadius={2}
              p="15px"
            >
              <TextField
            id="outlined-select-currency"
            select
            label="Past"
            defaultValue="Active"
            sx={{ color: colors.greenAccent[600], fontSize: "26px",padding:"auto",m:1,width:"500px" }}
            >
              {past.map((option) => (
                <MenuItem key={option.value} value={option.value} sx={{ color: colors.greenAccent[600] }}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`100px solid ${colors.primary[500]}`}
              borderRadius={2}
              p="15px"
            >
              <TextField
            id="outlined-select-currency"
            select
            label="Documents"
            defaultValue="Active"
            sx={{ color: colors.greenAccent[600], fontSize: "26px",padding:"auto",m:1,width:"500px" }}
            >
              {docs.map((option) => (
                <MenuItem key={option.value} value={option.value} sx={{ color: colors.greenAccent[600] }}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Box>
            
        </Box>
              
        
      </Box>

    </Box>
  );
};

export default ChatView;

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      curr_user: 0,
      socket:null,
    };
  }

  componentDidMount() {
    // Establish connection on component mount
    const socket = io('https://websocket-api-51zi.onrender.com/'); // Replace with your server URL
    this.setState({ socket });
    let damnn=23

    // Listen for incoming messages from the server
    socket.on('receive-msg', (damnn,mess,time) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, mess], // Update messages state
      }));
      console.log("Message aarae bhaii")
    });
  }
  componentWillUnmount() {
    // Disconnect from socket on component unmount
    const { socket } = this.state;
    if (socket) {
      socket.disconnect();
    }
  }

  onPress(user) {
    this.setState({ curr_user: user });
  }

  onMessageSubmit(e) {
    const input = this.message;
    e.preventDefault();
    if (!input.value) {
      return false;
    }
    const message = input.value;
    const time = new Date();
    const { socket, curr_user } = this.state;
    if (socket) {
      // Emit message event to the server
      socket.emit('chat-with', message, time);
      console.log("suiii")
    }

    input.value = "";
    return true;
  }

  render() {
    return (
      <div className="container">
        <div className="chatfeed-wrapper">
          <ChatFeed
            maxHeight={250}
            messages={this.state.messages} // Boolean: list of message objects
            showSenderName
          />
          <form onSubmit={e => this.onMessageSubmit(e)}>
            <input
              ref={m => {
                this.message = m;
              }}
              placeholder="Type a message..."
              className="message-input"
            />
          </form>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
          </div>
        </div>
      </div>
    );
  }
}