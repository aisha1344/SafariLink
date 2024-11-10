import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const HeroNav = () => {
  return (
    <section className='overflow-hidden  sm:h-screen'>
      <NavBar/>
      <Hero/>
    </section>
  )
}

export default HeroNav
