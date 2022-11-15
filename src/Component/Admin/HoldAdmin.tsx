import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from 'styled-components'
import AccounDe from './AccounDe'
import AdminHeader from './AdminHeader'
import HomeAdmin from './HomeAdmin'
import Notifications from './Notifications'
import Sidebar from './Sidebar'
import Trans from './Trans'

function HoldAdmin() {
  return (
      <>
      
              <AdminHeader />
              <Sidebar/>
        
          <Container>
              <Routes>
                  <Route path='/' element = {<HomeAdmin  cl=""/>} />
                  <Route path='/account' element = {<AccounDe/>} />
                  <Route path='/trans' element = {<Trans/>} />
                  <Route path='/notifi' element = {<Notifications/>} />
              </Routes>
          </Container>
      </>
  )
}

export default HoldAdmin

const Container = styled.div`
display:flex;
justify-content:flex-end;
`