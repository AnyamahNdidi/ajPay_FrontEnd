import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Congrats from './Auth/Congrats'
import ForgetPass from './Auth/ForgetPass'
import ResetPass from './Auth/ResetPass'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Verify from './Auth/Verify'
import Landing from './Screen/Landing'


const MyHome = () => {
  return (
    <>
      <Routes>
           <Route path="/" element={<Landing/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/forget" element={<ForgetPass/>}/>
            <Route path="/reset" element={<ResetPass/>}/>
            <Route path="/verify" element={<Verify/>}/>
            <Route path="/congrat" element={<Congrats/>}/>
      </Routes>
    </>
  )
}

export default MyHome