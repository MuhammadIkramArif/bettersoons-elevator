import React, { useState } from "react";
import Container from "../ui/Container";
import OwnerPetForm from "../forms/OwnerPetForm";
import SymptomAnalysisForm from "../forms/SymptomAnalysisForm";
import FavoriteTreatmentForm from "../forms/FavoriteTreatmentForm";

const HeroSection = () => {
  const [tab, setTab] = useState("Book a Appointment");
  return (
    <section className="mt-10">
      <Container>
        <div
          className="relative flex w-full p-5 md:p-10 lg:pb-32 xl:pb-56 rounded-3xl bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(/assets/images/bg-1.jpg)` }}
        >
          {/* images */}
          <span className="absolute bottom-0 left-0 hidden md:block">
            <img
              className=" h-full w-full"
              src="/assets/images/svgs/Tierarzt-Vs01-02-07.svg"
              alt=".."
            />
          </span>
          <span className="absolute bottom-0 left-80 hidden xl:block">
            <img
              className=" h-full w-full"
              src="/assets/images/svgs/Tierarzt-Vs01-02-03.svg"
              alt=".."
            />
          </span>
          <span className="absolute bottom-0 right-60 hidden xl:block">
            <img
              className=" h-full w-full"
              src="/assets/images/svgs/Tierarzt-Vs01-02-04.svg"
              alt=".."
            />
          </span>
          <span className="absolute bottom-0 right-0 hidden md:block">
            <img
              className=" h-full w-full"
              src="/assets/images/svgs/Tierarzt-Vs01-02-01.svg"
              alt=".."
            />
          </span>
          {/* /images */}
          <div className="mr-auto p-4">
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-white text-2xl md:text-3xl font-bold mb-4"
            >
              Discover Your Benefits with Bettersoon
            </h2>

            <div
              data-aos="fade-right"
              data-aos-duration="1100"
              className="mb-4 flex flex-wrap max-w-xl gap-y-1 bg-white p-1 -mx-1 rounded-md"
            >
              <div className="w-1/2 md:w-1/3 px-1">
                <button
                  className={`tab-link w-full ${
                    tab === "Book a Appointment" && "active"
                  }`}
                  onClick={() => setTab("Book a Appointment")}
                  type="button"
                >
                  Book a Appointment
                </button>
              </div>
              <div className="w-1/2 md:w-1/3 px-1">
                <button
                  className={`tab-link w-full ${
                    tab === "Symptom Analysis" && "active"
                  }`}
                  onClick={() => setTab("Symptom Analysis")}
                  type="button"
                >
                  Symptom Analysis
                </button>
              </div>
              <div className="w-full md:w-1/3 px-1">
                <button
                  className={`tab-link w-full ${
                    tab === "Favorite treatment" && "active"
                  }`}
                  onClick={() => setTab("Favorite treatment")}
                  type="button"
                >
                  Favorite Treatment
                </button>
              </div>
            </div>
            {tab === "Book a Appointment" && <OwnerPetForm />}
            {tab === "Symptom Analysis" && <SymptomAnalysisForm />}
            {tab === "Favorite treatment" && <FavoriteTreatmentForm />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
