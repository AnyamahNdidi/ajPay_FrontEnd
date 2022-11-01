import React from 'react'
import styled from "styled-components"
import pic from "./23.jpg"
import { Link, NavLink } from "react-router-dom"
import { AiFillHome } from 'react-icons/ai';
import {SideBarItem }from "./RouterSide"


function Sidebar() {
  return (
      <Container>
          <UserHold>
              <ImgHold src={pic } />
              <Deatail>
                  <Dame>
                      Edwin Rams 
                  </Dame>
                  <Demail>
                      @edwinadmin
                  </Demail>
                      
               </Deatail>

          </UserHold>

           <MyAcct>
                  <Balance>
                      ₦0.00
                  </Balance>
                  <ConAc>
                      Account Balance
                  </ConAc>
          </MyAcct>

          <ConNav>
              {
                  SideBarItem.map((props, index) => (
                      <NavLink to={props.to}
                          style={({isActive}) =>
                          {
                              return {
                              color: isActive ? "black" : "#FF9505",
                              textDecoration: isActive ? "none" : " none",
                              backgroundColor: isActive ? "#FF9505" : "red",
                                                          
                            };
                        }}
                      >
                          
                  <Navv >
                  <Icont>
                     {props.icon(props)}
                  </Icont>
                  <IconCont>
                     {props.name}
                  </IconCont>
                 
               </Navv>
              </NavLink>
                  ))
              }
            
           
              
              
          </ConNav>
          
          
    </Container>
  )
}

export default Sidebar

const Icont = styled.div`
margin-left:10px;
margin-top:5px;
`
const IconCont = styled.div`
font-weight: 600;
margin-left:18px;
`

const Navv = styled.div`
width:100%;
height:50px;

text-decoration:none;
display:flex;

align-items:center;
cursor:pointer;
transition:all 350ms;
border-bottom:1px solid #ffcf8f;   

:hover{
    background-color: #FF9505;
    color:white;
    transform:scale(1.0);
    border-radius:5px;
}


`

const ConNav = styled.div`
width:90%;
height:400px;

margin-top:20px;
`

const Balance = styled.div`
width:90%;
font-weight:700;

`
const ConAc = styled.div`
width:90%;
font-weight:700;
`
const MyAcct = styled.div`
margin-top:15px;
line-height:17px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

const Dame = styled.div`
font-weight:600;
`
const Demail = styled.div`
font-weight:550;
font-size:15px;
`

const ImgHold = styled.img`
 width:50px;
 height:50px;
 border-radius:50%;
 background-color:pink;
`

const Deatail = styled.div`
height:50px;
width:120px;
display:flex;
flex-direction:column;

line-height:19px;
justify-content: center;


`
const UserHold = styled.div`
width:100%;
height:80px;

display:flex;   
align-items: center;
justify-content: space-around;

`

const Container = styled.div`
width:200px;
min-height:calc(100vh - 60px);
background-color:#ffe0b6;
position : fixed;
display:flex;
flex-direction:column;
align-items:center;           
`