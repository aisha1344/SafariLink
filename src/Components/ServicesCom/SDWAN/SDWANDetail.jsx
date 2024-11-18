import React from "react";
import { motion } from "framer-motion";
import Products from "../Products";
import SDWANCards from "./SDWANCards";
import ServicesCom from "../ServicesCom";

const SDWANDetail = () => {
  return (
    <>
      <section className="">
        <ServicesCom tagline='SafariLink ISP' highlightedText='Unbreakable Partnership' description='SafariLink ISP leverages Peplink devices to provide robust and scalable Enterprise-Level SD-WAN Solutions tailored to the needs of businesses across East Africa.'/>
        <Products />
        <SDWANCards />
        
      </section>
    </>
  );
};

export default SDWANDetail;
