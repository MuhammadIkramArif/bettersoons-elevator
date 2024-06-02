import React from "react";
import Container from "../ui/Container";

const featuresData = [
  {
    title: "Customizable calendar",
    description:
      "Set office hours, appointment types and duration individually and map your processes automatically.",
  },
  {
    title: "Online appointment management",
    description:
      "Patients can book and manage appointments online 24/7 and send required documents in advance in encrypted form.",
  },
  {
    title: "Structured patient inquiries",
    description:
      "Manage patient inquiries directly via Bettersoons – simply and clearly thanks to answer templates and internal notes.",
  },
  {
    title: "Smart waiting list",
    description:
      "If an appointment is canceled, patients on the waiting list are automatically notified - the gap is filled without any effort.",
  },
  {
    title: "Digital referrer network",
    description:
      "Make transfers, even with direct appointment booking. Information and documents can be transmitted.",
  },
  {
    title: "Secure messenger",
    description:
      "Communicate seamlessly with your professional network, exchange documents, and work collaboratively on patient cases.",
  },
  {
    title: "Modern video consultation",
    description:
      "Offer your patients efficient remote treatment, e.g. B. for initial assessments, controls or discussions of findings.",
  },
  {
    title: "Interfaces to common PVS, RIS and HIS",
    description:
      "Bettersoons has interfaces to common systems. Get advice about your options.",
  },
];

const TopFeaturesSection = () => {
  return (
    <section className="py-10 md:py-16 bg-primary-500/50 overflow-hidden">
      <Container>
        <h3
          className="mb-8 text-center text-3xl font-bold capitalize text-white"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Top features for your medical facility
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-duration="1100"
              className="col"
            >
              <div className="bg-white rounded-lg p-4 h-full w-full">
                <h3 className="mb-2 text-xl text-balance font-semibold text-primary-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopFeaturesSection;
