import React from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import HoldAdmin from "./Component/Admin/HoldAdmin";
import MyHome from "./Component/MyHome";



const App: React.FC = (): any => {
  return (
    <>
     
      <BrowserRouter>
        <MyHome />
        <HoldAdmin/>
        
       </BrowserRouter>
       
      
    </>
  );
};

export default App;
