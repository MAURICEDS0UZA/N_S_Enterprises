import { PROJECTS } from "../utils/constant";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// const Projects = () => {
//   return (
//     <section className="min-h-max bg-gray-100 p-6 font-serif">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
//           Projects
//         </h2>

//         <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
//           {PROJECTS.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md   relative"
//             >
//               <img
//                 loading="lazy"
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-72  object-fit rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                 {project.title}
//               </h3>
//               <p className="text-gray-700 mb-4 ">{project.description}</p>
//               <div className="mb-4 inline-block ">
//                 <h4 className="text-gray-900 font-semibold mb-2 ">
//                   Technologies:
//                 </h4>
//                 <ul className=" text-gray-700 flex flex-wrap gap-1">
//                   {project.technologies.map((tech, idx) => (
//                     <li key={idx}>{tech}|</li>
//                   ))}
//                 </ul>
//               </div>
//               <a
//                 href={project.link}
//                 target="blank"
//                 className="text-blue-600 flex gap-2 items-center  absolute bottom-3 left-8 cursor-grab"
//               >
//                 View Project
//                 <FaArrowUpRightFromSquare />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const projects = [
  {
    srNo: 1,
    project: "Vikas Paradise Residential Tower - 20 Floors, 120 Flats",
    area: "Mulund",
    location: "Mumbai",
    year: "2008-10",
    client: "Ashford Corporation",
    contactPerson: "Mr. Ketan Gada",
    contactNumber: "9820123434",
    amount: "2,100,000.00",
  },
  {
    srNo: 2,
    project: "IIT Pawai Hostel Bldg No 15  3 Wings - 10 Floors, 540 Rooms",
    area: "IIT Powai",
    location: "Mumbai",
    year: "2009-11",
    client: "M/S Unity Infra",
    contactPerson: "Mr. Rane",
    contactNumber: "9890464219",
    amount: "1,800,000.00",
  },
  {
    srNo: 3,
    project: "Madhuban Residential - 8 Floors, 16 Flats",
    area: "Matunga East",
    location: "Mumbai",
    year: "2009-13",
    client: "Ashford Corporation",
    contactPerson: "Mr. Ketan Gada",
    contactNumber: "9820123434",
    amount: "2,200,000.00",
  },
  {
    srNo: 4,
    project: "Hiranandani Estate Thane Bldg Name: EVA - 18 Floors, 65 Flats",
    area: "Thane",
    location: "Mumbai",
    year: "2013-15",
    client: "M/S Sew Engg",
    contactPerson: "Mr. Ashok Sabat",
    contactNumber: "9867030723",
    amount: "2,200,000.00",
  },
  {
    srNo: 5,
    project: "Hiranandani Estate Thane Bldg Name: Cardinal - 27 Floors, 163 Flats",
    area: "Thane",
    location: "Mumbai",
    year: "2015-17",
    client: "M/S Sew Engg",
    contactPerson: "Mr. Nandakumar Pawar",
    contactNumber: "8828092974",
    amount: "5,300,000.00",
  },
  {
    srNo: 6,
    project: "One Hiranandani Park Thane Bldg Name: Clifton - 27 Floors, 103 Flats",
    area: "Thane",
    location: "Mumbai",
    year: "2017-19",
    client: "M/S Sew Engg",
    contactPerson: "Mr. Nandakumar Pawar",
    contactNumber: "8828092974",
    amount: "4,100,000.00",
  },
  {
    srNo: 7,
    project: "Hiranandani Estate Thane Bldg Name: Bayer House - 10K Sq Feet",
    area: "Thane",
    location: "Mumbai",
    year: "2014",
    client: "M/S Sew Engg",
    contactPerson: "Mr. Nandakumar Pawar",
    contactNumber: "8828092974",
    amount: "400,000.00",
  },
  {
    srNo: 8,
    project: "Hiranandani Estate Thane: Walk Shopping Center - 15K Sq Feet",
    area: "Thane",
    location: "Mumbai",
    year: "2016-17",
    client: "M/S Reflexions Pvt Ltd",
    contactPerson: "Mr. Zubair Sidquee",
    contactNumber: "9004348047",
    amount: "600,000.00",
  },
  {
    srNo: 9,
    project: "Hiranandani Garden Pawai Bldg Name: EVA - 23 Floors, 182 Flats",
    area: "Thane",
    location: "Mumbai",
    year: "Ongoing",
    client: "M/S Sew Engg",
    contactPerson: "Mr. Rahul Gosavi",
    contactNumber: "7718827809",
    amount: "5,900,000.00",
  },
  {
    srNo: 10,
    project: "Rustomjee Arbania Wing (Labour) - 32 Floors, 124 Flats",
    area: "Thane",
    location: "Mumbai",
    year: "2016-18",
    client: "M/S Sew Engg",
    contactPerson: "Mr. Rahul Gosavi",
    contactNumber: "7718827809",
    amount: "5,100,000.00",
  },{
    srNo: 11,
    project:
      "RESTAURANT AT: BURGER KING, BOTTONS UP, THEOBROMA, CHAI POINT, STREET FOOD BY PUNJAB",
    area: "9K SQ FEET",
    location: "Mumbai International Airport Terminal 2",
    year: "2015-16",
    client: "M/S LITE BITE",
    contactPerson: "Mr. Shrawan",
    contactNumber: "9022074747",
    amount: "₹ 900,000.00",
  },
  {
    srNo: 12,
    project: "CHAI POINT AT HINJEWADI, CHAI POINT AT MAGARPATTA",
    area: "300 SQ FEET",
    location: "Pune",
    year: "2015-2016",
    client: "M/S KSHAMATA PROJECTS",
    contactPerson: "Mr. Virendra Shiv",
    contactNumber: "7718871817",
    amount: "₹ 600,000.00",
  },
  {
    srNo: 13,
    project: "CHEP INDIA",
    area: "8K SQ FEET",
    location: "Andheri",
    year: "2016",
    client: "M/S REFLEXIONS PVT LTD",
    contactPerson: "Mr. Zubair Sidquee",
    contactNumber: "9004348047",
    amount: "₹ 300,000.00",
  },
  {
    srNo: 14,
    project: "BHUMIPUTRA BHAVAN AUDITORIUM CIDCO (LABOUR JOB)",
    area: "8 FLOORS",
    location: "Ulwe",
    year: "2018-20",
    client: "M/S LEENA POWER TECH",
    contactPerson: "Mr. Abhishek Patil",
    contactNumber: "9833297409",
    amount: "₹ 2,800,000.00",
  },
  {
    srNo: 15,
    project: "AT ICC TOWER 1 & 2 DADAR",
    area: "10K SQ FEET",
    location: "Dadar (East)",
    year: "2018-19",
    client: "M/S KOOL KRAFT ENGG",
    contactPerson: "Mr. Anmol Kohli",
    contactNumber: "9833166847",
    amount: "₹ 2,500,000.00",
  },
  {
    srNo: 16,
    project: "NEW DISTRICT HEADQUARTER CIDCO",
    area: "30K",
    location: "Palghar",
    year: "2020-21",
    client: "M/S LEENA POWER TECH",
    contactPerson: "Mr. Mahendra Kanthe",
    contactNumber: "9867030705",
    amount: "₹ 2,500,000.00",
  },
  {
    srNo: 17,
    project: "RESTAURANTS: HRC, SIERO",
    area: "6K SQ FEET",
    location: "NESCO Goregaon",
    year: "Ongoing",
    client: "M/S GRADE ELECTRICAL",
    contactPerson: "Mr. Chandrakant Tripathi",
    contactNumber: "7506684148",
    amount: "₹ 450,000.00",
  },
  {
    srNo: 18,
    project: "HIRANANDANI PAWAI: REGENT HILL (LABOUR JOB)",
    area: "1.2K SQ FT",
    location: "Powai",
    year: "2020-22",
    client: "M/S SEW ENGG",
    contactPerson: "Mr. Rahul Gosavi",
    contactNumber: "7718827809",
    amount: "₹ 5,900,000.00",
  },
  {
    srNo: 20,
    project:
      "SARASWATI INTERNATIONAL SCHOOL - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "84K SQ FT",
    location: "Airoli",
    year: "2022-23",
    client: "M/S SIDUS BUILDCON",
    contactPerson: "Mr. Nandkumar Pawar",
    contactNumber: "8828092974",
    amount: "₹ 11,200,000.00",
  },
  {
    srNo: 21,
    project:
      "SKILL DEVELOPMENT CENTER - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "18K SQ FT",
    location: "Ratnagiri",
    year: "2022-23",
    client: "M/S SIDUS BUILDCON",
    contactPerson: "Mr. Nandkumar Pawar",
    contactNumber: "8828092974",
    amount: "₹ 3,200,000.00",
  },
  {
    srNo: 22,
    project:
      "BUNGALOW (APAR INDU) - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "8 ACRES",
    location: "Lonavala",
    year: "Ongoing",
    client: "M/S APAR INDUSTRIES",
    contactPerson: "Mr. Sachin Lippare",
    contactNumber: "7710042914",
    amount: "₹ 19,000,000.00",
  },
  {
    srNo: 24,
    project:
      "CET EXAMINATION CENTERS - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "1.1L SQ FT, 1800 SITTINGS",
    location: "Five districts in Maharashtra",
    year: "2023-25",
    client: "M/S ALATARA PRO",
    contactPerson: "Mr. Mehroosh Raanderia",
    contactNumber: "7506063648",
    amount: "₹ 9,500,000.00",
  },{
    srNo: 25,
    project: "SKILL DEVELOPMENT CENTER - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "42 K SQ FT",
    location: "NASHIK, RANJANGAON PUNE",
    year: "24-25",
    client: "M/S ALATARA PRO",
    contactPerson: "MR MEHROOSH RAANDERIA",
    contactNumber: "7506063648",
    amount: "8,500,000.00",
  },
  {
    srNo: 26,
    project: "NAVI MUMBAI AIRPORT (LABOUR JOB)",
    area: "40 K SQ FT",
    location: "NAVI MUMBAI",
    year: "24-25",
    client: "ANTELEC PVT - KINDEN GROUP OF COMPANIES",
    contactPerson: "MR SATISH BHOSALE",
    contactNumber: "9029066187",
    amount: "6,300,000.00",
  },
  {
    srNo: 27,
    project: "N K DESAI HOSPITAL (LABOUR JOB)",
    area: "78 K SQ FT",
    location: "GULBARGA, KARNATAK",
    year: "24-25",
    client: "M/S SEW ENGG",
    contactPerson: "MR SANJEEV KADEPURE",
    contactNumber: "9867030729",
    amount: "5,300,000.00",
  },
  {
    srNo: 28,
    project: "J POD AT HYDERABAD AIRPORT - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "9 K SQ FT",
    location: "HYDERABAD",
    year: "23-24",
    client: "M/S PAWANPUTRAA ENGG",
    contactPerson: "MR DHARAM MASTER",
    contactNumber: "9664155548",
    amount: "3,200,000.00",
  },
  {
    srNo: 29,
    project: "AMPLIFONE OUTLETS AT HYDERABAD",
    area: "2 K SQ FT",
    location: "HYDERABAD",
    year: "22-23",
    client: "M/S MANVIN ENT",
    contactPerson: "MR VIRENDRA SING",
    contactNumber: "",
    amount: "2,200,000.00",
  },
  {
    srNo: 30,
    project: "PRAMOD MAHAJAN SPORTS COMPLEX BORIVALI - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "9 ACRES",
    location: "BORIVALI, MUMBAI",
    year: "24-25",
    client: "M/S SIDUS BUILDCON",
    contactPerson: "MR NANDKUMAR PAWAR",
    contactNumber: "8828092974",
    amount: "11,200,000.00",
  },
  {
    srNo: 31,
    project: "RUSTOMJEE PARAMOUNT 23 FL RESIDENTIAL BLDG - JOINT VENTURE WITH M/S MICRO POWERTECH",
    area: "45 K SQ FT",
    location: "KHAR, MUMBAI",
    year: "ONGOING",
    client: "RUSTOMJEE DEVELOPER",
    contactPerson: "MR MAHESH GHAG",
    contactNumber: "",
    amount: "21,200,000.00",
  },
  {
    srNo: 32,
    project: "JSW STAFF TOWNSHIP - 91 FLATS",
    area: "PEN, DOLVI",
    location: "PEN, MAHARATRA",
    year: "ONGOING",
    client: "M/S JSW",
    contactPerson: "MR KETAN MHATRE",
    contactNumber: "",
    amount: "110,000,000.00",
  },
  {
    srNo: 33,
    project: "JSW STAFF TOWNSHIP - 48 STUDIO APT",
    area: "PEN, DOLVI",
    location: "PEN, MAHARATRA",
    year: "ONGOING",
    client: "M/S JSW",
    contactPerson: "MR KETAN MHATRE",
    contactNumber: "",
    amount: "7,800,000.00",
  },
  {
    srNo: 34,
    project: "VEBVGYORE SCHOOL",
    area: "1.1 L SQ FT",
    location: "BELAPUR",
    year: "ONGOING",
    client: "M/S ALATARA PRO",
    contactPerson: "MR MEHROOSH RAANDERIA",
    contactNumber: "7506063648",
    amount: "12,400,000.00",
  },
  {
    srNo: 35,
    project: "SUB STATION AT VIBGYORE SCHOOL",
    area: "800 SQ FT",
    location: "BELAPUR",
    year: "24-25",
    client: "M/S ALATARA PRO",
    contactPerson: "MR MEHROOSH RAANDERIA",
    contactNumber: "7506063648",
    amount: "7,600,000.00",
  },
  {
    srNo: 36,
    project: "NCRD SCHOOL",
    area: "76 K SQ FT",
    location: "NERUL",
    year: "ONGOING",
    client: "M/S SIDUS BUILDCON",
    contactPerson: "MR NANDKUMAR PAWAR",
    contactNumber: "8828092974",
    amount: "9,600,000.00",
  },
  {
    srNo: 37,
    project: "Fr AGNEL SCHOOL",
    area: "70 K SQ FT",
    location: "VADHVA CITY, PANVEL",
    year: "ONGOING",
    client: "M/S SIDUS BUILDCON",
    contactPerson: "MR NANDKUMAR PAWAR",
    contactNumber: "8828092974",
    amount: "17,000,000.00",
  },
  {
    srNo: 38,
    project: "RAPTOKAS CORPORATE OFFICE (LABOUR JOB)",
    area: "1.6 L SQ FT",
    location: "VORLI, MUMBAI",
    year: "ONGOING",
    client: "M/S SEW ENGG",
    contactPerson: "MR SANJEEV KADEPURE",
    contactNumber: "9867030729",
    amount: "1,160,000,000.00",
  }
];

// const projects = [
//   {
//     srNo: 1,
//     project: "Vikas Paradise Residential Tower - 20 Floors, 120 Flats",
//     area: "Mulund",
//     location: "Mumbai",
//     year: "2008-10",
//     client: "Ashford Corporation",
//     contactPerson: "Mr. Ketan Gada",
//     contactNumber: "9820123434",
//     amount: "2,100,000.00",
//   },
//   {
//     srNo: 2,
//     project: "IIT Powai Hostel Building No 15 - 3 Wings, 10 Floors, 540 Rooms",
//     area: "IIT Powai",
//     location: "Mumbai",
//     year: "2009-11",
//     client: "M/S Unity Infra",
//     contactPerson: "Mr. Rane",
//     contactNumber: "9890464219",
//     amount: "1,800,000.00",
//   },
//   {
//     srNo: 3,
//     project: "Madhuban Residential - 8 Floors, 16 Flats",
//     area: "Matunga East",
//     location: "Mumbai",
//     year: "2009-13",
//     client: "Ashford Corporation",
//     contactPerson: "Mr. Ketan Gada",
//     contactNumber: "9820123434",
//     amount: "2,200,000.00",
//   },
//   {
//     srNo: 4,
//     project:
//       "Hiranandani Estate Thane - Building Name: EVA, 18 Floors, 65 Flats",
//     area: "Thane",
//     location: "Mumbai",
//     year: "2013-15",
//     client: "M/S Sew Engg",
//     contactPerson: "Mr. Ashok Sabat",
//     contactNumber: "9867030723",
//     amount: "2,200,000.00",
//   },
//   {
//     srNo: 5,
//     project:
//       "Hiranandani Estate Thane - Building Name: CARDINAL, 27 Floors, 163 Flats",
//     area: "Thane",
//     location: "Mumbai",
//     year: "2015-17",
//     client: "M/S Sew Engg",
//     contactPerson: "Mr. Nandakumar Pawar",
//     contactNumber: "8828092974",
//     amount: "5,300,000.00",
//   },
//   {
//     srNo: 6,
//     project:
//       "One Hiranandani Park Thane - Building Name: CLIFTON, 27 Floors, 103 Flats",
//     area: "Thane",
//     location: "Mumbai",
//     year: "2017-19",
//     client: "M/S Sew Engg",
//     contactPerson: "Mr. Nandakumar Pawar",
//     contactNumber: "8828092974",
//     amount: "4,100,000.00",
//   },
//   {
//     srNo: 7,
//     project:
//       "Hiranandani Estate Thane - Building Name: BAYER HOUSE, 10K Sq Feet",
//     area: "Thane",
//     location: "Mumbai",
//     year: "2014",
//     client: "M/S Sew Engg",
//     contactPerson: "Mr. Nandakumar Pawar",
//     contactNumber: "8828092974",
//     amount: "400,000.00",
//   },
//   {
//     srNo: 8,
//     project: "Hiranandani Estate Thane - Walk Shopping Center, 15K Sq Feet",
//     area: "Thane",
//     location: "Mumbai",
//     year: "2016-17",
//     client: "M/S Reflexions Pvt Ltd",
//     contactPerson: "Mr. Zubair Sidquee",
//     contactNumber: "9004348047",
//     amount: "600,000.00",
//   },
//   {
//     srNo: 9,
//     project:
//       "Hiranandani Garden Powai - Building Name: EVA, 23 Floors, 182 Flats",
//     area: "Powai",
//     location: "Mumbai",
//     year: "Ongoing",
//     client: "M/S Sew Engg",
//     contactPerson: "Mr. Rahul Gosavi",
//     contactNumber: "7718827809",
//     amount: "5,900,000.00",
//   },
//   {
//     srNo: 10,
//     project: "Rustomjee Urbania Wing - 32 Floors, 124 Flats",
//     area: "Thane",
//     location: "Mumbai",
//     year: "2016-18",
//     client: "M/S Sew Engg",
//     contactPerson: "Mr. Rahul Gosavi",
//     contactNumber: "7718827809",
//     amount: "5,100,000.00",
//   },
//   {
//     srNo: 11,
//     project:
//       "Restaurant at Burger King, Bottoms Up, Theobroma, Chai Point, Street Food by Punjab - 9K Sq Feet",
//     area: "Mumbai International Airport Terminal 2",
//     location: "Mumbai",
//     year: "2015-16",
//     client: "M/S Lite Bite",
//     contactPerson: "Mr. Shrawan",
//     contactNumber: "9022074747",
//     amount: "900,000.00",
//   },
//   {
//     srNo: 12,
//     project: "Chai Point at Hinjewadi, Chai Point at Magarpatta - 300 Sq Feet",
//     area: "Pune",
//     location: "Pune",
//     year: "2015-2016",
//     client: "M/S Kshamata Projects",
//     contactPerson: "Mr. Virendra Shiv",
//     contactNumber: "7718871817",
//     amount: "600,000.00",
//   },
//   {
//     srNo: 13,
//     project: "CHEP India - 8K Sq Feet",
//     area: "Andheri",
//     location: "Mumbai",
//     year: "2016",
//     client: "M/S Reflexions Pvt Ltd",
//     contactPerson: "Mr. Zubair Sidquee",
//     contactNumber: "9004348047",
//     amount: "300,000.00",
//   },
//   {
//     srNo: 14,
//     project: "Bhumiputra Bhavan Auditorium - 8 Floors",
//     area: "CIDCO",
//     location: "Navi Mumbai",
//     year: "2018-20",
//     client: "M/S Leena Power Tech",
//     contactPerson: "Mr. Abhishek Patil",
//     contactNumber: "9833297409",
//     amount: "2,800,000.00",
//   },
//   {
//     srNo: 15,
//     project: "ICC Tower 1 & 2 - Dadar",
//     area: "N/A",
//     location: "Mumbai",
//     year: "2018-19",
//     client: "M/S Kool Kraft Engg",
//     contactPerson: "Mr. Anmol Kohli",
//     contactNumber: "9833166847",
//     amount: "2,500,000.00",
//   },
//   {
//     srNo: 16,
//     project: "New District Head Quarter - CIDCO, 30K Sq Feet",
//     area: "Palghar",
//     location: "Mumbai",
//     year: "Ongoing",
//     client: "M/S Leena Power Tech",
//     contactPerson: "Mr. Mahendra Kanthe",
//     contactNumber: "9867030705",
//     amount: "2,500,000.00",
//   },
//   {
//     srNo: 17,
//     project: "Restaurants: HRC, Siero - 6K Sq Feet",
//     area: "Nesco Goregaon",
//     location: "Mumbai",
//     year: "Ongoing",
//     client: "M/S Grade Electrical",
//     contactPerson: "Mr. Chandrakant Tripathi",
//     contactNumber: "7506684148",
//     amount: "450,000.00",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">Sr. No</th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">
//               Project
//             </th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">Area</th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">
//               Location
//             </th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">Year</th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">Client</th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">
//               Contact Person
//             </th>
//             <th className="px-4 py-2 text-left bg-gray-100 border-b">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="px-4 py-2 border-b">{project.srNo}</td>
//               <td className="px-4 py-2 border-b">{project.project}</td>
//               <td className="px-4 py-2 border-b">{project.area}</td>
//               <td className="px-4 py-2 border-b">{project.location}</td>
//               <td className="px-4 py-2 border-b">{project.year}</td>
//               <td className="px-4 py-2 border-b">{project.client}</td>
//               <td className="px-4 py-2 border-b">
//                 {project.contactPerson} <br />
//                 <span className="text-gray-500 text-sm">
//                   {project.contactNumber}
//                 </span>
//               </td>
//               <td className="px-4 py-2 border-b">{project.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const Projects = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-25 bg-white border border-gray-200 hidden md:table">
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
          {projects.map((project, index) => (
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
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Sr. No:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.srNo}
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Project:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.project}
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Area:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.area}
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Location:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.location}
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Year:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.year}
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Client:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.client}
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Contact Person:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.contactPerson} <br />
                <span className="text-gray-500 text-sm">
                  {project.contactNumber}
                </span>
              </div>
              <div className="w-full md:w-1/2 font-bold text-gray-700">
                Amount:
              </div>
              <div className="w-full md:w-1/2 text-gray-600">
                {project.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
