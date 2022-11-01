import React from 'react'
import styled from "styled-components"

interface Dprops
{
    title: string;
    wt: string;
    bbr: string;
}

const GlobalButto:React.FC<Dprops> = ({title, wt, bbr}) => {
  return (
      <Button wt={wt} bbr={bbr}>{title }</Button>
  )
}

export default GlobalButto

const Button = styled.div<{ wt: string; bbr:string }>`
  height:45px;
  width:${(props)=> props.wt};
  background-color: black;
   color:white;
  display: flex;
  justify-content: center;
  align-items:center;
  transition:all 350ms;
  border-radius:${(props)=> props.bbr};

  :hover{
    cursor:pointer;
    transform:scale(1.1);
    background-color:#190e00;
  }
`