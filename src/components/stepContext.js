import React, { useState } from "react";
import { Form } from "./Form";
import axios from "axios";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
const token = "scsgIbAzGz9wbejbd8KjXz9E74CXdvES7L9ZZ5B9f0898bf6";

export const multistepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [responseData, setResponseData] = useState([]);

  const saveFile = () => {
    console.log(userData);
    setFinalData();
    setUserData("");
    console.log(userData);
    console.log("Button clicked");
    console.log(finalData);

    let formData = new FormData();
    formData.append("pdf", userData.file);
    formData.append("regNo", userData.regNo);
    formData.append("phone", userData.phone);
    formData.append("Name", userData.Name);
    formData.append("category", userData.category);
    formData.append("Layout", userData.layout);
    formData.append("PaperSize", userData.papersize);
    formData.append("color", userData.color);
    formData.append("PagesPerSheet", userData.pagespersheet);
    formData.append("printSide", userData.paperside);
    formData.append("Pages", userData.Pages);
    formData.append("numberOfCopies", userData.nocopies);

    let axiosConfig = {
      headers: {
        "Content-Type": "multpart/form-data",
      },
    };
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/post/files/", formData, axiosConfig)
      .then((response) => response.data)
      .then((data) => {
        const newData = Object.keys(data).reduce((acc, key) => {
          if (data[key] !== null) {
            acc[key] = data[key];
          }
          return acc;
        }, {});
        console.log(newData);
        setResponseData(newData);
      })
      .catch((error) => {
        console.log(error);
        setResponseData({});
      });
  };
  let config ={
    headers:{
      "Content-Type": "application/json",
    }
  }
  let data = {
    "session": "default",
    "chatId":  "91"+responseData.phone+"@c.us",
    "text": `Hello, We have recieved your Document for print. Your print will be delivered soon. Your Order Details \n Token Number: ${responseData.token} \n Price: ${responseData.price} \n Thank you for using our service.`,
    
  }
  
  return (
    <div>
      
      <NavBar />
      <Hero />
      <multistepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          saveFile,
          responseData
        }}
      >
        <Form />
      </multistepContext.Provider>
      <AboutUs />

      <Footer />
    </div>
  );
};

export default StepContext;
