import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>                   {/*by using this we will be able to create a page with same fixed header and footer with changing content in the middle which will be done by outlet */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout