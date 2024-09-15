import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { BsArrowDown, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_62", "template_4", formData, "2jEf5kxVDitbeT0jW")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* About SafarLink ISP */}
          <motion.div
            className="p-6 md:py-8 md:px-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl text-primary mb-4">SafariLink ISP</h3>
            <p className="text-xl text-[#1a1a1a] mb-4">
              SafariLink ISP is a leading technology company that offers a wide
              range of innovative solutions for businesses and individuals
              alike.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-row items-center gap-4 text-2xl text-[#222222] mt-5 md:mb-16">
              <motion.a
                href="https://www.facebook.com/share/sTGFb2gYx91yvimn/"
                whileHover={{ scale: 1.2, color: "#3752a3" }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a href="" whileHover={{ scale: 1.2, color: "#3752a3" }}>
                <FaSquareXTwitter />
              </motion.a>
              <motion.a
                href="https://wa.link/undjsw"
                whileHover={{ scale: 1.2, color: "#3752a3" }}
              >
                <BsWhatsapp />
              </motion.a>
              <motion.a href="" whileHover={{ scale: 1.2, color: "#3752a3" }}>
                <IoLogoLinkedin />
              </motion.a>
            </div>
          </motion.div>
          {/* Location, Phone, and Email */}
          <motion.div
            className="p-6 md:py-8 md:px-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl flex justify-stretch gap-4 text-primary mb-6">
              Location <BsArrowDown className="text-secondary" />
            </h2>
            <h4 className="text-xl mb-6 flex flex-row items-center gap-4">
              <span className="text-4xl text-primary">
                <IoLocationSharp />
              </span>
              Taleex street
              <br />
              Mugdisho, Somalia
            </h4>

            <Link
              to="https://wa.link/undjsw"
              className="text-xl mb-6 flex flex-row items-center gap-4"
            >
              <span className="text-4xl text-primary">
                <BiPhone />
              </span>
              +252 61 100 6835
            </Link>

            <h4 className="text-xl flex flex-row items-center gap-4">
              <span className="text-4xl text-primary">
                <MdEmail />
              </span>
              info@safarilink.so
            </h4>
          </motion.div>
        </div>

        {/* Contact Us Form */}
        <motion.div
          className="p-6 md:py-8 md:px-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl text-primary mb-4">Contact Us</h3>
          <p className="text-[1.3rem] text-[#0c0c0c] mb-4">
            We are always open to discuss your project and help you succeed.
          </p>
          <div className="flex flex-col">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              className="bg-[#ebe9e9] mb-6 py-2 px-4 w-3xl h-56 text-[#161616] text-xl border-none outline-none"
            />
            <motion.button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#3752a3] to-[#096976] w-full py-3 px-6 rounded-lg text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Line */}
      <motion.div
        className="bg-[#5c5c5c] h-[.1rem] mb-4 mx-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>

      {/* Footer Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <p className="text-[1rem] md:text-xl text-[#383838] mb-4">
          © 2024{" "}
          <Link
            to="https://spondias.com"
            className="text-primary font-semibold"
          >
            Spondias{" "}
          </Link>{" "}
          All rights reserved.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
