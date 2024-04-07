import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const URL = "https://barcklays.onrender.com/api/employee/"
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InNvaGFtNCIsImVtYWlsIjoiZW1wb3llZTFAZ21haWwuY29tIiwicm9sZSI6IkNVU1RPTUVSX0NBUkVfUkVQIiwiZW1wbG95ZWVfaWQiOiIxMjM0NTY3ODkxIiwiaWF0IjoxNzEyNDI0NzcwfQ.nmS57dnlbM0wZzV330qqVSR0-36i72jszkqENiuw-4s'
function Transfer( id={id}) {
    const theme = useTheme();
    const navigate=useNavigate()
  const colors = tokens(theme.palette.mode);
  const [members,setMembers]=useState([])
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
    const [open, setOpen] = useState(false);
    // const [selectedFile, setSelectedFile] = useState(null);
    const [Status,setStatus]=useState('')
    const handleQuery = async(e)=>{
        if(Status=="solved"){
            navigate('/')
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
          
                const response = await axios.put(URL+'complaints/'+id.id+'/update-status', {"status":"RESOLVED"},config);
          
                if (!response?.data) {
                  console.log('Response data is empty');
                  return;
                }
                setMembers(response.data)
                console.log(members)
              } catch (err) {
                console.log(err);
                console.log(id.id)
              }
        }
        else if(Status=="closed"){
            navigate('/')
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
          
                const response = await axios.put(URL+'complaints/'+id.id+'/update-status', {"status":"CLOSED"},config);
          
                if (!response?.data) {
                  console.log('Response data is empty');
                  return;
                }
                console.log(response.data)
              } catch (err) {
                console.log(err);
                console.log(id.id)
              }
        }
        else if(Status=="escalated"){
            navigate('/')
        }
        else{
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
          
                const response = await axios.post(URL+'get_team_members/',{"id":1},config);
          
                if (!response?.data) {
                  console.log('Response data is empty');
                  return;
                }
                setMembers(response.data)
              } catch (err) {
                console.log(err);
              }
            setOpen(true);
        }
    }
    const handleClickOpen = () => {
      
      
    };
  
    const handleClose = () => {
      setOpen(false);// Clear selected file on close
      
    };
    const handleTransfer = async(e) => {
      // Clear selected file on close
      navigate('/')
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
  
        const response = await axios.post(URL+'complaints/'+id.id+'/transfer',{  "transfer_employee_id":e.id},config);
  
        if (!response?.data) {
          console.log('Response data is empty');
          return;
        }
        console.log(response.data)
      } catch (err) {
        console.log(err);
        console.log(e.id)
      }
      setOpen(false);

    }
  
    return (
      <div>
        <TextField
              id="outlined-select-currency"
              select
              value={status}
              label="Status"
              color='secondary'
              onChange={(e) => setStatus(e.target.value)}
              sx={{ color: colors.greenAccent[600], fontSize: "20px",padding:"auto",m:1,width:"275px" }}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={{ color: colors.greenAccent[600] }}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button variant="contained" color="secondary" style={{ fontSize: "15px",padding:"auto",m:1,width:"275px" }}
              onClick={handleQuery}
              >Submit</Button>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth backgroundColor={colors.primary[400]} >
          <DialogTitle>
            View Media
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent 
            
            sx= {{
                padding:'200px',
              position: "relative",
              justifyContent: "center",      
            }}
            
          >
            <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          maxheight="300px"
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
              Team Members
            </Typography>
          </Box>
          {members.filter(member => member.role ==="CUSTOMER_CARE_REP").map((memb, i) => ( 
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              cursor="pointer"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {memb.id}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {memb.name}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color='secondary'
                p="5px 10px"
                borderRadius="4px"
                onClick={() => handleTransfer(memb)}
              >
                Transfer
              </Button>
            </Box>
          ))}
        </Box>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
  
  export default Transfer;
  