import React,{useState} from 'react'
import { Button,useTheme,Box,Typography } from '@mui/material'
import { tokens } from "../../theme";
import axios from 'axios'
import FeedIcon from '@mui/icons-material/Feed';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StatBox from "../../components/StatBox";
import CloseIcon from '@mui/icons-material/Close';
import ArticleIcon from '@mui/icons-material/Article';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';

import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
const URL='http://127.0.0.1:8000/get-details/'
function PrintView(id={id}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState({});// Change to null
    const suii={}
    const currencies = [
      {
        value: 'Active',
        label: 'Active',
      },
      {
        value: 'Sleep',
        label: 'Break',
      },
      {
        value: 'Inactive',
        label: 'Inactive',
      }, 
    ];
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
    
  return (
    <div>
        <Button
                variant="contained"
                color='secondary'
                p="5px 10px"
                borderRadius="4px"
                onClick={handleDetails}>
                
            Print
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth sx={{ '& .MuiPaper-root': { background: `${colors.primary[500]}`},}} >
          <DialogTitle sx={{fontWeight:'bold',fontSize:'20px'}}>
            Print Details {'('+selectedFile.token+')'}
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
            
        <Box

          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          height="300px"
          width='800px'
          overflow="auto"
          marginTop='60px'
          marginLeft='100px'
        >
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
              justifyContent='space-between'>{selectedFile.Name}</Typography>
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
                ID : 
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.id}</Typography>
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
                  Pages :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.Pages}</Typography>
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
                  Print Side :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.printSide+' Sided'}</Typography>
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
                  Number of Copies :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.numberOfCopies}</Typography>
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
                  Color :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.color}</Typography>
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
                  Pages Per Sheet :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.PagesPerSheet}</Typography>
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
                  Color :
                </Typography>
              </Box>
              <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              alignItems="center"
              justifyContent='space-between'>{selectedFile.color}</Typography>
            </Box>
          
        </Box>
        <Box
        display='grid'
        gridTemplateColumns='repeat(3,1fr)'
        gap='30px'
        height="60px"
        marginTop='60px'
        justifyContent='space-between'
        padding='10px'
        
        >
          <Button color='secondary' variant='contained'>Verify</Button>
          <Button color='secondary' variant='contained'>Print</Button>
          <Button color='secondary' variant='contained'>Update</Button>
        </Box>

        
          </DialogContent>
        </Dialog>

    </div>
  )
}

export default PrintView