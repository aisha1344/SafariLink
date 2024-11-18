import { BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Info = () => {
  // Contact data
  const contactInfo = {
    email: "info@safarilink.so",
    location: "Taleex Street, Hodan District, Mogadishu, Somalia",
  };

  // Social media data
  const socialLinks = [
    { icon: FaFacebook, link: "https://facebook.com/safarilink" },
    { icon: BsTwitterX, link: "https://twitter.com/safarilink" },
    { icon: BsInstagram, link: "https://instagram.com/safarilink" },
    { icon: BsWhatsapp, link: "https://wa.me/252XXXXXXXX" }
  ];

  return (
    <section className="bg-gradient-to-r from-[#01241F] via-[#023028] to-[#01241F] py-2 text-white">
      <div className="container mx-auto flex justify-between items-center h-10  px-4">
        {/* Left Side - Contact Info */}
        <div className="flex items-center space-x-8">
          <Link
            to={`mailto:${contactInfo.email}`}
            className="flex items-center hover:text-secondary transition-all duration-300 text-xl"
          >
            <MdEmail size={25} className="text-secondary  mr-2" />
            {contactInfo.email}
          </Link>

          <div className="hidden md:flex items-center text-xl">
            <IoLocationSharp size={25} className="text-secondary  mr-2" />
            {contactInfo.location}
          </div>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              className="hover:text-secondary transition-all duration-300"
            >
              <social.icon size={25} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
