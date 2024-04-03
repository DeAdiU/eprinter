import React,{useContext} from 'react';
import { Button, TextField, MenuItem, Box} from '@material-ui/core';
import { multistepContext } from './stepContext';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function FirstStep() {
  const {setStep, userData, setUserData} = useContext(multistepContext);
  return (
    <div className='step'>
      <div>
      <TextField required label="Name" margin="normal" value={userData["Name"]} onChange={(e)=>setUserData({...userData,"Name":e.target.value})} variant="outlined" color="secondary" style={{ width: '30ch' }}/>
      </div>
      <div>
      <TextField required label="Registration Number" value={userData["regNo"]} onChange={(e)=>setUserData({...userData,"regNo":e.target.value})} margin="normal" variant="outlined" color="primary" style={{ width: '30ch' }}/>
      </div>
      <div>
      <TextField required label="Roll Number" margin="normal" value={userData["rollNo"]} onChange={(e)=>setUserData({...userData,"rollNo":e.target.value})} variant="outlined" color="primary" style={{ width: '30ch' }}/>
      </div>
    <div>
            <FormControl fullWidth margin="normal">
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="name"
                    label="Category"
                    onChange={(e)=>setUserData({...userData,"category":e.target.value})}
                    >
                    <MenuItem value={"Student"}  >Student</MenuItem>
                    <MenuItem value={"Professor"} >Professor</MenuItem>
                    <MenuItem value={"Staff"} >Staff</MenuItem>
                    </Select>
                </FormControl>
      <div>
      <Button variant="contained" onClick={()=>setStep(2)} color="secondary.main" style={{ marginTop: '12px', backgroundColor: '#00df9a', color: 'black', marginLeft: '120px'  }}>Next</Button> 
      </div>
      
    </div>
    </div>
  );
}