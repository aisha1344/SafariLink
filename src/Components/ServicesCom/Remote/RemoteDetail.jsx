import React from "react";
import { motion } from "framer-motion";
import remote from "../../../assets/images/remote.jpg";
import RemoteCards from "./RemoteCards";
import Industries from "../Industries";
import Choose from "./Choose";
import UserExperience from "./UserExperience";
import ServicesCom from "../ServicesCom";

const RemoteDetail = () => {
  return (
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
      }}
    >
      <ServicesCom tagline="EMPOWER YOUR BUSINESS WITH SafariLink ISP" highlightedText=" Remote Device Management Solutions"
      description="Take control of your devices from anywhere in the world with our intuitive platforms designed to streamline monitoring, troubleshooting, and updates."
      />
      <RemoteCards />
      <Industries />
      <Choose />
      <UserExperience />
    </motion.section>
  );
};

export default RemoteDetail;
