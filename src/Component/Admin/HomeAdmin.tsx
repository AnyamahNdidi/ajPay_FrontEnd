import React from 'react'
import styled from "styled-components"
import { TransData } from "./TransferData"

interface Iprops
{
  cl: string;
}

const HomeAdmin:React.FC<Iprops>  = ({cl}) => {
  return (
      <Container>
      <Wrapper>
        <Title>
            Transactions
        </Title>
            
        <ShowFrom>
          <span>From</span>
           
          <Selection>
            <Options>23 october 2022</Options>
            <Options>28 october 2022</Options>
            <Options>29 october 2022</Options>
            <Options>20 october 2022</Options>
          </Selection>
           to &nbsp; &nbsp;
          <Selection>
            <Options>1  November 2022</Options>
            <Options>2 November 2022</Options>
            <Options>3 November 2022</Options>
            <Options>4 November 2022</Options>
          </Selection>
          
        </ShowFrom> 
        
        <TableHolder>
          <Table>
            <Tr>
              <Th >Date</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Name</Th>
              <Th>Amount</Th>
            </Tr>
             {
              TransData.map((props) => (
                     <Tr>
              <Td>
                <MyDate>
                  {props.date}
                </MyDate>
              </Td>
              <Td>
                <MuBankName>
                  <BankName>
                    Aj Wallet Bank
                  </BankName>
                  <Description>
                        {
                          props.desc
                     }
                  </Description>
                </MuBankName>

              </Td>
              <Td>
                <Type>
                   {props.tranType}
                </Type>
              </Td>
              <Td>
                <PersonName>
                   {props.name}
                </PersonName>
              </Td>
                  <Td>
                    {
                      props.tranType === "credit" ?
                         <Monney cl="green">
                 +₦{props.amount}
                        </Monney> :
                  <Monney cl="red">
                 -₦{props.amount}
                </Monney>
                    }
               
              </Td>
            </Tr>

                ))
              }
         
          </Table>
        </TableHolder>

        
      </Wrapper>
    </Container>
  )
}

export default HomeAdmin

const Monney = styled.div<{cl:string}>`
color:${({cl})=>cl};
font-weight:700;

`

const PersonName = styled.div`
width:150px;
height:30px;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
font-weight:700;
`

const Type = styled.div`
font-weight:700;

`

const BankName = styled.div`
font-weight:700;
font-size:17px;
`
const Description = styled.div`
width:150px;
height:30px;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
`
const MuBankName = styled.div`
  width:100%;
  height:100%;

`

const MyDate = styled.div`
  width:auto;
  height:50px;
  display:flex;
  font-weight:bold;
  align-items:center;
`

const TableHolder = styled.div`
overflow-x:auto;
margin-top:30px;
`

const Table = styled.table`
border:1px solid #ffe8c9;

border-collapse: collapse;

`
const Tr = styled.tr`

`
const Th = styled.th`
padding-right:140px;
width:auto;

height: 50px;
padding-left:10px;


`
const Td = styled.td`

border-top:1px solid #ffe8c9;

width:auto;
padding-left:10px;
height: 50px;
`

const Selection = styled.select`
margin-right:20px;
padding:8px;
border:1px solid #FF9505;
border-radius:20px;

color: #FF9505;
font-weight:500;

:focus{
 border:1px solid #FF9505;
 outline:none;
}
`
const Options = styled.option`
color: #FF9505;
font-weight:500;
`

const ShowFrom = styled.div`

span{
  margin-right:30px;
  font-weight:600;

}
`

const Title = styled.div`
width:100%;
height:50px;
font-weight:600;
font-size:20px;
`

const Wrapper = styled.div`
  width: 90%;
  height:570px;
  display:flex;
 
 
  flex-direction:column;
`

const Container = styled.div`
min-width:calc(100vw - 200px);
min-height:calc(100vh - 60px);
background-color:#fff9f0;
display:flex;
justify-content:center;
align-items:center;

`