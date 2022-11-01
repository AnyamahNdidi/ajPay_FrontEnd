import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Hearder = () =>
{
  const [toggled, setToggled] = React.useState(false);

  const onToggled = () => {
    setToggled(!toggled);
    };
    
 const Navigate = useNavigate()

  return (
      <Cobtainer>
          <Wrapper>
              <LogoCon>
                  <Logomy>
                      ajWallet
                  </Logomy>
                  <Personal>
                      PERSONAL 
                  </Personal>
                  <Bussin>
                      BUSINESS
                  </Bussin>
                  
                  
              </LogoCon>

              <WrapperNav>
                
                  <HolderNav to = "/" style={{color:"#fff0dd"}}>
                      Landing
                  </HolderNav>
                  <HolderNav to = "/" style={{color:"#fff0dd"}}>
                      Account
                  </HolderNav>
                  <HolderNav to = "/" style={{color:"#fff0dd"}}>
                      Product
                  </HolderNav >
                  <HolderNav to = "/" style={{color:"#fff0dd"}}>
                      Company
                  </HolderNav>
                  <HolderNav to = "/" style={{color:"#fff0dd"}}>
                      Help
                  </HolderNav>
                    
                  <ButtonCon>
                      <Mainbutton
                          onClick={() =>
                          {
                              Navigate("/signup")
                      }}
                      >
                          Get Started
                      </Mainbutton>
                   
              </ButtonCon>
                  
              </WrapperNav>

            
              
          </Wrapper>
      </Cobtainer>
  )
}

export default Hearder

const Mainbutton = styled.div`
 height:50px;
 width:100px;
 background-color: black;
 color: white;
 display:flex;
 justify-content: center;
 align-items: center;
 border-radius:10px;

  cursor:pointer;
  transition:all 350ms;

  :hover{
    cursor:pointer;
    transform:scale(1.1);
    background-color:#190e00;
  }

`

const ButtonCon = styled.div`
   height:100%;
   width:100px;
   display:flex;
   justify-content: center;
   align-items  : center;

`

const HolderNav = styled(Link)`
  text-decoration: none;
`
const WrapperNav = styled.div`
  width:500px;
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color:white;
  font-weight:700;
  font-size:11px;
  cursor:pointer;
  

  ::hover{
    color:red;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }

`

const Logomy = styled.div`
  height:100%;
  width:100px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:#fff0dd;
  font-weight:900;
  font-size:27px;
  

`
const Personal = styled.div`
  height:100%;
  width:50px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:#fff0dd;
  font-weight:700;
  font-size:11px;
  cursor:pointer;
  :hover{
    color:#ffc77b;
  }

   @media screen and (max-width: 600px) {
    display: none;
  }
 
`
const Bussin = styled.div`
  height:100%;
  width:50px;
  display:flex;
  justify-content: center;
  align-items: center;

    color:#fff0dd;
  font-weight:700;
  font-size:11px;
  cursor:pointer;

  :hover{
    color:#ffc77b;
  }

   @media screen and (max-width: 600px) {
    display: none;
  }
`

const LogoCon = styled.div`
  
   width:230px;
   height:100%;
   display:flex;
   justify-content: space-between;
`

const Cobtainer = styled.div`
height:60px;
width:100%;
background-color:#ff9505;
display:flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
  width:90%;
  height:100%;

  display:flex;
  justify-content: space-between;
`