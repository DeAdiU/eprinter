import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multistepContext } from './stepContext';
import './secondStep.css'

// npm i react-icons
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { useState } from 'react'; 

export default function SecondStep() {
    const {setStep, userData, setUserData} = useContext(multistepContext);
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected FIle")
    
  return (
    <div className='step'>
      <div>
      <TextField id="pages" margin="normal" label="Pages" type="text" value={userData["Pages"]} onChange={(e)=>setUserData({...userData,"Pages":e.target.value})} style={{ marginTop: '12px', marginRight: '16px' }}/>
      </div>
      
      <div>
      <form action='' onClick={()=> document.querySelector(".input-field").click()} className='upload-files'>
        
        <input type='file' accept='file' className='input-field' hidden
        onChange={({target:{files}})=>{
          files[0] && setFileName(files[0].name)
            setUserData({...userData,"file":files[0]})
            setImage(null); // Set image to null to just display filename
        }}/>
        {image ?
        <img src={image} width={100} height={100} alt='fileName' style={{margin: '12px', marginBottom: '20px', alignItems:'center'}} />
        :
        <>
            <MdCloudUpload color='#000000' size={80}/> 
            <p>Browse Files to Upload</p>
        </>
        }
      </form>

      <div className='centered-uploaded-row'>
        <section className='uploaded-row'>
            <AiFillFileImage color='black' />
            <span className='upload-content'>
            {fileName} -
            <MdDelete onClick={() => {
                setFileName("No Selected File")
                setImage(null)
                setUserData({...userData,"file":null})
            }} />
            </span>
        </section>
     </div>
      </div>




      <div>
      <Button variant="contained" onClick={()=>setStep(1)} color="secondary.main" style={{ marginTop: '12px', marginRight: '16px' }}>Back</Button> 
      <Button variant="contained" onClick={()=>setStep(3)} color="primary" style={{ marginTop: '12px', marginLeft: '50px', backgroundColor: '#00df9a', color: 'black'}}>Next</Button> 
      </div>
      
    </div>
  )
}