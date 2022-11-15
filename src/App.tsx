import React from "react";
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import HoldAdmin from "./Component/Admin/HoldAdmin";
import MyHome from "./Component/MyHome";
import { useRecoilValue } from "recoil"
import {users} from "./Component/Global/Globastate"



const App: React.FC = (): any =>
{
  const myCurrent = useRecoilValue(users)
  console.log(myCurrent,"hello user")
  return (
    <>
     
      <BrowserRouter>
        
        {
          myCurrent ? (<HoldAdmin />) : (<MyHome />)
        }
       
       </BrowserRouter>
       
      
    </>
  );
};

export default App;
