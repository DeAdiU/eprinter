import React,{useState} from 'react'
import { Button,useTheme,Box,Typography } from '@mui/material'
import { tokens } from "../../theme";
import axios from 'axios'
import TextField from '@mui/material/TextField'
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function Verify(id={id}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState({});
    const [code,setCode]=useState('')
    const URL='http://127.0.0.1:8000/get-details/'
    const base='http://127.0.0.1:8000/'
    const handleClose = () => {// Clear selected file on close
        setOpen(false);
      };
    const handleDetails = async (e) =>{
        setOpen(true)
        try {
            if (!URL) {
              console.log('URL is not defined');
              return;
            }
      
            const config = {
              headers: { 
                'Content-Type': 'application/json' 
              },
            };
            axios
            .get(URL+id.id+'/', config)
            .then((response) => response.data)
            .then((data) => {
              const newData = Object.keys(data).reduce((acc, key) => {
                if (data[key] !== null) {
                  acc[key] = data[key];
                }

                return acc;
              }, {});
              console.log(newData)
              setSelectedFile(newData);
              console.log(selectedFile)
            })
            .catch((error) => {
              console.log(error);
              setSelectedFile({});
            });
          } catch (err) {
            console.log(err);
          }
    }
    const handleVerify = async (e) =>{
        console.log(selectedFile.verifycode,code)
        if( code === String(selectedFile.verifycode)){
            console.log('Attempting to verify');
            console.log('selectedFile.verifycode:', selectedFile.verifycode);
            console.log('code:', code);
            setOpen(false);
            console.log('Verified!');
        } else {
            console.log('Verification failed');
        }
    }
  return (
    <div>
        <Button color='secondary' variant='contained' onClick={handleDetails} sx={{height:'40px',width:'306px'}}>Verify</Button>
    
        <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth sx={{ '& .MuiPaper-root': { background: `${colors.primary[500]}`},}}>
        <DialogTitle sx={{fontWeight:'bold',fontSize:'20px'}}>
            Print Details
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
                padding:'100px',
              position: "relative",
              justifyContent: "center",      
            }}
            
          >

            <Box backgroundColor={colors.primary[400]}
          height="200px"
          width='400px'
          overflow="auto"
          marginTop='60px'
          justifyContent='center'
          alignItems='center'
          >
            <TextField id="outlined-basic" label="Verification Code" variant="outlined" color='secondary' onChange={(e)=>setCode(e.target.value)}
            sx={{marginTop:'40px',marginLeft:'100px'}}></TextField>
            <Button color='secondary' variant='contained' sx={{marginTop:'40px',marginLeft:'125px',width:'150px'}} onClick={handleVerify}>Verify</Button>

          </Box>


          </DialogContent>
        </Dialog>
    </div>
  )
}

export default Verify