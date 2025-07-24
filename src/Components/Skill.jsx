import { useState } from "react";

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
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

export default Skills;
