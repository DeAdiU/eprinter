import { Box, Button, TextField, Alert, AlertTitle,useTheme } from '@mui/material'
import React ,{useState } from 'react'
import Header from '../../components/Header'
import axios from 'axios'
import { tokens } from "../../theme";

import CheckIcon from '@mui/icons-material/Check';
const URL = "https://barcklays.onrender.com/api/employee/"
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InNvaGFtNCIsImVtYWlsIjoiZW1wb3llZTFAZ21haWwuY29tIiwicm9sZSI6IkNVU1RPTUVSX0NBUkVfUkVQIiwiZW1wbG95ZWVfaWQiOiIxMjM0NTY3ODkxIiwiaWF0IjoxNzEyNDI0NzcwfQ.nmS57dnlbM0wZzV330qqVSR0-36i72jszkqENiuw-4s'


const SendNotification = () => {
  const theme=useTheme()
  const [user,setUser] = useState([])
  const [message,setMessage] = useState('')
  const [success,setSuccess]=useState(false)
  const [title,setTitle] = useState('');
  const [product,setProduct] = useState('');
  const colors = tokens(theme.palette.mode);
  const handleClick = async () => {
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

      for(const id of user && user.split(',')) {
        const response = await axios.post(URL+'send_notification/', {"email":id,"message":message,"title":title,"product":product}, config);

        if (!response?.data) {
          console.log(`Response data is empty for id ${id}`);
          continue;
        }
        console.log(`Response data for id ${id}:`, response.data)
      }
      setSuccess(true)
      setUser([])
      setMessage('')
      setProduct('')
      setTitle('')
    } catch (err) {
      console.log(err);

    }
  }
  return (
    <Box m='20px'>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Send Notifications" subtitle="Please fill the form below" />
      </Box>
      {success && <Alert severity="success" onClose={() => setSuccess(false)} sx={{maxWidth: '500px',marginTop: '10px',marginLeft:'20px',backgroundColor:colors.primary[400]}}>
        <AlertTitle>Success</AlertTitle>
        Notification sent successfully
      </Alert>}
      <Box display="flex" justifyContent="space-between" alignItems="center" color='secondary'>
      <TextField
          required
          id="standard-required"
          label="Customer email ID"
          variant="standard"
          color='secondary'
          size='large'
          value={user}
          onChange={(e)=>setUser(e.target.value)}
          sx={{width: '275px',height: '50px',fontSize:'20px'}}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" color='secondary'>
      <TextField
          required
          id="standard-required"
          label="Title"
          variant="standard"
          color='secondary'
          size='large'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          sx={{width: '275px',height: '50px',fontSize:'20px'}}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" color='secondary'>
      <TextField
          required
          id="standard-required"
          label="Product"
          variant="standard"
          color='secondary'
          size='large'
          value={product}
          onChange={(e)=>setProduct(e.target.value)}
          sx={{width: '275px',height: '50px',fontSize:'20px'}}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" color='secondary' mt='20px'>
        <TextField
          id="filled-textarea"
          label="Message"
          placeholder="Placeholder"
          multiline
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          color='secondary'
          sx={{width: '500px',fontSize:'20px'}}
          variant="standard"
        />
      </Box>
      <Button variant="contained" color='secondary' sx={{mt:'20px'}} onClick={handleClick}>Send</Button>

    </Box>
  )
}

export default SendNotification
