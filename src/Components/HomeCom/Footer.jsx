import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
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
    <footer className="bg-[#01241F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-6">SafariLink ISP</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              SafariLink ISP is a leading technology company that offers a wide
              range of innovative solutions for businesses and individuals
              alike.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {[
                { icon: <FaFacebook />, link: "https://www.facebook.com/share/sTGFb2gYx91yvimn/" },
                { icon: <FaSquareXTwitter />, link: "#" },
                { icon: <BsWhatsapp />, link: "https://wa.link/undjsw" },
                { icon: <IoLogoLinkedin />, link: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="text-gray-300 hover:text-white text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <IoLocationSharp className="text-3xl text-secondary" />
                <span className="text-gray-300 text-lg">Taleex street, Mugdisho, Somalia</span>
              </div>
              <Link to="https://wa.link/undjsw" className="flex items-center space-x-4 text-gray-300 hover:text-white">
                <BiPhone className="text-3xl text-secondary" />
                <span className="text-lg">+252 61 100 6835</span>
              </Link>
              <div className="flex items-center space-x-4">
                <MdEmail className="text-3xl text-secondary" />
                <span className="text-gray-300 text-lg">info@safarilink.so</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full h-40 px-5 py-4 bg-white/10 text-white text-lg placeholder-gray-400 
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <motion.button
                type="submit"
                className="w-full py-4 px-6 bg-secondary text-white text-lg rounded-lg 
                  hover:bg-secondary/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-12"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p className="text-lg">© 2024 <Link to="https://spondias.com" className="text-secondary hover:text-white">Spondias</Link>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
