import React from 'react'
import styled from 'styled-components'
import pic from "./wallimg.png"
import Header from "../Header/Hearder"
import GlobalButto from "../Auth/GlobalButto"

const Landing = () => {
    return (
      <>
      <Header/>
      <Cobtainer>
          <Con1>
              <BoxHoler>
                  <TextCon>
                      Maximise your money with Ajwallet
                  </TextCon>
                  <Deatails>
                      Put money aside effortlessly for the things you want with value
                  </Deatails>
                  <Inputhold>
                      <Input1
                          placeholder='+234'
                      >
                      </Input1>
                      <Input2
                          placeholder='phone number'
                      >
                      </Input2>
                      <DbuttonCon>
                          <GetHolder>
                              <GlobalButto wt="200px" bbr="6px" title='Get Started'/>
                          </GetHolder>
                      </DbuttonCon>
                      
                  </Inputhold>
                  <StarHold>
                      Download Our App rated 5 start by +1M people
                  </StarHold>
             </BoxHoler>
              
          </Con1>
          
          <Con2>
              <ImgHolder src={pic} />
          </Con2>
            </Cobtainer>
            </>
  )
}

export default Landing

const ImgHolder = styled.img`
  height:500px;
  width:85%;
  object-fit: cover;
 
  @media screen and (max-width: 600px) {
    width:300px;
    height:400px;
  }
`
const GetHolder = styled.div`
background-color:black;
display:flex;
justify-content:center;
align-items:center;
color:white;
width:100%;
height:100%;
border-radius:10px; 
cursor: pointer;   
`

const Input1 = styled.input`
width:100px;
background-color:#ff9505;
border:none;
border-bottom:1px solid #ffae40;
color:white;

::placeholder { 
  color: #ffae40;
  
}

:focus{
    outline: none 
  
}

@media screen and (max-width: 600px) {
   height:30px;
    margin-bottom:10px;
    width:290px;
  }

`
const Input2 = styled.input`
width:280px;
background-color:#ff9505;
border:none;
border-bottom:1px solid #ffae40;

color:white;

::placeholder { 
  color: #ffae40;
  
}

:focus{
    outline: none 
  
}

@media screen and (max-width: 600px) {
    height:30px;
    margin-bottom:10px;
    width:290px;
  }
`
const DbuttonCon = styled.div`
width:120px;
height:100%;
display:flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 600px) {
    display:flex;
justify-content: none;
align-items: none;

  }
`

const TextCon = styled.div`
width:100%;
font-size:50px;
color:#fff0dd;
line-height:60px;
font-weight:700;

@media screen and (max-width: 600px) {
    font-size:25px;
    line-height:30px;
    font-weight:700;
  }
`
const Deatails = styled.div`
width:100%;
font-size:18px;
color:#fff0dd;
margin-top:10px;
font-weight:700;

@media screen and (max-width: 600px) {
    font-size:13px;
    line-height:15px;
    font-weight:700;
  }
`
const Inputhold = styled.div`
width:100%;
margin-top:10px;
height:50px;
display:flex;
flex-wrap: wrap;
justify-content:space-between;



@media screen and (max-width: 600px) {
    height:auto;
    
    
    

  }
`
const StarHold = styled.div`
width:100%;
font-size:18px;
color:#ffc77b;
margin-top:10px;
font-weight:700;

@media screen and (max-width: 600px) {
    font-size:13px;
    line-height:15px;
    font-weight:700;
  }
`

const BoxHoler = styled.div`
  width:82%;
  height:350px;
  
  margin-top:100px;

  @media screen and (max-width: 600px) {
    width:90%;
    margin-top:0px;
  }
`

const Con1 = styled.div`
  width:50%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;

 
  
  @media screen and (max-width: 600px) {
    
    width:100%;
    
  }
`
const Con2 = styled.div`
  width:50%;
  height:100%;
 
  display:flex;
 
  align-items: flex-end;
 

  @media screen and (max-width: 600px) {
    
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`

const Cobtainer = styled.div`
  width:100%;
 
  min-height:calc(100vh - 60px) ;
  background-color:#ff9505;
  display:flex;
  flex-wrap:wrap;

  @media screen and (max-width: 600px) {
     width:100%;
     

  }
`