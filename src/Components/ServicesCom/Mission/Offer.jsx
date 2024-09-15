import React from 'react'

const Offer = () => {
    const ways = [
        {
            title: "Unmatched Network",
            subTitle: "Never miss a beat with resilient networks designed to withstand disruptions and ensure continuous information flow."
        },
        {
            title: "Enhanced Security",
            subTitle: "Protect sensitive data with robust encryption and access controls, safeguarding your critical communication channels."
        },
        {
            title: "Real-Time",
            subTitle: "Foster efficient communication and decision-making among your teams, regardless of their location."
        },
        {
            title: "Scalability & Flexibility",
            subTitle: "Adapt to your evolving needs with solutions that scale seamlessly and integrate effortlessly with existing infrastructure."
        }
    ];

    return (
        <section className='py-4 sm:py-12 mt-10 bg-gray-100'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6'>
                {ways.map(({ title, subTitle }, index) => (
                    <div key={index} className='flex flex-col items-center text-center md:text-left md:px-9  p-6   hover:shadow-xl hover:bg-white transition-shadow duration-300'>
                        <div className='bg-gradient-to-r from-[#3752a331] to-[#0969763f] text-transparent bg-clip-text font-bold text-7xl md:text-[10rem] mb-4 md:pr-9'>
                            0{index + 1}
                        </div>
                       <div className='-mt-12 md:-mt-28'>
                       <h3 className='text-2xl  font-semibold text-gray-800 mb-3'>
                            {title}
                        </h3>
                        <p className='text-[#444] text-[1.2rem]'>
                            {subTitle}
                        </p>
                       </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offer;
