// // "use client";
// // import { Carousel } from "@/app/MTailwind";
 
// // export function CarouselCustomNavigation() {
// //   return (
// //     <Carousel
// //       className="rounded-xl"
// //       navigation={({ setActiveIndex, activeIndex, length }) => (
// //         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
// //           {new Array(length).fill("").map((_, i) => (
// //             <span
// //               key={i}
// //               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
// //                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
// //               }`}
// //               onClick={() => setActiveIndex(i)}
// //             />
// //           ))}
// //         </div>
// //       )}
// //     >
// //       <img
// //         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
// //         alt="image 1"
// //         className="h-full w-full object-cover"
// //       />
// //       <img
// //         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
// //         alt="image 2"
// //         className="h-full w-full object-cover"
// //       />
// //       <img
// //         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
// //         alt="image 3"
// //         className="h-full w-full object-cover"
// //       />
// //     </Carousel>
// //   );
// // }
// import React, { useState } from 'react';
// import Image from 'next/image';

// const CarouselComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Current active slide index

//   const slides = [
//     '/app/assets/img2.png',
//     '/app/assets/img2.png',
//     '/app/assets/img2.png',
//     '/app/assets/img2.png',
//     '/app/assets/img2.png',
//   ];

//   const handlePrevClick = () => {
//     setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleNextClick = () => {
//     setActiveIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
//   };

//   return (
//     <div id="default-carousel" className="relative w-2/3" data-carousel="slide">
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {slides.map((src, index) => (
//           <div
//             key={index}
//             className={`${
//               index === activeIndex ? '' : 'hidden'
//             } duration-700 ease-in-out absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
//           >
//             <Image src={src} alt="" layout="fill" objectFit="contain" />
//           </div>
//         ))}
//       </div>

//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current={index === activeIndex}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//           ></button>
//         ))}
//       </div>

//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={handlePrevClick}
//         data-carousel-prev
//       >
//         {/* SVG and span for Previous button */}
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         onClick={handleNextClick}
//         data-carousel-next
//       >
//         {/* SVG and span for Next button */}
//       </button>
//     </div>
//   );
// };

// export default CarouselComponent;
