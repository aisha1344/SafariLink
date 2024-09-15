import React from "react";
import { motion } from "framer-motion";
import remote from "../../../assets/images/remote.jpg";
import NavBar from "../../HomeCom/NavBar";
import RemoteCards from "./RemoteCards";
import Industries from "../Industries";
import Choose from "./Choose";
import UserExperience from "./UserExperience";
import Join from "../../HomeCom/Join";
import Footer from "../../HomeCom/Footer";

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
      <NavBar />
      <div className="py-12  flex flex-col items-center text-center">
        <motion.h3
          className="text-xl text-[#666] mb-6 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EMPOWER YOUR BUSINESS WITH SafariLink ISP
        </motion.h3>

        <motion.h4
          className="bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text text-3xl sm:text-6xl md:text-8xl font-sans font-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Remote Device <br /> Management Solutions
        </motion.h4>

        <motion.p
          className="text-xl text-[#888] p-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Take control of your devices from anywhere in the world with our
          intuitive platforms designed to streamline monitoring,
          <br />
          troubleshooting, and updates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className="w-[40rem] mt-6" src={remote} alt="" />
        </motion.div>
      </div>

      <RemoteCards />
      <Industries />
      <Choose />
      <UserExperience />
      <Join />
      <Footer />
    </motion.section>
  );
};

export default RemoteDetail;
