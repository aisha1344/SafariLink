import React from 'react';
import WhoWeAre from './WhoWeAre'
import WhatWeOffer from './WhatWeOffer'
import Features from './Features'
import Join from './Join'
import Footer from './Footer'
import HeroNav from './HeroNav'
import Partnership from './Paterns';

const MainHome = () => {
  return (
    <div className='overflow-hidden'>
      <HeroNav/>
      <WhoWeAre/>
      <WhatWeOffer/>
      <Features/>
      <Join/>
      <Partnership/>
      <Footer/>
    </div>
  )
}

export default MainHome
