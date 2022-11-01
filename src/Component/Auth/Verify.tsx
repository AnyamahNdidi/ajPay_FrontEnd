import React from 'react' 
import styled from "styled-components"

function Verify() {
  return (
    <Cobtainer>
      <MainCard>
        <Dmain>
          <HoldrImag src="https://firebasestorage.googleapis.com/v0/b/qlink-e70a3.appspot.com/o/istockphoto-1357207733-612x612-removebg-preview.png?alt=media&token=2c7f661b-fde1-4e5d-a7a4-2e75f92f1691" />
          <DText>Verify your mail address</DText>
          <Details>You've enter <span>admin@ajwallet.com</span> as the email address
               plese verify the email address by clicking the button below
          </Details>
          <Buttonmy>
            Click Here
          </Buttonmy>
          <Orcopy>
            or copy and paste this link into your browser
          </Orcopy>
          <Orcopy1>
            http://localhost:3000/verify
          </Orcopy1>
         </Dmain>
      </MainCard>
    </Cobtainer>
  )
}

export default Verify

const Orcopy1 = styled.div`
width:100%;
margin-top:10px;
text-align:center;
font-weight:800;
`
const Orcopy = styled.div`
width:100%;
margin-top:70px;
text-align:center;
font-weight:800;
`

const Buttonmy = styled.div`
width:200px;
height:60px;
margin-top:20px;
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

const Details = styled.div`
   text-align: center;
   width:100%;
   font-weight:600;
   margin-top:20px;

   span{
    font-weight:900;
    font-size:20px;
   }
   
`

const DText = styled.div`
 font-weight: 800;
 font-size:30px;
`

const HoldrImag = styled.img`
 width:200px;
 height:150px;

 object-fit:cover;
`

const Dmain = styled.div`
 width:85%;
 padding:20px;
 padding-bottom:50px;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;


 @media screen and (max-width: 600px) {
     width:90%;
    }


`

const MainCard = styled.div`
height:600px;
width:600px;
background-color:#fff0dd;
display:flex;
justify-content:center;
align-items:center;

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