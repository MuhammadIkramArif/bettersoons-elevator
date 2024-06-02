import React from "react";
import { LifebuoyIcon, MapPinIcon } from "@heroicons/react/24/outline";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

const treatmentsData = [
  { name: "Vaccination" },
  { name: "Nail Clipping" },
  { name: "Dietary Consulting" },
  { name: "Nail Clipping" },
  { name: "Dietary Consulting" },
];

const OwnerPetForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-0 rounded-lg bg-white p-2 md:divide-x divide-gray-300"
      >
        <div className="lg:col-span-2 pl-2">
          <SearchBox />
        </div>
        <div className="flex items-center pl-2">
          <LifebuoyIcon className="h-5 w-5 min-w-[1.25rem] text-gray-500" />
          <input
            type="number"
            placeholder="Age"
            className="pl-1 border-0 focus:ring-0"
          />
        </div>
        <div className="flex items-center pl-2">
          <MapPinIcon className="h-5 w-5 min-w-[1.25rem] text-gray-500" />
          <input
            type="text"
            placeholder="Address"
            className="pl-1 border-0 focus:ring-0"
          />
        </div>
        <button
          type="submit"
          className="btn rounded-md sm:rounded-none sm:rounded-r-md px-3 py-3 text-white bg-primary-500 hover:bg-primary-600"
        >
          Search Now
        </button>
      </form>
      <div className="mt-3 flex flex-wrap gap-2">
        {treatmentsData.map((treatment, index) => (
          <button
            type="button"
            className="px-3 md:px-4 py-2 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-500 hover:text-white text-xs md:text-sm font-semibold"
            key={index}
          >
            {treatment.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OwnerPetForm;
