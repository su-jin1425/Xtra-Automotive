import React from "react";
import Image from "next/image";
import img1 from "@/app/assets/img1.jpg";
// import img2 from '@/app/assets/img2.jpg';
// import img3 from '@/app/assets/img3.jpg';

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 m-8">
      <div className="flex-initial m-8 text-black">
        <h1 className="text-6xl font-bold p-4">Our Services</h1>
        <p className="text-xl p-4">
          <ul>
            <li>
              <strong>Precision Agriculture:</strong> Our drones are equipped
              with advanced RGB cameras that capture high-resolution
              multispectral images of your crops. By analyzing these images, we
              provide actionable insights into crop health, soil conditions, and
              more.
              <br />
            </li>
            <li>
              <strong>Custom-Built Drones:</strong> At CropSky, we design and
              build our own drones, tailored specifically for agricultural use.
              This allows us to ensure the highest standards of performance and
              reliability in every drone we deploy.
              <br />
            </li>
            <li>
              <strong>Data-Driven Farming:</strong> Our platform collects and
              processes data from the field, transforming it into valuable
              information that can be accessed through our user-friendly app.
              From early disease detection to optimal irrigation planning,
              CropSky puts the power of data in your hands.
              <br />
            </li>
          </ul>
        </p>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow transform transition-transform duration-300 hover:scale-105 hover:bg-green-200 m-3">
        <a href="#">
          <Image
            src={img1}
            alt="Seed Sowing"
            className="rounded-t-3xl"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Seed Sowing
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Precision Planting for Maximum Yield Our drones deliver precise seed
            placement, ensuring optimal plant density and uniform growth.
            Experience faster, more efficient sowing with customizable patterns
            tailored to your crop needs.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#69d028] rounded-lg hover:bg-[#4a911c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow transform transition-transform duration-300 hover:scale-105 hover:bg-green-200 m-3">
        <a href="#">
          <Image
            src={img1}
            alt="Smart Crop Monitoring"
            className="rounded-t-3xl"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Smart Crop Monitoring
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Get real-time insights into your crop's health with our advanced
            drone technology. Detect issues early, optimize resource use, and
            make data-driven decisions to enhance your farm's productivity.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#69d028] rounded-lg hover:bg-[#4a911c] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
