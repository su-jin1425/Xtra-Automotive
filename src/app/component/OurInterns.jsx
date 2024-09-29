"use client";

const InternCard = ({ domain, interns }) => (
    <div className="bg-gradient-to-r from-[#97f42e] to-[#6aa828] rounded-2xl shadow-md p-4 w-full max-w-xs mx-auto sm:max-w-sm md:max-w-xs lg:max-w-xs transform transition-transform duration-300 hover:scale-105 hover:from-[#d4e8d4] hover:to-[#b8d8a5]">
      <h3 className="text-xl font-semibold text-center mb-4">{domain}</h3>
      <ul className="list-none text-center">
        {interns.map((intern, index) => (
          <li key={index} className="mb-2">
            <a
              href={intern.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors duration-300 hover:text-green-600"
            >
              {intern.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  

const OurInterns = () => {
  const internsData = [
    {
      domain: "AI/ML",
      interns: [
        { name: "Vanshita Seth", link: "https://www.linkedin.com/in/vanshita-seth-32033b219/" },
      
        { name: "Devapriya Das", link: "https://www.linkedin.com/in/devapriya-das-0859b4259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Prapti Siva", link: "https://www.linkedin.com/in/prapti-siva-49297b145/" },
        { name: "Ojasvi Kathuria", link: "https://www.linkedin.com/in/ojasvi-kathuria-2a8932299/" },
        { name: "Akshath Rajkumar", link: "www.linkedin.com/in/akshath-rajkumar-223ba5289" },
      ],
    },
    {
      domain: "Electronics",
      interns: [
        { name: "Ranesh S", link: "https://www.linkedin.com/in/ranesh-s-b25761291/" },
      ],
    },
    {
      domain: "App/Web Developer",
      interns: [
        { name: "Sujith S", link: "https://su-jin1425.github.io/My_Portfolio/" },
        { name: "Mohammed Ghouse ", link: "https://in.linkedin.com/in/ghouseconnect" },
        { name: "Manoj jivanagi", link: "https://www.linkedin.com/in/manoj-jivanagi-073179267/" },
        { name: "Aryan Kedia", link: "www.linkedin.com/in/aryan-kedia-56b85627b" },
        { name: "Divyansh pandit ", link: "https://www.linkedin.com/in/divyansh-pandit-2a07a121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      ],
    },
    {
      domain: "Mechanical",
      interns: [
        { name: "Soumen Basa", link: "https://www.linkedin.com/in/soumen-basa-a00810238/" },
        { name: "Karnika Saklecha ", link: " https://www.linkedin.com/in/karnikasaklecha-4ab440249/ " },
      ],
    },
    {
      domain: "Editorial",
      interns: [
        { name: "Arushi Parakh ", link: "https://www.linkedin.com/in/arushi-parakh-2a124219b" },
        { name: "Samridhi Agrawal", link: "https://www.linkedin.com/in/samridhi-agrawal-0251b4321" },
        { name: "Pallavi yadav", link: "https://www.linkedin.com/in/pallavi-yadav-bba80024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Prakhar Sinha", link: "https://www.linkedin.com/in/prakhar3125/" },
      ],
    },
    {
      domain: "Graphic Designer",
      interns: [
        { name: "Hrishabh Chaturvedi", link: "https://www.linkedin.com/in/hrishabh-chaturvedi-800b22287/" },
        { name: "Sanjana Giridhar", link: "www.linkedin.com/in/sanjana-giridhar-b5359922b" },
      ],
    },
    {
        domain: "R&D",
        interns: [
          { name: "Dinakaran.G", link: "https://www.linkedin.com/in/dinakaran-g-391215268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        ],
      },
  ];

  return (
    <div className="bg-[#e3eedd] p-6 sm:p-8 rounded-3xl">
      <h2 className="text-4xl font-bold text-center mb-6 sm:mb-10 text-black">
        Our Interns
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {internsData.map((domainData, index) => (
          <InternCard
            key={index}
            domain={domainData.domain}
            interns={domainData.interns}
          />
        ))}
      </div>
    </div>
  );
};

export default OurInterns;