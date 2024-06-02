import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { TrashIcon } from "@heroicons/react/24/outline";

const ProfileEditPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-black mb-4">Your Profile</h1>

      <div className="bg-white rounded shadow-md p-4 md:p-6">
        <form>
          <div className="mb-4 relative">
            <div className="rounded-full bg-gray-100 h-[6.375rem] w-[6.375rem] min-w-[6.375rem]]">
              <img
                className="rounded-full h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="..."
              />
            </div>
            <div className="mt-4 flex gap-4">
              <input type="file" hidden />
              <button
                type="button"
                className="py-1 px-2 rounded-md bg-primary-500 text-white hover:bg-primary-600"
              >
                <span className="font-medium text-sm">Upload picture</span>
              </button>
              <button
                type="button"
                className="py-1 px-2 rounded-md text-[#4D4D4D] border border-gray-300 hover:bg-red-500 hover:text-white flex items-center gap-1"
              >
                <TrashIcon className="h-4 w-4" />
                <span className="font-medium text-sm">Delete</span>
              </button>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              {" "}
              Add a picture, recommended size: 256x256{" "}
            </div>

            <div className="absolute top-0 right-0">
              <button
                type="submit"
                className="capitalize flex justify-center rounded-lg bg-primary-500 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                save changes
              </button>
            </div>
          </div>

          <div className="max-w-[49.125rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label htmlFor="full-name" className="mb-2 block ">
                {" "}
                Full Name{" "}
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                required
                placeholder="Full Name"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-address" className="mb-2 block ">
                {" "}
                Email Address{" "}
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Email Address"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="mb-2 block ">
                {" "}
                City{" "}
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                placeholder="City"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number" className="mb-2 block ">
                Phone Number
              </label>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                required
                placeholder="Phone Number"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              />
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ProfileEditPage;
