import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Johanna",
      specialty: "Frauenarzt / Gynäkologe - Rodgau",
      location: "Isar - Baston",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Max",
      specialty: "Orthopedic Surgeon",
      location: "Berlin",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sophie",
      specialty: "Pediatrician",
      location: "Munich",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Johanna",
      specialty: "Frauenarzt / Gynäkologe - Rodgau",
      location: "Isar - Baston",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Max",
      specialty: "Orthopedic Surgeon",
      location: "Berlin",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sophie",
      specialty: "Pediatrician",
      location: "Munich",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Johanna",
      specialty: "Frauenarzt / Gynäkologe - Rodgau",
      location: "Isar - Baston",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Max",
      specialty: "Orthopedic Surgeon",
      location: "Berlin",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sophie",
      specialty: "Pediatrician",
      location: "Munich",
    },
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
          placeholder="Cardiology, orthopedic surgeon, etc."
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
                <div className="h-10 w-10 min-w-[2.5rem] rounded-full">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={item.imageUrl}
                    alt="..."
                  />
                </div>
                <div>
                  <h6 className="capitalize flex gap-1">
                    <span title={item.name}>{item.name}</span>
                    <span title={item.location}>{item.location}</span>
                  </h6>
                  <h6 title={item.specialty} className="text-xs capitalize">
                    {item.specialty}
                  </h6>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
