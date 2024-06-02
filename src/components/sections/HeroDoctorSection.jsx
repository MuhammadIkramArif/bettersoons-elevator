import React from "react";
import Container from "../ui/Container";

const HeroDoctorSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mt-10">
      <Container>
        <div
          className="relative flex w-full p-5 md:p-10 lg:pb-32 xl:pb-56 rounded-3xl bg-cover bg-center bg-blend-overlay bg-primary-800/60 overflow-hidden"
          style={{ backgroundImage: `url(/assets/images/hero-image-4.jpg)` }}
        >
          <div className=" max-w-3xl">
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-white text-2xl md:text-3xl font-bold mb-2"
            >
              Bettersoons: More time for the essentials
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="1100"
              className="mb-4 text-white text-lg md:text-xl"
            >
              Digital solutions for practices and hospitals in the area of
              ​​patient and appointment management
            </p>
            <div data-aos="fade-right" data-aos-duration="1200">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-0 rounded-lg bg-white p-2 md:divide-x divide-gray-300">
                  <div className="flex items-center pl-2">
                    <input
                      type="email"
                      placeholder="Email *"
                      className="pl-1 border-0 focus:ring-0 w-full"
                      required
                    />
                  </div>
                  <div className="flex items-center pl-2">
                    <select className="pl-1 border-0 focus:ring-0 w-full capitalize">
                      <option value="" disabled selected>
                        Where do you work? *
                      </option>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="col-span-1 sm:col-span-2 md:col-span-1 btn rounded-md md:rounded-r-md px-3 py-3 text-white bg-primary-500 hover:bg-primary-600"
                  >
                    Arrange a consultation
                  </button>
                </div>
                <div className="mt-3 px-2 relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-400 text-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-white"
                    >
                      I agree to be contacted regularly by Bettersoons about
                      product updates and services, promotions, special offers,
                      events, guides and marketing surveys, as well as to
                      receive news via email or SMS.
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroDoctorSection;
