import React from "react";
import Container from "../ui/Container";

const DoctorsAboutSection = () => {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-center text-2xl lg:text-4xl font-bold mb-8 md:mb-16"
        >
          How to make your everyday working life easier with{" "}
          <span className="text-primary-500">Bettersoons</span>
        </h1>
        <div className="space-y-8">
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            <div className="col" data-aos="fade-right" data-aos-duration="1000">
              <div className="aspect-[16/10]">
                <img
                  className="h-full w-full rounded-lg object-contain"
                  src="/assets/images/svgs/Tierarzt-Vs01-02-06.svg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col" data-aos="fade-left" data-aos-duration="1000">
              <h3 className="font-bold text-lg md:text-3xl text-balance mb-5">
                Create simple processes for your team
              </h3>
              <ul className="list-decimal pl-5 space-y-2 font-medium text-base text-balance md:text-lg text-gray-500">
                <li>
                  Control your appointment scheduling using individual queries
                  and information according to your needs
                </li>
                <li>
                  Reduce call volume and simplify your coordination – thanks to
                  digital appointment management and structured patient
                  communication
                </li>
                <li>
                  Use the digital cancellation function when changing
                  appointments
                </li>
              </ul>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            <div className="col" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="font-bold text-lg md:text-3xl text-balance mb-5">
                Increase the profitability of your medical facility
              </h3>
              <ul className="list-decimal pl-5 space-y-2 font-medium text-base text-balance md:text-lg text-gray-500">
                <li>
                  With a profile at Bettersoons, you can offer attractive
                  services in a targeted manner and, if desired, easily attract
                  new patients
                </li>
                <li>
                  Ensure optimal utilization of your rooms and equipment
                  directly when making an appointment
                </li>
                <li>
                  Up to 40% fewer short-term appointment cancellations thanks to
                  appointment reminders and intelligent waiting list
                </li>
              </ul>
            </div>
            <div
              className="col order-first md:order-last"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="aspect-[16/10]">
                <img
                  className="h-full w-full rounded-lg object-contain"
                  src="/assets/images/svgs/Tierarzt-Vs01-02-05.svg"
                  alt="..."
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            <div className="col" data-aos="fade-right" data-aos-duration="1000">
              <div className="aspect-[16/10]">
                <img
                  className="h-full w-full rounded-lg object-contain"
                  src="/assets/images/svgs/Tierarzt-Vs01-02-07.svg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col" data-aos="fade-left" data-aos-duration="1000">
              <h3 className="font-bold text-lg md:text-3xl text-balance mb-5">
                Delight your patients with a modern healthcare service
              </h3>
              <ul className="list-decimal pl-5 space-y-2 font-medium text-base text-balance md:text-lg text-gray-500">
                <li>
                  Offer your patients independent and flexible appointment and
                  health management – ​​also possible for relatives
                </li>
                <li>
                  Thanks to the intelligent waiting list, patients receive
                  appointments earlier
                </li>
                <li>
                  Simplify care beyond the appointment with prescription and
                  referral requests and easy collaboration with other facilities
                </li>
              </ul>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            <div className="col" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="font-bold text-lg md:text-3xl text-balance mb-5">
                Arrange a telephone consultation now
              </h3>
              <p className="mb-3 font-medium text-base text-balance md:text-lg text-gray-700">
                Do you work in a practice or hospital and are you interested in
                further information about Bettersoons patient and appointment
                management or the patient portal? Give us a call.
              </p>
              <ul className="list-disc pl-5 space-y-2 font-medium text-base text-balance md:text-lg text-gray-500">
                <li>+49 30 308 069 76</li>
                <li>Monday-Friday 9 a.m. to 5 p.m</li>
              </ul>
            </div>
            <div
              className="col order-first md:order-last"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="aspect-[16/10]">
                <img
                  className="h-full w-full rounded-lg object-contain"
                  src="/assets/images/svgs/Tierarzt-Vs01-02-04.svg"
                  alt="..."
                />
              </div>
            </div>
          </fieldset>
        </div>
      </Container>
    </section>
  );
};

export default DoctorsAboutSection;
