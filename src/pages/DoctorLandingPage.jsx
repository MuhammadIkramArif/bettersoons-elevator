import React from "react";
import DoctorsSection from "../components/sections/DoctorsSection";
// import TopFeaturesSection from "../components/sections/TopFeaturesSection";
import FaqSection from "../components/sections/FaqSection";
import HeroDoctorSection from "../components/sections/HeroDoctorSection";
import DoctorsAboutSection from "../components/sections/DoctorsAboutSection";
import ThreeStepsSection from "../components/sections/ThreeStepsSection";

const DoctorLandingPage = () => {
  return (
    <main className="overflow-hidden">
      <HeroDoctorSection />
      <DoctorsSection />
      <DoctorsAboutSection />
      {/* <TopFeaturesSection /> */}
      <ThreeStepsSection />
      <FaqSection />
    </main>
  );
};

export default DoctorLandingPage;
