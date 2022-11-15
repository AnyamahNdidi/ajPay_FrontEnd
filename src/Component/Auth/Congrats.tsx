import React from 'react'
import styled from 'styled-components'
import pic from "./gi.png"
import pic2 from "./3.png"
import GlobalButto from './GlobalButto'
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const Congrats = () =>
{
  const { id } = useParams()
  const url:string = `http://localhost:5050`
  
  const verifyUser = async () =>
  {
    await axios.get(`${url}/api/user/${id}`)
  }

  React.useEffect(() =>
  {
    verifyUser()
  },[])
  return (
      <Cobtainer>
          <MainCard>
        <Image src={pic} />
        <Dark>
          
        </Dark>
        <Content>
          <MyconImage src={pic2} />
          <Title>Welcome on board!</Title>
          <Contentli>Congratulations your email has been verify</Contentli>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <GlobalButto title="Continue" wt="200px" bbr="10px" />
            </Link>
        </Content>
          </MainCard>  
     </Cobtainer>
  )
}

export default Congrats

const Title = styled.div`

`

const Contentli = styled.div`
margin-bottom:5px;
`

const MyconImage = styled.img`
  width:200px;
  height:190px;
  object-fit: contain;
`

const Content = styled.div`
position:absolute;
top:0;
width:100%;
height:100%;

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

const Dark = styled.div`

position:absolute;
top:0;
width:100%;
height:100%;
border-radius:10px;

`

const Image = styled.img`
 position: absolute;
 width: 100%;
 height: 100%;
 top:0;
 object-fit: cover;
 border-radius:10px;
`






const MainCard = styled.div`
height:350px;
width:500px;
background-color:#fff0dd;
position:relative;
border-radius:10px;

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