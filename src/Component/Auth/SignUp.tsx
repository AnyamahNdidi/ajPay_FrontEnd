import React from 'react'
import styled from 'styled-components'
import { useNavigate} from "react-router-dom"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import Swal from 'sweetalert2'

function SignUp()
{
    const navigate = useNavigate()

    const schema = yup.object().shape({
        fullName: yup.string().required("enter your fullname"),
        userName: yup.string().required("enter your userName"),
        email: yup.string().required("enter your email"),
        password: yup.string().required("password is required"),
        confirm: yup.string().oneOf([yup.ref("password"), null], "password don't match")
    })

    const {register, handleSubmit, formState:{errors},reset } = useForm({
        resolver: yupResolver(schema),
    })
    
    let url = "http://localhost:5050"

    const registerNow = handleSubmit(async(data) =>
    {
        console.log(data)

        await axios.post(`${url}/api/user/create`, data).then( async (res) =>
        {
            await axios.post(`${url}/api/wallet/${res.data.data._id}/create`).then((res) =>
            {
               Swal.fire(
                 'Good job!',
                'registration sucessful',
                'success'
                )
                navigate("/verify")
          })

           
            
        }).catch((err)=>{console.log(err)})
     
    })




  return (
      <Cobtainer>
          <MainCard>
              <LogoHolder>
                  ajWallet
              </LogoHolder>
              <InputHoleder>
                  <MainHolder onSubmit={registerNow}>
                      <Input
                          placeholder='Full Name'
                          {...register("fullName")}
                      />
                      <Error>{ errors?.fullName && "please provide emal"}</Error>
                      <Input
                          placeholder='User Name'
                          {...register("userName")}
                      />
                      <Error>{ errors?.userName && "please provide emal"}</Error>
                      <Input
                          placeholder='E-mail'
                          {...register("email")}
                      />
                      <Error>{ errors?.email && "please provide emal"}</Error>
                      <Input
                          placeholder='password'
                          {...register("password")}
                      />
                      <Error>{ errors?.password && "please provide password"}</Error>
                      <Input
                          placeholder='confirm Password'
                          {...register("confirm")}
                      />

                      <Error>{ errors?.confirm && "email did not match"}</Error>
                      

                      <ButtonHolder>
                          <Dbutton type="submit">
                              Sign Up
                          </Dbutton>
                          
                      </ButtonHolder>
                  </MainHolder>

              </InputHoleder>
              <Alread>
                  <Textdiv>
                      <Text>
                          Already have an Accont
                      </Text>
                      <Myclick
                          onClick={() =>
                          { 
                             navigate("/signin")
                      }}>
                          Log In
                      </Myclick>
                      
                  </Textdiv>
              </Alread>
              
          </MainCard>
          
    </Cobtainer>
  )
}

export default SignUp

const Error  = styled.div`
color:red;
margin-top:-5px;
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
  height:100%; 
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
height:auto;
margin-bottom:10px;
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
height:auto;
width:350px;
background-color:#fff0dd;
display:flex;
flex-direction:column;
padding-button:20px;

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