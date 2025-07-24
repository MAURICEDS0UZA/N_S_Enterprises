import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { msAppartment,hydAirport, hirandaini,naviAirport,desai} from './../../src/utils/constant'
import ImageSlider from "./ImageSlider";

const Resume = () => {
  return (
    <>
      <div className="mt-4 mx-4">
        <ImageSlider  images={msAppartment} />
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 mt-2 text-gray-800">
          M S Apar Industries
        </h2>
        <ImageSlider images={hydAirport} />
   <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 mt-2 text-gray-800">
         J Pod Hyderbad Airport
        </h2>
        <ImageSlider images={hirandaini} />
         <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 lg:my-6 my-2  text-gray-800">
         Hirandaini
        </h2>
        <ImageSlider images={desai} />
         <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 mt-2 text-gray-800">
         N K Desai
        </h2>
        <ImageSlider images={naviAirport} />
         <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 mt-2 text-gray-800">
        Navi Mumbai International Airport
        </h2>
      </div>

    </>
  );
};

export default Resume;
