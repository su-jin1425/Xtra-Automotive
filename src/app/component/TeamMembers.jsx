import Image from "next/image";

const TeamMember = ({ name, role, image, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs mx-auto sm:max-w-sm md:max-w-xs lg:max-w-xs transform transition-transform duration-300 hover:scale-105 hover:bg-[#d4e8d4]"
  >
    <div className="relative group">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="object-cover w-full h-48 sm:h-64 md:h-80 transition-transform duration-300 group-hover:grayscale"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 font-bold">
        {role}
      </p>
    </div>
  </a>
);

const TeamMembers = () => {
  return (
    <div className="bg-[#e3eedd] p-6 sm:p-8 rounded-3xl">
      <h2 className="text-4xl font-bold text-center mb-6 sm:mb-10 text-black">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        <TeamMember
          name="Tanmay Mishra"
          role="LinkedIn"
          image="/tanu.jpg"
          link="https://www.linkedin.com/in/tanmay-mishra-86b8a7248/"
        />
        <TeamMember
          name="Aman Chauhan"
          role="LinkedIn"
          image="/amancha.jpg"
          link="https://www.linkedin.com/in/aman-chauhan-128552256"
        />
        <TeamMember
          name="Vasu Johri"
          role="LinkedIn"
          image="/vasu1.jpg"
          link="https://www.linkedin.com/in/vasu-johri-8b3b65245/"
        />
        <TeamMember
          name="Mukta Pankaj"
          role="LinkedIn"
          image="/mukta.jpg"
          link="https://www.linkedin.com/in/mukta-pankaj-b52b1725b/"
        />
        <TeamMember
          name="Robin Philip"
          role="LinkedIn"
          image="/robin.jpg"
          link="https://www.linkedin.com/in/robin-philip-58344a244/"
        />
        <TeamMember
          name="Aniket Kumar Singh"
          role="LinkedIn"
          image="/aniket.jpg"
          link="https://www.linkedin.com/in/aniket-singh-537aa6198/"
        />
        <TeamMember
          name="Isha Agrawal"
          role="LinkedIn"
          image="/isha.jpg"
          link="https://www.linkedin.com/in/isha-agrawal-a32a571a5/"
        />
        <TeamMember
          name="Sumit Vishwani"
          role="LinkedIn"
          image="/sumit.jpg"
          link="https://www.linkedin.com/in/sumit-vishwani-b73555262/"
        />
      </div>
    </div>
  );
};

export default TeamMembers;
