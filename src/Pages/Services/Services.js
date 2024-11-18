import React, { useEffect } from 'react'
import ServicesCom from '../../Components/ServicesCom/ServicesCom'
import ServiceCad from '../../Components/ServicesCom/ServiceCad'

const Services = () => {
  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <ServicesCom tagline='SafariLink ISP' highlightedText='Cutting-edge connectivity solutions' description='Empower your business with cutting-edge connectivity solutions from SafariLink ISP. Our innovative services are tailored to meet the unique needs of businesses and communities across East Africa.'/>
      <ServiceCad/>
    </div>
  )
}

// " SafariLink ISP,Cutting-edge connectivity solutions ,Empower your business with cutting-edge connectivity solutions from SafariLink ISP. 
//             Our innovative services are tailored to meet the unique needs of businesses 
//             and communities across East Africa."

export default Services
