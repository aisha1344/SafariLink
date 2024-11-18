import React from "react";
import MissionCard from "./MissionCard";
import ContactCom from "./ContactCom";
import ServicesCom from "../ServicesCom";
import Offer from "./Offer";

const MissionDeatail = () => {
  return (
    <section className="">
      <ServicesCom
        tagline="EMPOWER YOUR BUSINESS WITH SAFARILINK ISP"
        highlightedText="Remote Device Management Solutions"
        discription="Unlock seamless, secure, and reliable communication with SafariLink ISP's Mission-Critical Communication Solutions. Powered by Peplink and IP Infusion technologies, our solutions are engineered to keep your critical communications running smoothly, even in the most challenging environments."
      />
      <MissionCard />
      <Offer/>
      <ContactCom />
    </section>
  );
};

export default MissionDeatail;
