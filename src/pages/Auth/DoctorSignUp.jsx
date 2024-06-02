import React from "react";
import { Link } from "react-router-dom";

const DoctorSignUp = () => {
  return (
    <div className="min-h-screen flex lg:items-center justify-center bg-gray-50 lg:p-8">
      <div className="mx-auto max-w-7xl bg-white lg:rounded-3xl">
        <div className="lg:hidden py-5 px-6">
          <Link to="/">
            <img
              className="h-14 w-auto mx-auto"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-12">
          <div className="col">
            <div className="relative p-5 lg:p-10">
              <span className="hidden lg:block absolute top-0 left-0 p-5">
                <Link to="/">
                  <img
                    className="h-14 w-auto"
                    src="/assets/images/logo.png"
                    alt="logo"
                  />
                </Link>
              </span>
              <div className="lg:pt-8 max-w-xl mx-auto text-center lg:text-left">
                <h2 className="lg:mt-8 text-[2.0625rem] font-semibold text-black">
                  Create Account
                </h2>
                <p className="mt-3 text-xl text-black">
                  Fill out following details
                </p>
              </div>
              <div className="mt-8 max-w-xl mx-auto">
                <div>
                  <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        required
                        placeholder="First Name"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        placeholder="Last Name"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Email"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="Phone number"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Password"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Confirm password"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="address"
                        required
                        placeholder="Address"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="medical-license-number"
                        name="medical-license-number"
                        type="text"
                        autoComplete="medical-license-number"
                        required
                        placeholder="Medical License Number"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="specialization"
                        name="specialization"
                        type="text"
                        autoComplete="specialization"
                        placeholder="Specialization"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    <div className="relative">
                      <input
                        id="clinic-hospital"
                        name="clinic-hospital"
                        type="text"
                        autoComplete="clinic-hospital"
                        placeholder="Clinic/Hospital Affiliation"
                        className="block w-full rounded-lg border-0 py-4 px-4 text-[1.0625rem] shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                      />
                    </div>

                    {/* Add more fields for contact information if needed */}

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-lg bg-primary-600 px-3 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                      >
                        Create account
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-[1.0625rem]">
                    <span>Already a user ?</span>
                    <Link
                      to="/sign-in"
                      className="font-semibold hover:text-primary-500"
                    >
                      {" "}
                      Login
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-base font-medium">
                      <span className="bg-white px-6 text-black">
                        Or Login with
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center gap-4">
                    <button type="button">
                      <img
                        className="h-9 w-9"
                        src="/assets/images/twitter.png"
                        alt="..."
                      />
                    </button>
                    <button type="button">
                      <img
                        className="h-9 w-9"
                        src="/assets/images/facebook.png"
                        alt="..."
                      />
                    </button>
                    <button type="button">
                      <img
                        className="h-9 w-9"
                        src="/assets/images/google.png"
                        alt="..."
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col order-first lg:order-last">
            <div className="h-full w-full aspect-[16/5] lg:aspect-square">
              <img
                className="h-full w-full object-cover lg:rounded-e-3xl"
                src="/assets/images/svgs/Tierarzt-Vs01-02-05.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignUp;
