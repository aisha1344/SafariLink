import React from "react";
import Card from "../../temp/Card";
import CardReferce from "../../temp/CardReferce";
import cloud from "../../assets/images/cloud.jpg";
import csytem from "../../assets/images/communication.jpg"
import deviceM from "../../assets/images/RemoteDeviceManagement.jpg";
import sdwan from "../../assets/images/sdwann.jpg";


// import imagecard from ""
const ServiceCad = () => {
  
  return (
    <section className="py-8">
      <div>
            {/* i */}
            <Card title="Enterprise SD-WAN Solutions" discription="Experience unparalleled connectivity with our enterprise-level SD-WAN offerings. Leveraging Peplink's advanced technologies, we deliver robust and secure networking solutions tailored to your organization's needs. Say goodbye to downtime and hello to uninterrupted productivity." 
            image={sdwan} 
            link={"/services/sd-wan"}
            className="service-card"
            data-service="sd-wan"
            />
            
            <CardReferce
            title="Cloud Managed WIFI"
            discription="Unlock the full potential of the cloud with SafariLink ISP's comprehensive Cloud Solutions. As an Amazon AWS partner, we provide end-to-end cloud services, including basic hosting, Disaster Recovery solutions, and complete migrations. Let us guide you through every stage of your cloud journey."
            image={cloud}
            link={"/services/cloud"}
            className="service-card"
            data-service="cloud"
            />

            <Card 
            title="Mobile Routers Solutions"
            discription="Stay connected and informed with our mission-critical communication systems. From secure messaging platforms to real-time collaboration tools, we offer solutions designed to keep your team connected, no matter where they are."
            link="/services/missioncritical"
            image= {csytem}
            className="service-card"
            data-service="missioncritical"
            />
            <CardReferce
            title="SOHO Routers"
            discription="Take control of your devices from anywhere in the world with our remote device management solutions. Whether you need to monitor, troubleshoot, or update your devices, our intuitive platforms make it easy to manage your infrastructure with confidence."
            image={deviceM}
            link={"/services/remote-devices"}
            className="service-card"
            data-service="remote-devices"
            />
            
      </div>
    </section>
  );
};

export default ServiceCad;
