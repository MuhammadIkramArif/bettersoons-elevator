import React from "react";
import Container from "../ui/Container";

const PetCareServiceSection = () => {
  return (
    <section className="pt-10 bg-primary-500/50 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h6
            data-aos="fade-left"
            data-aos-duration="1200"
            className="text-primary-500 font-semibold mb-1 capitalize"
          >
            Quality & Experience
          </h6>
          <h3
            className="text-3xl font-bold capitalize text-white"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            Best Pet <span className="text-primary-500">Care Service</span>
          </h3>
          <p
            data-aos="fade-left"
            data-aos-duration="1400"
            className="mt-3 text-white/80"
          >
            At Pethund, the ambition is that you should always feel welcome both
            as an advertiser and a visitor. A modern and easy-to-manage page
            makes it easier for Users to maneuver forward. or then randomised
            words which don't look even slightly believable
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mt-10 aspect-[16/4]"
          >
            <img
              className="h-full w-full object-contain"
              src="/assets/images/dogs.png"
              alt="..."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PetCareServiceSection;
