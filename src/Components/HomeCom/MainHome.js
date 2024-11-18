import React from 'react';
import WhoWeAre from './WhoWeAre'
import WhatWeOffer from './WhatWeOffer'
import Features from './Features'
import Hero from './Hero';

const MainHome = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <WhoWeAre/>
      <WhatWeOffer/>
      <Features/>
    </div>
  )
}

export default MainHome
