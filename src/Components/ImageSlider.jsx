// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import {images} from './../../src/utils/constant'
// // const images = [img1,img2,img3,img4];
// console.log('imagss',images)
// const ImageSlider = () => {
//   const [current, setCurrent] = useState(0);
//   const length = images.length;

//   const nextSlide = () => setCurrent((current + 1) % length);
//   const prevSlide = () => setCurrent((current - 1 + length) % length);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [current]);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
//       <AnimatePresence>
//         <motion.img
//           key={images[current]}
//           src={images[current]}
//           alt={`Slide ${current + 1}`}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.1  }}
//           className="w-full object-cover h-[400px]"
//         />
//       </AnimatePresence>
//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
//       >
//         <FaArrowLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
//       >
//         <FaArrowRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               current === i ? "bg-yellow-500" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { memo } from "react";

// const variants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//   }),
//   center: { x: 0, opacity: 1 },
//   exit: (direction) => ({
//     x: direction < 0 ? 300 : -300,
//     opacity: 0,
//   }),
// };

const ImageSlider =memo(({images}) => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  console.log('prop', images)
  const length = images.length;

  const paginate = (newDirection) => {
    setCurrent([
      (current + newDirection + length) % length,
      newDirection,
    ]);
  };


  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl ">
      <div className="relative h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[current]}
            src={images[current]}
            custom={direction}
             loading="lazy"
                        initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.1 },
            }}
            className="absolute w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            draggable={false}
            alt={`Slide ${current + 1}`}
          />
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent([i, i > current ? 1 : -1])}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-yellow-500 scale-125" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
});

export default ImageSlider;
