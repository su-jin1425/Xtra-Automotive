import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaLightbulb, FaCogs, FaLeaf } from "react-icons/fa";

export default function Aboutus() {
  const defaultContent1 =
    "We're not just another agri-tech company. Our unique approach of using RGB cameras with specialized LED combinations enables us to capture multispectral data without the need for expensive, specialized equipment.";
  const defaultContent2 =
    "Every farm is unique, and so are our solutions. We work closely with farmers to understand their specific needs and customize our services to deliver maximum value.";
  const defaultContent3 =
    "By helping farmers optimize their resources, we contribute to a more sustainable future for agriculture. CropSky is committed to reducing waste, conserving water, and promoting practices that benefit both farmers and the environment.";

  return (
    <div className="bg-[#f9f9f9] p-8 rounded-3xl shadow-lg">
      <h1 className="text-4xl font-black text-center text-[#333] py-8">What We Do</h1>

      <Accordion selectionMode="multiple" variant="bordered" className="border-0">
        <AccordionItem
          key="1"
          className="text-black"
          aria-label="Innovation at Its Core"
          title={
            <div className="flex items-center space-x-3">
              <FaLightbulb className="text-yellow-500" />
              <span>Innovation at Its Core</span>
            </div>
          }
        >
          {defaultContent1}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Tailored Solutions"
          title={
            <div className="flex items-center space-x-3">
              <FaCogs className="text-blue-500" />
              <span>Tailored Solutions</span>
            </div>
          }
        >
          {defaultContent2}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Sustainability"
          title={
            <div className="flex items-center space-x-3">
              <FaLeaf className="text-green-500" />
              <span>Sustainability</span>
            </div>
          }
        >
          {defaultContent3}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
