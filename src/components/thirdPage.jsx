import React,{ useContext,useState} from 'react'
import { Button, TextField } from '@material-ui/core';
import { multistepContext } from './stepContext';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ThirdStep() {
    const {userData, setUserData, saveFile,step ,setStep,responseData} = useContext(multistepContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true);
        saveFile();
        console.log(responseData)
    } 
    const handleClose = () => {
        setOpen(false);
        setStep(1)
    }
  return (
    <div className='step'>
        <div>
      <FormControl fullWidth style={{ width: '30ch' }} margin="normal">
                    <InputLabel id="demo-simple-select-label">Paper Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Paper Size"
                    onChange={(e)=>setUserData({...userData,"papersize":e.target.value})}
                    >
                    <MenuItem value={"A4"} >A4</MenuItem>
                    <MenuItem value={"A3"}  >A3</MenuItem>
                    <MenuItem value={"Letter"} >Letter</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                <FormControl fullWidth style={{ width: '30ch' }} margin="normal">
                    <InputLabel id="demo-simple-select-label">Print Side</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Paper Side"
                    onChange={(e)=>setUserData({...userData,"paperside":e.target.value})}
                    >
                    <MenuItem value={"Single"} >Single</MenuItem>
                    <MenuItem value={"Double"} >Double</MenuItem>
                    </Select>
                </FormControl >
                </div>
                <div>
                <TextField id="outlined-number" margin="normal" label="Number of Copies" type="number" onChange={(e)=>setUserData({...userData,"nocopies":e.target.value})} InputLabelProps={{shrink: true,}}/>
                </div>
                <div>
                <FormControl fullWidth style={{ width: '30ch' }} margin="normal">
                    <InputLabel id="demo-simple-select-label">Pages Per Sheet</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Pages Per Sheet"
                    onChange={(e)=>setUserData({...userData,"pagespersheet":e.target.value})}
                    >
                    <MenuItem value={1} >1</MenuItem>
                    <MenuItem value={2} >2</MenuItem>
                    <MenuItem value={4}  >4</MenuItem>
                    <MenuItem value={6}  >6</MenuItem>
                    <MenuItem value={9}  >9</MenuItem>
                    <MenuItem value={16}  >16</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                <FormControl fullWidth style={{ width: '30ch' }} margin="normal">
                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    onChange={(e)=>setUserData({...userData,"color":e.target.value})}
                    >
                    <MenuItem value={"Color"}  >Color</MenuItem>
                    <MenuItem value={"Black and White"} >Black and White</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                <FormControl fullWidth style={{ width: '30ch' }} margin="normal">
                    <InputLabel id="demo-simple-select-label">Layout</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Layout"
                    onChange={(e)=>setUserData({...userData,"layout":e.target.value})}
                    >
                    <MenuItem value={"Landscape"} >Landscape</MenuItem>
                    <MenuItem value={"Potrait"} >Potrait</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div>
                    <Button variant="contained" onClick={()=>setStep(2)} color="secondary.main" style={{ marginTop: '12px', marginRight: '16px' }}>Back</Button> 
                    <Button variant="contained" onClick={handleOpen} color="primary" style={{ marginTop: '12px', marginLeft: '127px' , backgroundColor: '#00df9a', color: 'black'}}>Submit</Button> 
                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Token Number:{responseData && (<pre className='text-l ' dangerouslySetInnerHTML={{ __html: JSON.stringify(responseData.token, null, 2) }} />)}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            Please collect your print from print station.
                            <p>Price:</p>
                            {responseData && (<pre className='text-l ' dangerouslySetInnerHTML={{ __html: JSON.stringify(responseData.token, null, 2) }} />)}
                            <Button onClick={handleClose} variant='contained'>
                            CLOSE ME
                            </Button>
                        </Typography>

                        </Box>
                    </Modal>
                </div>
                
      
    </div>
  )
}