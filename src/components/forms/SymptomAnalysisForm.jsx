import React from "react";
import { useNavigate } from "react-router-dom";

const petHurts = [
  { id: "dog", title: "Dog" },
  { id: "cat", title: "Cat" },
];

const SymptomAnalysisForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 rounded-lg bg-white p-3 sm:p-5"
      >
        <div className="col">
          <label className="text-base font-semibold text-gray-500">
            Is your pet hurt or ill?
          </label>
          <fieldset className="mt-2">
            <div className="flex items-center space-x-4">
              {petHurts.map((item) => (
                <div key={item.id} className="flex items-center">
                  <input
                    id={item.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={item.id === "dog"}
                    className="h-4 w-4 border-gray-400 text-primary-500 focus:ring-primary-500"
                  />
                  <label
                    htmlFor={item.id}
                    className="ml-3 block text-sm font-medium leading-6 text-gray-700"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="col">
          <textarea
            rows={4}
            type="text"
            placeholder="Description..."
            className="w-full border-gray-300 rounded-md focus:ring-primary-500"
          />
        </div>
        <button
          type="submit"
          className="btn rounded-md sm:rounded-none sm:rounded-r-md px-3 py-3 text-white bg-primary-500 hover:bg-primary-600"
        >
          Search Now
        </button>
      </form>
    </div>
  );
};

export default SymptomAnalysisForm;
