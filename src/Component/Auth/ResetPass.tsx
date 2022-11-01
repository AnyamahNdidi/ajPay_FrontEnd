import React from 'react'
import styled from "styled-components"
import pic from "./dcon.png"

function ResetPass() {
  return (
         <Cobtainer>
          <MainCard>
              <ImgForge src={pic}>
              </ImgForge>

        <ContentFor>
          <Myholder>
                  <PassCon>
                    Change password
                 </PassCon>
                 
                 
                 
                     <InpuCo placeholder='New Password'/>
                     <InpuCo placeholder='confirm password'/>
            
            
                
          <ButtonCon>
             <Dbutton>
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


const Myholder = styled.div`
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
    
    }
`

const Dbutton = styled.div`
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
     height auto; 
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
`