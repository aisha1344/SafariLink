import { BiHealth } from "react-icons/bi";


// links

import { FaAws } from "react-icons/fa6";
import { GiSolarSystem, GiWorld } from "react-icons/gi";
import { RiRemoteControlFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { MdCarRepair, MdOutlinePrecisionManufacturing } from "react-icons/md";

export const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/services",
    title: "Services",
    dropdown: true,
    subLinks: [
      { title: "Network Solutions", link: "/services#network" },
      { title: "Cloud Services", link: "/services#cloud" },
      { title: "Security Services", link: "/services#security" },
      { title: "Managed Services", link: "/services#managed" },
    ]
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

export const services = [
  {
    icons: <GiWorld />,
    title: "Enterprise Routers",
    discription:
      "Designed for enterprise networks, and stays connected even if a WAN link breaks. Equipped with a wide range of load balancing algorithms to handle any situation.",
  },
  {
    icons: <FaAws />,
    title: "Enterprise Mobility",
    discription:
      "Powerful cellular routers that provide unbreakable connectivity and blazing speeds. Use them to connect to all available network operators in your country.",
  },
  {
    icons: <GiSolarSystem />,
    title: "Mobile Routers ",
    discription:
      "Sturdy mobile routers/ cellular routers that deliver excellent value. Use these as your primary or backup routers, providing seamless connectivity wherever you go.",
  },

  {
    icons: <RiRemoteControlFill />,
    title: "SOHO Routers ",
    discription:
      "Enterprise-grade routing features and network security, priced for everyone. Designed especially for the Small Office/ Home Office - SOHO routers.",
  },
];



// indusry data
export const indusry = [
  {
    icons: <BiHealth className="mb-4 "/>,
    title: "Healthcare",
    discription:
      "Monitor medical devices and equipment remotely, ensuring patient safety and compliance.",
  },
  {
    icons: <GrTechnology className="mb-4 "/>,
    title: "Technology",
    discription:
      "Simplify device management across your organization's IT infrastructure.",
  },
  {
    icons: <MdOutlinePrecisionManufacturing className="mb-4 "/>,
    title: "Manufacturing",
    discription:
      "Keep production lines running smoothly with remote monitoring and troubleshooting capabilities.",
  },

  {
    icons: <MdCarRepair />,
    title: "Retail ",
    discription:
      "Automate inventory management, reduce costs, and improve customer experience with our retail solutions.",
  },
];