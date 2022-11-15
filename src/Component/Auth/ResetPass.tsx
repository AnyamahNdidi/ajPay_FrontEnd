import React from 'react'
import styled from "styled-components"
import pic from "./dcon.png"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import Swal from 'sweetalert2'
import {useNavigate,useParams} from "react-router-dom"

function ResetPass()
{
  const navigation = useNavigate()
  const { id } = useParams()
  console.log("this is my id",id)

    const schema = yup.object().shape({

      password: yup.string().required("enter your email"),
      confirm: yup.string().oneOf([yup.ref("password"), null], "password don't match")
    })

    const {register, handleSubmit, formState:{errors},reset } = useForm({
        resolver: yupResolver(schema),
    })
    
    let url = "http://localhost:5050"

  const resetPassWord = handleSubmit(async(data) =>
  {
    console.log(data)
    const {password} = data
    try
    {
      await axios.post(`${url}/api/user/reset/${id}`, {password}).then((res) =>
      {
        console.log(res)
         Swal.fire(
                 'Good job!',
                'reset sucessful',
                'success'
            )

        
      })
    } catch (error)
    {
      console.log("something went wrong", error)
    }
  })

  return (
         <Cobtainer>
          <MainCard>
              <ImgForge src={pic}/>
              

        <ContentFor>
          <Myholder onSubmit={resetPassWord}>
                  <PassCon>
                    Change password
                 </PassCon>
              
            <InpuCo placeholder='New Password'
              
                               {...register("password")}
                      />
                      <Error>{ errors?.password && "please provide password"}</Error>
                      <Input
                          placeholder='confirm Password'
                          {...register("confirm")}
                      />

                      <Error>{ errors?.confirm && "password did not match"}</Error>
                      
            
                
          <ButtonCon>
             <Dbutton type='submit'>
                              Submit
                          </Dbutton>
            
                 </ButtonCon>
                
                  </Myholder>
              </ContentFor>
          </MainCard>  
     </Cobtainer>
  )
}

export default ResetPass

const Error  = styled.div`
color:red;
margin-top:-5px;
`

const Myholder = styled.form`
width:100%;
height:auto;
align-items:center;
display:flex;
flex-direction:column;
margin-top:20px;
`

const PassCon = styled.div`
width:100%;
height:auto;
font-size:20px;
font-weight:1000;
line-height:50px;

`
const DisPass = styled.div`
font-size:15px;
font-weight:700;
line-height:
`
const InpuCo = styled.input`
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
const ButtonCon = styled.div`
width:100%;
display:flex;
justify-content: flex-end;
height:45px;

`

const ImgForge = styled.img`
height:330px;
width:47%;
object-fit:cover;

@media screen and (max-width: 600px) {
     width:90%;
     margin-bottom:10px;
     height:350px;
    
    }
`
const ContentFor = styled.div`
height:330px;
width:47%;
display:flex;
justify-content:center;
align-items:center;







@media screen and (max-width: 600px) {
     width:90%;
     height:230px;
     justify-content:none;
    
    }
`

const Dbutton = styled.button`
  height:40px;
  width:120px;
  background-color: black;
  font-size:15px;
  font-weight:70450;
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


const MainHolder = styled.div`
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
height:280px;
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
height:330px;
width:680px;
background-color:#fff0dd;
display:flex;
flex-wrap:wrap;
border-radius:6px;
align-items: center;
justify-content:space-around;

@media screen and (max-width: 600px) {
     width:90%;
     height 600px; 
     padding-top:20px;
     padding-bottom:20px;
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

  @media screen and (max-width: 600px) {
   
     padding-top:20px;
     padding-bottom:5px;
    }
`