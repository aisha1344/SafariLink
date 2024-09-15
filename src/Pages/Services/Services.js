import React from 'react'
import ServicesCom from '../../Components/ServicesCom/ServicesCom'
import NavBar from '../../Components/HomeCom/NavBar'
import ServiceCad from '../../Components/ServicesCom/ServiceCad'
import Join from '../../Components/HomeCom/Join'
import Footer from '../../Components/HomeCom/Footer'

const Services = () => {
  return (
    <div className='overflow-hidden'>
      <NavBar/>
      <ServicesCom/>
      <ServiceCad/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default Services
