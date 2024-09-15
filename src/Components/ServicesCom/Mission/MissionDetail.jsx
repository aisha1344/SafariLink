import React from 'react'
import MissionCard from './MissionCard'
import NavBar from '../../HomeCom/NavBar';
import MissionCom from './MissionCom';
import ContactCom from './ContactCom';
import Footer from '../../HomeCom/Footer';

const MissionDeatail = () => {
  return (
    <section className=''>
      <NavBar/>
      <div className='container m-auto text-center py-10 mt-28'>
        <h2 className='text-xl text-[#525252] mt-6'>EMPOWER YOUR BUSINESS WITH SAFARILINK ISP</h2>
        <h4 className='bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text mt-6 text-5xl md:text-7xl font-light'>Remote Device <br/>Management <br/>Solutions</h4>
        <p className='text-[1.1rem] text-[#797979] px-3 md:px-6 mt-6'>  Unlock seamless, secure, and reliable communication with SafariLink ISP's Mission-Critical Communication Solutions.<br/> Powered by Peplink and IP Infusion technologies, our solutions are engineered to keep <br/>your critical communications running smoothly, even in<br/> the most challenging environments.</p>
      </div>
      <MissionCard/>
      <MissionCom/>
      <ContactCom/>
      <Footer/>
    </section>
  )
}

export default MissionDeatail;
