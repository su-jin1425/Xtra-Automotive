"use client";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import HeroSectiion from "./component/HeroSection";
import CardsGrid from "./component/Card";
import Services from "@/app/component/Services";
import Aboutus from "@/app/component/Aboutus";
import TeamMembers from "@/app/component/TeamMembers";  // Import the new TeamMembers component
import Interns from "@/app/component/OurInterns";  // Import the new Interns component

export default function Home() {
  return (
    <main>
      <div className="bg-[#e3eedd]">
        <Navbar />
        <section className="text-center" id="home">
          <HeroSectiion />
        </section>
        <section id="about" className="m-16">
          <Aboutus />
        </section>
        <section id="features">
          <Services />
        </section>
        <div className="flex flex-col items-center justify-center min-h-40vh py-2 m-10 width-50vh">
          <CardsGrid />
        </div>
        <section id="team" className="m-16">
          <TeamMembers />  {/* Add the TeamMembers section */}
        </section>
        <section id="interns" className="m-16">
          <Interns />  {/* Add the Interns section */}
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
