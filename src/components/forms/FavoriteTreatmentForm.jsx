import React from "react";
import FavoriteTreatmentSearchBox from "./FavoriteTreatmentSearchBox";
import { useNavigate } from "react-router-dom";

const treatmentsData = [
  { name: "Vaccination" },
  { name: "Nail Clipping" },
  { name: "Dietary Consulting" },
  { name: "Nail Clipping" },
  { name: "Dietary Consulting" },
];

const FavoriteTreatmentForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-0 rounded-lg bg-white p-2 md:divide-x divide-gray-300"
      >
        <div className="sm:col-span-2 md:col-span-4 pl-2">
          <FavoriteTreatmentSearchBox />
        </div>

        <div className="col">
          <button
            type="submit"
            className="w-full btn rounded-md sm:rounded-none sm:rounded-r-md px-3 py-3 text-white bg-primary-500 hover:bg-primary-600"
          >
            Search Now
          </button>
        </div>
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

export default FavoriteTreatmentForm;
