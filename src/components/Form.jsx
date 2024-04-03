
import React, {useContext} from 'react';
import FirstStep from './firstPage';
import SecondStep from './secondPage';
import ThirdStep from './thirdPage';
import { createTheme } from '@mui/material/styles';
import {Stepper, StepLabel, Step} from '@material-ui/core';
import {multistepContext} from './stepContext';


const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#000000',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#00df9a',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    },
  });


export const Form = () => {
    
  const { currentStep, finalData,userData} = useContext(multistepContext);
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100">
        <div className='max-w-[1240px] mx-auto grid gap-8'>
            <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Enter your details and document</h2>
            <form className='relative flex mx-auto gap-8 my-10'>
                <div className="App">
                    <div className='flex justify-center'>
                        <Stepper style={{width: '50%' , justifyContent: 'center'}} activeStep={currentStep- 1} orientation='horizontal' >
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        </Stepper>
                    </div>
                    {showStep(currentStep)}
                </div>
            </form>

            </div>
        </div>

    </div>
  );
}