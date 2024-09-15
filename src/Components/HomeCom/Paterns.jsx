import React from 'react';

const Partnership = () => {
    const partners = [
        {
            id: 1,
            title: "Peplink",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8BX0Rjrb447ErC3narcMCDyfAO_hR4U5cw&s"
        },
        {
            id: 2,
            title: "Bitdefender",
            image: "https://www.businessdirectoryindia.in/media/442/small/bitdefender-logo.jpg?v=1"
        },
        {
            id: 3,
            title: "IP Infusion",
            image: "https://espalobi.sirv.com/ip00-featured-ipi-logo.jpg"
        },
        // {
        //     id: 4,
        //     title: "Ruckus",
        //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg58eH3r754v76ENudAWq0nR0l3DCOY4G9Cg&s"
        // },
        {
            id: 5,
            title: "Palo Alto",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB1SL4qd3Kueo9E8pNu_kzSPNF0Hg5y-9cQ&s"
        },
        {
            id: 6,
            title: "Brandefense",
            image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/089767d4-7271-44ce-82e4-8f1170bdd2a8.webp"
        },
        {
            id: 7,
            title: "AWS",
            image: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg"
        }
    ];

    return (
        <section className="container mx-auto grid grid-cols-3 md:grid-cols-3 items-center lg:grid-cols-6 gap-8 py-10 px-8">
            {partners.map(partner => (
                <div key={partner.id} className="text-center max-w-[150px] ">
                    <img 
                        src={partner.image} 
                        alt={partner.title} 
                        className="w-full h-32 object-contain rounded-lg" 
                    />
                </div>
            ))}
        </section>
    );
}

export default Partnership;
