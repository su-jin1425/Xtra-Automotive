import Image from "next/image";
import Link from "next/link";

const CardsGrid = () => {
  const cardData = [
    {
      title: "Plant Disease Detector",
      description:
        "Detect plant diseases accurately using our advanced AI model. Click here to try it out!",
      link: "https://plant-disease-prediction-model.streamlit.app/",
      image: "/card1.jpg",
      features: [
        "AI-powered detection algorithms for identifying multiple plant diseases.",
        "Real-time analysis of plant images uploaded by the user.",
        "Comprehensive database of plant diseases for accurate identification.",
      ],
      benefits:
        "Enables early disease detection, reduces crop loss, and enhances yield by providing timely interventions.",
    },
    {
      title: "Fertilizer Spraying",
      description:
        "Optimize the application of fertilizers across extensive agricultural areas.",
      features: [
        "Variable-rate dispensers that adjust application rates based on real-time data.",
        "Automated targeting of specific areas requiring more or less fertilizer.",
        "Integration with precision agriculture systems for seamless data exchange.",
      

      ],
      benefits:
        "Reduces fertilizer waste, guarantees even distribution, and mitigates environmental impact.",
      image: "/card22.jpg",
    },
    {
      title: "Automated Compliance Reporting",
      description:
        "Streamline regulatory compliance reporting for agricultural practices.",
      features: [
        "Automated data collection and reporting systems integrated with drone technology.",
        "Tools for compliance documentation to ensure regulatory adherence.",
      ],
      benefits:
        "Reduces the administrative burden, allowing farms to maintain compliance easily.",
      image: "/card3.jpg",
    },
    {
      title: "3D Field Mapping and Topography",
      description:
        "Generate detailed, accurate maps of agricultural fields to improve management strategies.",
      features: [
        "LiDAR technology for high-resolution 3D mapping and topographical analysis.",
        "Comprehensive field maps with terrain analysis capabilities.",
      ],
      benefits:
        "Enhances field planning, resource management, and operational efficiency.",
      image: "/card4.jpg",
    },
    {
      title: "Predictive Analytics for Crop Yield",
      description:
        "Forecast crop yields using historical data alongside real-time field conditions.",
      features: [
        "Machine learning models that analyze data for yield estimates and strategic recommendations.",
        "Predictive algorithms assist in planning and decision-making for harvest and marketing.",
      ],
      benefits:
        "Optimizes resource allocation and enhances profitability through improved planning.",
      image: "/card5.jpg",
    },
    {
      title: "Blockchain for Crop Traceability",
      description:
        "Ensure complete transparency and traceability of crops from farm to table.",
      features: [
        "A blockchain platform for secure and immutable data storage.",
        "Full traceability of crop production and distribution processes.",
      ],
      benefits:
        "Enhances food safety, augments consumer trust, and adheres to regulatory standards.",
      image: "/card6.jpg",
    },
  ];

  return (
    <div className="bg-green-500 p-4 rounded-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-16">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform transform hover:scale-105 duration-200 ease-in-out hover:bg-green-100"
          >
            {card.link ? (
              <Link href={card.link} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                <div className="w-full">
                    <Image
                      src={card.image}
                      alt={`Card ${index + 1}`}
                      width={500}
                      height={300}
                      layout="responsive"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {card.title}
                    </h2>
                    <p className="text-gray-600">{card.description}</p>
                    {card.features && (
                      <div className="mt-4">
                        <h3 className="text-lg font-medium">Features:</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {card.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {card.benefits && (
                      <div className="mt-4">
                        <h3 className="text-lg font-medium">Benefits:</h3>
                        <p className="text-gray-600">{card.benefits}</p>
                      </div>
                    )}
                  </div>
                </a>
              </Link>
            ) : (
              <div>
                <div className="w-full">
                  <Image
                    src={card.image}
                    alt={`Card ${index + 1}`}
                    width={500}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-600">{card.description}</p>
                  {card.features && (
                    <div className="mt-4">
                      <h3 className="text-lg font-medium">Features:</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {card.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {card.benefits && (
                    <div className="mt-4">
                      <h3 className="text-lg font-medium">Benefits:</h3>
                      <p className="text-gray-600">{card.benefits}</p>
                    </div>
                  )}
                </div>
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;