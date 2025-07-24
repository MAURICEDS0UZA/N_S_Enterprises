import { PROJECTS } from "../utils/constant";

const Projects = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-25 bg-white border m-8 border-gray-200 hidden md:table">
        <thead>
          <tr>
            <th className="w-[10px] px-4 py-2 text-left bg-gray-300 border-b">Sr. No</th>
            <th className="px-4 w-25 py-2 text-left bg-gray-300 border-b">
              Project
            </th>
            <th className="px-4 py-2 text-left bg-gray-300 border-b">Area</th>
            <th className="px-4 py-2 text-left bg-gray-300 border-b">
              Location
            </th>
            <th className="px-4 py-2 text-left bg-gray-300 border-b">Year</th>
            <th className="px-4 py-2 text-left bg-gray-300 border-b">Client</th>
            <th className="px-4 py-2 text-left bg-gray-300 border-b">
              Contact Person
            </th>
            <th className="px-4 py-2 text-left bg-gray-300 border-b">Project value(₹)</th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map((project, index) => (
            <tr key={index} className="hover:bg-gray-50 min-w-fit">
              <td className="px-4 py-2 border-b">{project.srNo}</td>
              <td className="px-4 py-2 border-b">{project.project}</td>
              <td className="px-4 py-2 border-b">{project.area}</td>
              <td className="px-4 py-2 border-b">{project.location}</td>
              <td className="px-4 py-2 border-b">{project.year}</td>
              <td className="px-4 py-2 border-b">{project.client}</td>
              <td className="px-4 py-2 border-b">
                {project.contactPerson} <br />
                <span className="text-gray-500 text-sm">
                  {project.contactNumber}
                </span>
              </td>
              <td className="px-4 py-2 border-b">{project.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="block md:hidden">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Sr. No: <span className="font-normal text-gray-600">{project.srNo}</span>
              </div>

              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Project: <span className="font-normal text-gray-600">{project.project}</span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Area: <span className="font-normal text-gray-600">{project.area}</span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Location: <span className="font-normal text-gray-600">{project.location}</span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Year: <span className="font-normal text-gray-600">{project.year}</span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Client: <span className="font-normal text-gray-600">{project.client}</span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Contact Person: <span className="font-normal text-gray-600">{project.contactPerson} <br />
                  <span className="text-gray-500 text-sm">
                    {project.contactNumber}
                  </span></span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Amount: <span className="font-normal text-gray-600">{project.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
