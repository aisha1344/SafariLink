import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import ContactUs from './ContactUs/ContactUs'
import CloudDeatail from '../Components/ServicesCom/Cloud/CloudDeatail'
import MissionDeatail from '../Components/ServicesCom/Mission/MissionDetail'
import RemoteDetail from '../Components/ServicesCom/Remote/RemoteDetail'
import SDWANDetail from '../Components/ServicesCom/SDWAN/SDWANDetail'
import ScrollToTop from './ScroolTop'


const Page = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/services/sd-wan' element={<SDWANDetail />} />
            <Route path='/services/cloud' element={<CloudDeatail />} />
            <Route path='/services/missioncritical' element={<MissionDeatail />} />
            <Route path='/services/remote-devices' element={<RemoteDetail />} />
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Page
