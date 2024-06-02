import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function FavoriteTreatmentSearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    { name: "Vaccination" },
    { name: "Nail Clipping" },
    { name: "Dietary Consulting" },
    { name: "Nail Clipping" },
    { name: "Dietary Consulting" },
  ]; // Your list of items

  // Function to handle search query change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="relative h-full">
      <div className="h-full flex items-center">
        <MagnifyingGlassIcon className="h-5 w-5 min-w-[1.25rem] text-gray-500" />
        <input
          type="text"
          placeholder="Search of Treatments..."
          className="pl-1 border-0 focus:ring-0 w-full"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {searchQuery !== "" && ( // Conditionally render the list if search query is not empty
        <ul className="absolute w-full left-0 bg-white p-1 rounded-b-xl max-h-64 overflow-auto">
          {filteredItems.map((item, index) => (
            <li key={index}>
              <button type="button" className="search-button">
                <h6 className="capitalize text-sm">
                  <span title={item.name}>{item.name}</span>
                </h6>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteTreatmentSearchBox;
