// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <section className=" min-h-fit bg-gray-100 text-justify p-6 font-serif ">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center ">
//           Welcome to Our Electrical Contracting Services👨🏻‍🔧⚡
//         </h1>
//         <p className="text-base sm:text-lg text-gray-700 mb-6">
//           As a leading electrical contracting firm, we have the infrastructure
//           and expertise to execute large-scale electrical projects across Mumbai
//           and major metropolitan cities throughout India. With over 15 years of
//           industry experience, we have built a strong reputation by
//           collaborating with top-tier electrical contractors, renowned
//           architects, and internationally recognized electrical consultants.
//         </p>
//         <p className="text-base sm:text-lg text-gray-700 mb-6">
//           Our Expertise We specialize in a broad spectrum of services, ranging
//           from high and low voltage infrastructure development to power
//           upgradation and downstream power distribution. Our projects include
//           the implementation of comprehensive solutions that integrate computer
//           networks, data and voice systems, fire safety, access control,
//           surveillance, and security systems.
//         </p>
//         <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
//           Our vast experience, combined with a commitment to excellence, allows
//           us to consistently deliver successful projects for clients in diverse
//           industries. Whether it's upgrading power systems or implementing
//           complex electrical infrastructure, we ensure that our clients receive
//           the highest level of service and quality.
//         </p>
//         <Link
//           to="/contact"
//           className="bg-gray-700  text-white flex items-center w-48 m-auto justify-center px-4 py-2 rounded-full shadow-md hover:bg-gray-800 font-semibold"
//         >
//           {" "}
//           Connect 🤝
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import {
  FaBolt,
  FaTools,
  FaLightbulb,
  FaProjectDiagram,
  FaNetworkWired,
  FaFire,
  FaLock,
  FaVideo,
  FaShieldAlt,
  FaUtensils,
  FaPlane,
  FaBed,
  FaCheckCircle,
  FaBuilding,
  FaSchool,
  FaSuperpowers,
} from "react-icons/fa";
import { SiJfrogpipelines } from "react-icons/si";

const Home = () => (
  <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 text-gray-800">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center ">
        Welcome to Our Electrical Contracting Services👨🏻‍🔧⚡
      </h1>
      <p className="leading-relaxed  text-base sm:text-lg text-gray-700 mb-6">
        <strong>N.S Enterprises</strong> <i>is a leading electrical contracting
          firm with the infrastructure and expertise to execute large-scale
          electrical projects in Mumbai and other metropolitan cities across
          India. With over <strong>15 years</strong> of diverse experience,
          we’ve partnered with top electrical contractors, architects, and
          globally recognized consultants.</i>
      </p>

      <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <li className="flex items-start gap-3">
         ⚡ High and Low Voltage
          Infrastructure Development
        </li>
        <li className="flex items-start gap-3">
          🔌  Power Upgradation
          Projects
        </li>
        <li className="flex items-start gap-3">
          💡  Internal and
          External Lighting Systems
        </li>
        <li className="flex items-start gap-3">
          🔋 Power
          Distribution Solutions
        </li>

        <li className="flex items-start gap-3">
        🖧 Computer
          Networking (Data & Voice)
        </li>
        <li className="flex items-start gap-3">
          🔥 Fire Alarm and Detection
          Systems
        </li>
        <li className="flex items-start gap-3">
         🔒 Access Control Systems
        </li>
        <li className="flex items-start gap-3">
          📹 CCTV Surveillance
        </li>
        <li className="flex items-start gap-3">
          🛡️ Security and
          Monitoring Solutions
        </li>
        <li className="flex items-start gap-3">
          🍽️ Electrical
          Installations for Restaurants & Commercial Kitchens
        </li>
        <li className="flex items-start gap-3">
      ✈ Airport Electrical
          Infrastructure & Systems
        </li>
        <li className="flex items-start gap-3">
          🛏️ Smart Electrical Setup
          for Sleeping Pods and Compact Living Spaces
        </li>
      </ul>
      <p className="text-lg leading-relaxed mb-8">
        We are recognized for our unwavering commitment to{" "}
        <strong>safety</strong>, <strong>quality</strong>, and{" "}
        <strong>timely execution</strong>, fostering lasting relationships
        with clients and consultants.
      </p>

      <div className="grid  gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Key Clients:</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaBuilding className="text-orange-500 mt-1" /> M/S APAR
              INDUSTRIES
            </li>
            <li className="flex items-center gap-2">
              <FaSchool className="text-orange-500 mt-1" /> VIBGYOR SCHOOL
            </li>
            <li className="flex items-center gap-2">
              <FaSuperpowers className="text-orange-500 mt-1" /> M/S LEENA
              POWER TECH
            </li>
            <li className="flex items-center gap-2">
              <SiJfrogpipelines className="text-orange-500 mt-1" /> M/S SEW
              ENGG
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certifications:</h3>
          <p className="flex items-center gap-2 text-lg"><FaCheckCircle className="text-green-600" /> Licensed Electrical Contractor</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
