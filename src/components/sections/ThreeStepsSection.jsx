import React from "react";
import Container from "../ui/Container";

const ThreeStepsSection = () => {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-center text-2xl lg:text-4xl font-bold mb-8 md:mb-16"
        >
          In 3 steps to make everyday life easier
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="col">
            <div className="space-y-4">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="border border-gray-300 rounded-lg p-5"
              >
                <h4 className="mb-3 text-lg md:text-xl font-bold">
                  1. Get advice
                </h4>
                <p className="md:text-lg text-balance">
                  In the first consultation, we define your wishes and
                  requirements together and find out how Doctolib can simplify
                  your everyday life.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="border border-gray-300 rounded-lg p-5"
              >
                <h4 className="mb-3 text-lg md:text-xl font-bold">
                  2. Individual settings
                </h4>
                <p className="md:text-lg text-balance">
                  Together we adapt the Doctolib complete solution to your
                  needs. This usually doesn't take longer than 2 hours.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="border border-gray-300 rounded-lg p-5"
              >
                <h4 className="mb-3 text-lg md:text-xl font-bold">
                  3. Start with Doctolib
                </h4>
                <p className="md:text-lg text-balance">
                  You and your team will be personally instructed in the use of
                  Doctolib. After the training you can get started straight
                  away. We are always there for you afterwards.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col hidden lg:block"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="aspect-[16/12]">
              <img
                className="block h-full w-full object-contain"
                src="/assets/images/svgs/Tierarzt-Vs01-02-03.svg"
                alt=".."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ThreeStepsSection;
