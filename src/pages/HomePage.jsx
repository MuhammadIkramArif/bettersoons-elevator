import React from "react";
import HeroSection from "../components/sections/HeroSection";
import CtaSection from "../components/sections/CtaSection";
import DoctorsSection from "../components/sections/DoctorsSection";
import PetCareServiceSection from "../components/sections/PetCareServiceSection";
import PetsSection from "../components/sections/PetsSection";
import FaqSection from "../components/sections/FaqSection";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CtaSection />
      <PetsSection />
      <PetCareServiceSection />
      <DoctorsSection />
      <FaqSection />
    </main>
  );
};

export default HomePage;
