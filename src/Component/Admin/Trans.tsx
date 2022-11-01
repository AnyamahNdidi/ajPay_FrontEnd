import React from 'react'
import GlobalButto from '../Auth/GlobalButto'

import styled from 'styled-components'
import { matchRoutes } from 'react-router-dom'

function Trans()
{
  const [show, setShow] = React.useState<boolean>(false)
  return (
    <Container>
      <Wrapper>
        <Title>
          Transfer Found
        </Title>
        <Decs>
          Please Provide Account number Number
        </Decs>
        <ConHoLDER>
          <InpuCo placeholder='Account Number' />
         <GlobalButto title="Search" wt="150px" bbr="5px" />
          
        </ConHoLDER>

        {
          show ? (
            <div>
                <AccontHolder>
          
          <HolderDe>
             <Fisrt>Bank Name &nbsp;:</Fisrt>
             <Second>Aj Wallet Bank</Second>
          </HolderDe>
          <HolderDe>
             <Fisrt>Account Name &nbsp; :</Fisrt>
             <Second>Anyamah Edwin</Second>
          </HolderDe>
          <HolderDe>
             <Fisrt>Account Number &nbsp; :</Fisrt>
             <Second>039048754</Second>
          </HolderDe>
          <HolderDe1>
            <InpuCo1 placeholder='Amount' />
            <InpuCo1 placeholder='OTP' />
          </HolderDe1>

          <TextAres placeholder='Description' cols={3} />
          
         
         <GlobalButto title="Send" wt="150px" bbr="5px" />

        </AccontHolder>
            </div>) : (
              <AccontHolder1>
                Account Not Found ⚠️⚠️⚠️
              </AccontHolder1>)
        }

      </Wrapper>
          
    </Container>
  )
}

export default Trans

const AccontHolder1 = styled.div`
width:80%;
height:300px;
margin-top:15px;
padding-left:10px;
padding-right:10px;
display:flex;
font-weight:600;
font-size:20px;
align-items:center; 
justify-content:center;
color:#899499;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

`

const TextAres = styled.textarea`
margin-top:10px;
width:100%;
height:41px;
background-color:#ffe0b6;
border-radius:5px 5px 0px 0px;
border:none;
border-bottom:1px solid black;
padding-left:4px;
margin-bottom:5px;



:placeholder { 
  color: black;
}

:focus{
    outline: none 
  
}


`



const HolderDe1 = styled.div`
display:flex;
width:100%;
height:40px;
justify-content:space-between;
align-items:center;
margin-top:10px;


`


const InpuOtp = styled.input`
width:100px;
height:41px;
background-color:#ffe0b6;
border-radius:5px 5px 0px 0px;
border:none;
border-bottom:1px solid black;
padding-left:4px;
margin-bottom:5px;
margin-top:5px;


:placeholder { 
  color: black;
}

:focus{
    outline: none 
  
}
`
const InpuCo1 = styled.input`
width:47%;
height:35px;
background-color:#ffe0b6;
border-radius:5px 5px 0px 0px;
border:none;
border-bottom:1px solid black;
padding-left:4px;
margin-bottom:5px;
margin-top:5px;


:placeholder { 
  color: black;
}

:focus{
    outline: none 
  
}
`

const Fisrt = styled.div`
color:#899499;

`
const Second = styled.div`
font-weight:700;
color: black;
`

const HolderDe = styled.div`
display:flex;
width:100%;
height:40px;
justify-content:space-between;
align-items:center;
border-bottom:1px solid lightgray;


`

const AccontHolder = styled.div`
width:80%;
height:300px;
margin-top:15px;
padding-left:10px;
padding-right:10px;
display:flex;
flex-direction:column;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

`

const InpuCo = styled.input`
width:60%;
height:41px;
background-color:#ffe0b6;
border-radius:5px 5px 0px 0px;
border:none;
border-bottom:1px solid black;
padding-left:4px;
margin-bottom:18px;
margin-top:14px;


:placeholder { 
  color: black;
}

:focus{
    outline: none 
  
}
`

const ConHoLDER = styled.div`
 width:85%;
 height:70px;
 
 margin-top:10px;
 display:flex;
 justify-content:space-between;
 align-items:center;

 `

const Decs = styled.div`
 font-weight:600;
 font-size:15px;
 color:red;
`

const Title = styled.div`
margin-top:20px;
font-weight:700;
font-size:20PX;
`

const Wrapper = styled.div`
width:500px;
height:500px;
display:flex;
align-items: center;
flex-direction:column;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Container = styled.div`
min-width:calc(100vw - 200px);
min-height:calc(100vh - 60px);
display:flex;
justify-content:center;
background-color:#fff9f0;
align-items:center;
`