// import { servicesData } from "../utils/constant";

// const Skills = () => {
//   const services = [
//     "Financial Institutes 🪙",
//     "Hospitals 🏥",
//     "Data Centres 🏬💽",
//     "Malls 🏫",
//     "Corporate Offices🏢",
//     "IT💻",
//     "Residential tower 🏛️",
//     "Banks 🏦",
//   ];

//   return (
//     <section className="py-12 px-6 bg-gray-100">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">
//           We Provide Our Specialized Services To
//         </h2>
//         <p className="text-lg text-gray-600 mb-8 text-justify">
//           Our work meets the highest quality standards, as evidenced at various
//           client sites.Given the opportunity to serve, we guarantee our best
//           services with the highest quality materials/products accessible in the
//           market and up-to-date workmanship.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-gray-700">{service}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    { name: "⚡ High and Low Voltage Infrastructure Development" },
    { name: "🔌 Power Upgradation Projects" },
    { name: "💡 Internal and External Lighting Systems" },
    { name: "🔋 Power Distribution Solutions" },
    { name: "🍽️ Electrical Installations for Restaurants & Commercial Kitchens" },
    { name: "✈ Airport Electrical Infrastructure & Systems" },
    { name: "🛏️ Smart Electrical Setup for Sleeping Pods and Compact Living Spaces" }, {
      name: "🛠️ Integrated ELV Systems including",
      subCategory: [<> <ul>
        <li>🖧 Computer Networking (Data & Voice)</li>
        <li>🔥 Fire Alarm and Detection Systems</li>
        <li>🔒 Access Control Systems</li>
        <li>📹 CCTV Surveillance</li>
        <li>🛡️ Security and Monitoring Solutions</li>
      </ul></>
        // "Computer Networking (Data & Voice)",
        // "🔥 Fire Alarm and Detection Systems",
        // "🔒 Access Control Systems",
        // "📹 CCTV Surveillance",
        // "🛡️ Security and Monitoring Solutions"
      ]
    }
  ];

  // const services = [
  //   {
  //     name: "Financial Institutes 🪙",
  //     description:
  //       "We specialize in power infrastructure and secure wiring solutions for financial institutions.",
  //   },
  //   {
  //     name: "Hospitals 🏥",
  //     description:
  //       "Reliable electrical solutions for critical medical environments with 24/7 support.",
  //   },
  //   {
  //     name: "Data Centres 🏬💽",
  //     description:
  //       "Robust power backup, cabling, and environmental control systems for data centers.",
  //   },
  //   {
  //     name: "Malls 🏫",
  //     description:
  //       "Comprehensive electrical solutions including lighting and energy-efficient systems for malls.",
  //   },
  //   {
  //     name: "Corporate Offices🏢",
  //     description:
  //       "Smart office wiring, backup, and system integration for corporate buildings.",
  //   },
  //   {
  //     name: "IT💻",
  //     description:
  //       "Tech-driven electrical integration for IT spaces including network cabling.",
  //   },
  //   {
  //     name: "Residential tower 🏛️",
  //     description:
  //       "Luxury and safety-focused electrical solutions for high-rise buildings.",
  //   },
  //   {
  //     name: "Banks 🏦",
  //     description:
  //       "Secure and reliable power infrastructure for banking environments.",
  //   },
  // ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // return (<>
  // <div>
  //   {services.map((service)=>{
  //     return (
  //       <><Accordion >
  //       <AccordionSummary
  //         expandIcon={service?.subCategory && <>🔽</>}
  //         aria-controls="panel1-content"
  //         id="panel1-header"
  //       >
  //         <Typography component="span">{service?.name}</Typography>
  //       </AccordionSummary>
  //     {service?.subCategory && (  <AccordionDetails>
  //         <Typography>
  //           {service?.subCategory}
  //         </Typography>
  //       </AccordionDetails>)}
  //     </Accordion></>
  //     )
  //   })}


  // </div>

  // </>)

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          We Provide Our Specialized Services To
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-justify">
          Our work meets the highest quality standards, as evidenced at various
          client sites. Given the opportunity to serve, we guarantee our best
          services with the highest quality materials/products accessible in the
          market and up-to-date workmanship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full text-xl font-semibold text-gray-700 flex justify-between items-center"> {service.name}
                {service?.subCategory && (<button
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="ml-2">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>)}
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm">{service?.subCategory}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default Skills;




// const Skills = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
//         <p className="text-lg text-gray-600 mb-12">
//           We provide a comprehensive range of electrical services, ensuring the
//           highest standards of quality and safety in every project.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-wrap text-justify">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Skills = () => {
//   return (
//     <section className="  p-6  py-20 bg-gray-100  font-serif ">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
//           We provide our specialize services to
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
//           {SKILLS.map((skillCategory, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4 text-gray-900">
//                 {skillCategory.category}
//               </h3>
//               <ul className="  text-gray-700">
//                 {skillCategory.skills.map((skill, idx) => (
//                   <li key={idx} className="italic">
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export default Skills;
