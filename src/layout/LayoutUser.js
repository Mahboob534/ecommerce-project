import React from 'react'
import HeaderUser from './Header/HeaderUser'
import Footer from './Footer/Footer'

export default function LayoutUser({children}) {
  return (
  <>
   <HeaderUser/>
    {children}
    <Footer/>
  </>
   
  )
}
