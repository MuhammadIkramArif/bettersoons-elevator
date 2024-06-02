import React from "react";
import Container from "../ui/Container";

const CtaSection = () => {
  return (
    <section className="overflow-hidden py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            className="col text-center space-y-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="text-7xl text-gray-400">
              <i className="pethund_experts" />
            </div>
            <h4 className="text-2xl font-bold text-primary-500 capitalize">
              Get Consulted
            </h4>
            <p className="text-gray-500 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellat recusandae voluptates quia placeat, ipsam inventore?
            </p>
          </div>
          <div
            className="col text-center space-y-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="text-7xl text-gray-400">
              <i className="pethund_adoption" />
            </div>
            <h4 className="text-2xl font-bold text-primary-500 capitalize">
              Personalized Setup
            </h4>
            <p className="text-gray-500 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellat recusandae voluptates quia placeat, ipsam inventore?
            </p>
          </div>
          <div
            className="col text-center space-y-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="text-7xl text-gray-400">
              <i className="pethund_petsitting" />
            </div>
            <h4 className="text-2xl font-bold text-primary-500 capitalize">
              Start with Bettersoon
            </h4>
            <p className="text-gray-500 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellat recusandae voluptates quia placeat, ipsam inventore?
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
