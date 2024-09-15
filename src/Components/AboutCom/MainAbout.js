import React from 'react'
import AboutCom from './AboutCom'
import NavBar from '../HomeCom/NavBar'
import Ways from './Ways'
import OurVission from './OurVission'
import Join from '../HomeCom/Join'
import Footer from '../HomeCom/Footer'

const MainAbout = () => {
  return (
    <div className='overflow-hidden'>
      <NavBar/>
      <AboutCom/>
      <Ways/>
      <OurVission/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default MainAbout
