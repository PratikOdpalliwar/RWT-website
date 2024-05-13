// import React from 'react';
// import "./slider.css";
// import img from "../../assets/img.webp"

// const Slider = () => {
//   return (
//     <>
//       <div className="slide">
//         <div className="slideshow">
//           <ul>
//             <li key="1">
//               <div className="single-img">
//                 <img src={img} alt="abc" />
//               </div>
//             </li>
//             <li key="2">
//               <div className="single-img">
//                 <img src={img} alt="abc" />
//               </div>
//             </li>
//             <li key="3">
//               <div className="single-img">
//                 <img src={img} alt="abc" />
//               </div>
//             </li>
//             <li key="4">
//               <div className="single-img">
//                 <img src={img} alt="abc" />
//               </div>
//             </li>
//             {/* <li key="5">
//               <div className="single-img">
//                 <img src={Swiper5} alt="" />
//               </div>
//             </li> */}
//             {/* <li key="6">
//               <div className="single-img">
//                 <img src={Swiper6} alt="" />
//               </div>
//             </li>  */}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;


import React, { useRef, useState } from 'react';
import img from "../../assets/img.webp"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
