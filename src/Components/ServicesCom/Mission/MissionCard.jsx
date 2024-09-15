import React from 'react'

const MissionCard = () => {
  return (
    <section className='bg-[#181818] py-16 text-white'>
      <div className='container m-auto grid grid-cols-1 md:grid-cols-2 px-7 sm:px-12'>
        <div className='py-8 md:p-8 '>
            <h3 className='text-white text-2xl md:text-4xl mb-4'>SafarILink ISP</h3>
            <h4 className='text-4xl mb-4 text-[#e4e4e4]'>Connect with Confidence </h4>
            <p className='text-gray-200 mb-6 text-xl font-sans font-light'>
            SafariLink ISP is dedicated to delivering a diverse range of cutting-edge ISP solutions that cater to the unique needs of our clients. We achieve this through continuous innovation, fostering strong partnerships, and providing exceptional customer service. We strive to bridge the digital divide in Africa and contribute to a more connected and empowered future.
            </p>
        </div>
        <div className='p-5 sm:p-8'>
            <img src="https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-3.png?w=500&ssl=1" alt="" />
        </div>
      </div>
    </section>
  )
}

export default MissionCard
