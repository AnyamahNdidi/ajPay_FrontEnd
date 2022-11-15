import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import Swal from 'sweetalert2'
import { useRecoilState } from "recoil"
import {users} from "../Global/Globastate"


const SignIn = () =>
{
    const navigate = useNavigate();

    const [userData, setUserData] = useRecoilState(users)
    console.log("current user", userData)



    const schema = yup.object().shape({
        email: yup.string().required("enter your email"),
        password: yup.string().required("password is required"),
       
    })

    const {register, handleSubmit, formState:{errors},reset } = useForm({
        resolver: yupResolver(schema),
    })
    
    let url = "http://localhost:5050"

    const signIn = handleSubmit(async(data) =>
    {
        console.log(data)
        try
        {
              await axios.post(`${url}/api/user/login`, data).then((res) =>
              {
            setUserData(res.data.data)
            Swal.fire(
                 'Good job!',
                'Login  sucessful',
                'success'
            )
            navigate("/")
        }).catch((err)=>{console.log(err)})
        } catch (error)
        {
            console.log( "something went wrong", error   )
        }

      
     
    })
  return (
       <Cobtainer>
          <MainCard>
              <LogoHolder>
                  ajWallet
              </LogoHolder>
              <InputHoleder>
                  <MainHolder  onSubmit={signIn}>
                      
                      <Input
                          placeholder='E-mail'
                            {...register("email")}
                      />
                      <Error>{ errors?.email && "please provide emal"}</Error>
                      <Input
                          placeholder='password'
                          {...register("password")}
                      />
                       <Error>{ errors?.password && "please provide emal"}</Error>
                      <ForgteCon
                          onClick={() =>
                          {
                            navigate("/forget")  
                      }}
                      >
                          Forgot your password?
                      </ForgteCon>


                      <ButtonHolder>
                          <Dbutton type='submit'>
                              Log In
                          </Dbutton>
                          
                      </ButtonHolder>
                  </MainHolder>

              </InputHoleder>
              <Alread>
                  <Textdiv>
                      <Text>
                          Don't have an account 
                      </Text>
                      <Myclick
                          onClick={() =>
                          {
                              navigate("/signup")
                      }}>
                          Sign Up
                      </Myclick>
                      
                  </Textdiv>
              </Alread>
              
          </MainCard>
          
    </Cobtainer>
  )
}

export default SignIn

const Error  = styled.div`
color:red;
margin-top:-5px;
`

const ForgteCon = styled.div`
 color:red;
 display:flex;
 justify-content:center;
 align-items:center;
 font-size:15px;
 cursor:pointer;
 margin-bottom:10px;
`

const Dbutton = styled.button`
  height:100%;
  width:140px;
  background-color: black;
  font-size:15px;
  font-weight:700;
  color:white;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius:6px;
  cursor:pointer;
  transition:all 350ms;

  :hover{
    cursor:pointer;
    transform:scale(1.1);
    background-color:#190e00;
  }
`

const ButtonHolder = styled.div`

width:100%;
height:45px;
display:flex;
justify-content:center;
align-items:center;

`

const Input = styled.input`
width:98%;
height:37px;
background-color:#ffe0b6;
border-radius:5px 5px 0px 0px;
border:none;
border-bottom:1px solid black;
padding-left:4px;
margin-bottom:18px;

::placeholder { 
  color: grey;
}

:focus{
    outline: none 
  
}

`

const Textdiv = styled.div`
display:flex;
`
const Text = styled.div``
const Myclick = styled.div`
margin-left:5px;
color:red;
font-weight:700;
cursor:pointer;
`


const MainHolder = styled.form`
  width: 85%;
  height:180px; 
 
`

const LogoHolder = styled.div`
width:100%;
height:50px;
color:#ff9505;
display:flex;
justify-content: center;
align-items: center;
font-weight:900;
font-size:25px;
`
const InputHoleder = styled.div`
width:100%;
height:230px;
display:flex;
justify-content: center;
align-items: center;

`
const Alread = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const MainCard = styled.div`
height:350px;
width:350px;
background-color:#fff0dd;
display:flex;
flex-direction:column;
border-radius:6px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

@media screen and (max-width: 600px) {
     width:90%;
    }
`

const Cobtainer = styled.div`
  width:100%;
  height:100%;
  min-height:100vh ;
  background-color:#ff9505;
  display:flex;
  justify-content:center;
  align-items:center;
`