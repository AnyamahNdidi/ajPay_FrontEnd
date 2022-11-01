import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Navigate>
          <Line />
          <Nav>
            <Span to="/">  Home</Span>
          </Nav>
          <Nav>
            <Span to="/about"> About</Span>
          </Nav>
          <Nav>
            <Span to="/portal">  Portal</Span>
          </Nav>
          <Nav>
            <Span to="/gallary">
              Gallary
            </Span>
          </Nav>
          <Space />

          
            <UserMenu>
             
              <ButtonLog
              
              >
                Log Out
              </ButtonLog>
            </UserMenu>
         
            <ButtonHolder>
             
            </ButtonHolder>
        
        </Navigate>
      </Wrapper>
    </Container>
  )
}

export default Sidebar

const UserMenu = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
`;

const AvatarText = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 5px;
  border: 1px solid white;
  background: darkorange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
`;

const Profile = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 5px;
  border: 1px solid white;
  object-fit: cover;
`;

const ButtonLog = styled.div`
  padding: 10px 50px;
  background-color: darkorange;
  transition: all 350ms;
  text-transform: uppercase;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const Button = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 700;
  padding: 10px 50px;
  background-color: darkorange;
  transition: all 350ms;
  text-transform: uppercase;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Space = styled.div`
  flex: 1;
`;

const Span = styled(Link)`
  text-decoration: none;
  color: white;
  padding-left: 20px;
  transition: all 350ms;
  transform: scale(1);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  :hover {
    transform: scale(1.5);
    cursor: pointer;
    color: darkorange;
  }
`;

const Line = styled.div`
  border-top: 1px solid silver;
`;

const Nav = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid silver;
  text-decoration: none;
  color: white;
  transition: all 350ms;
  span {
    padding-left: 20px;
    transition: all 350ms;
    transform: scale(1);
    text-transform: uppercase;
  }
  :hover {
    span {
      transform: scale(1.5);
      cursor: pointer;
      color: darkorange;
    }
  }
`;

const Navigate = styled.div`
  /* padding-left: 50px; */
  width: 100%;
  flex-direction: column;
  display: flex;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 80%;
    height: 600px;
    left: 0;
    top: 70px;
    background: rgba(24, 23, 23, 0.81);
    border-radius: 0px 0 10px 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);
    border: 1px solid rgba(24, 23, 23, 0.2);
    overflow: hidden;
    position: fixed;
    z-index: 10;
  }
`;