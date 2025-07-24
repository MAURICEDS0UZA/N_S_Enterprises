
import {
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
