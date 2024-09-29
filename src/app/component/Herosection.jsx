"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "@/app/assets/img1.jpg";

const HeroSection = () => {
  // Bot visibility state
  const [isBotVisible, setIsBotVisible] = useState(false);

  useEffect(() => {
    // Load the bot script
    const script = document.createElement("script");
    script.src =
      "https://botstacks.sfo3.cdn.digitaloceanspaces.com/webassistant.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      console.log("Bot script loaded.");
      // Initialize the bot
      try {
        window.initBotStackAssistant({
          apiKey: "h7p9z00ukli0y6czc4s555qm",
          botId: "fb0e91ae-97c9-44e1-ab14-eb326dcd2d7c",
        });
        console.log("Bot initialized.");
      } catch (error) {
        console.error("Error initializing the bot:", error);
      }

      // Initially hide the bot
      const botElement = document.querySelector(".web-assistant");
      if (botElement) {
        botElement.style.display = "none";
        console.log("Bot initialized and hidden.");
      } else {
        console.error("Bot element not found.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load the bot script.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleBotVisibility = () => {
    const botElement = document.querySelector(".web-assistant");
    if (botElement) {
      botElement.style.display = isBotVisible ? "none" : "block";
      setIsBotVisible(!isBotVisible);
      console.log("Bot visibility toggled.", botElement.style.display);
    } else {
      console.error("Bot element not found when trying to toggle.");
    }
  };

  return (
    <div className="relative h-80vh">
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="z-0"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "rgb(55,165,0)",
            background:
              "-moz-linear-gradient(100deg, rgb(55,165,0) 0%, rgba(22,140,4,0.84) 24%, rgba(79,214,12,0) 100%)",
            background:
              "-webkit-linear-gradient(100deg, rgb(55,165,0) 0%, rgba(22,140,4,0.84) 24%, rgba(79,214,12,0) 100%)",
            background:
              "linear-gradient(100deg, rgb(55,165,0) 0%, rgba(22,140,4,0.84) 24%, rgba(79,214,12,0) 100%)",
            filter:
              'progid:DXImageTransform.Microsoft.gradient(startColorstr="rgb(55,165,0)", endColorstr="rgba(79,214,12,0)", gradienttype="1")',
          }}
        ></div>
      </div>
      <div className="relative flex items-center justify-start min-h-[60vh] z-20 pl-24">
        <div className="text-center text-white px-12">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to CropSky</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            At CropSky, we're redefining the future of farming with cutting-edge
            drone technology. Our innovative solutions are designed to empower
            farmers by providing detailed insights into their crops, helping
            them make informed decisions that boost productivity and
            sustainability.
          </p>
        </div>
      </div>

      {/* Bot Toggle Button */}
      <div className="absolute bottom-8 right-8 z-30">
        <button
          onClick={toggleBotVisibility}
          className="bg-green-600 text-black p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          {isBotVisible ? "Close Bot" : "Chat with us!"}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;