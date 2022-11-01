import React from 'react'
import styled from 'styled-components'
import { useNavigate} from "react-router-dom"

function SignUp()
{
    const navigation = useNavigate()
  return (
      <Cobtainer>
          <MainCard>
              <LogoHolder>
                  ajWallet
              </LogoHolder>
              <InputHoleder>
                  <MainHolder>
                      <Input
                          placeholder='Full Name'
                      />
                      <Input
                          placeholder='User Name'
                      />
                      <Input
                          placeholder='E-mail'
                      />
                      <Input
                          placeholder='password'
                      />
                      

                      <ButtonHolder>
                          <Dbutton>
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
                              navigation("/signin")
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

const Dbutton = styled.div`
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
height:400px;
width:350px;
background-color:#fff0dd;
display:flex;
flex-direction:column;

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