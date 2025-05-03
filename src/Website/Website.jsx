import React from 'react'
import { Outlet } from 'react-router'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Aside from './Layout/Aside'
import { Container } from '@mui/material'


function Website() {
  return (
    <>
    <Header/>
    <Aside/>
    {/* <Container> */}
        <Outlet/>
    {/* </Container> */}
    <Footer/>
   </>
  )
}

export default Website
