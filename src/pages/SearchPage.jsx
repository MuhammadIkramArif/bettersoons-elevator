import React, { useState } from "react";
import Container from "../components/ui/Container";
import DropdownButton from "../components/ui/DropdownButton";
import SearchCard from "../components/cards/SearchCard";
import doctors from "../data/doctorsData";
import HeroSection from "../components/sections/HeroSection";
import DashboardMap from "../components/maps/DashboardMap";

const timeOfday = [
  {
    id: "early-morning",
    name: "early-morning",
    label: "Early morning • Starts before 10 am (698)",
  },
  {
    id: "morning",
    name: "morning",
    label: "Morning • Starts before 12 pm (857)",
  },
  {
    id: "afternoon",
    name: "afternoon",
    label: "Afternoon • Starts after 12 pm (932)",
  },
  {
    id: "evening",
    name: "evening",
    label: "Evening • Starts after 5 pm (430)",
  },
];

const distanceOptions = [
  { label: "5 miles (9)", value: 5 },
  { label: "10 miles (15)", value: 10 },
  { label: "25 miles (60)", value: 25 },
  { label: "50 miles (120)", value: 50 },
];

const specialties = [
  { label: "Primary Care Doctor", value: 154 },
  { label: "Nurse Practitioner", value: 108 },
  { label: "Family Nurse Practitioner", value: 105 },
  { label: "Internist", value: 102 },
  { label: "Family Physician", value: 83 },
];

const allSpecialties = [
  { label: "Acupuncturist", value: 1 },
  { label: "Acute Care Nurse Practitioner (Adult / Gerontology)", value: 2 },
  { label: "Addiction Specialist", value: 1 },
  { label: "Adult Nurse Practitioner", value: 28 },
  { label: "Adult Psychiatric & Mental Health Nurse Practitioner", value: 23 },
  { label: "Allergist", value: 13 },
  { label: "Cardiologist", value: 16 },
  { label: "Dermatologist", value: 1 },
  { label: "Emergency Medicine Physician", value: 2 },
  { label: "Endocrinologist", value: 2 },
  { label: "Family Nurse Practitioner", value: 45 },
  { label: "Family Physician", value: 149 },
  { label: "Family Psychiatric & Mental Health Nurse Practitioner", value: 4 },
  { label: "Gastroenterologist", value: 24 },
  { label: "Geriatrician", value: 5 },
  { label: "Gerontology Nurse Practitioner", value: 9 },
  { label: "Gynecologist", value: 5 },
  { label: "Immunologist", value: 9 },
  { label: "Infectious Disease Specialist", value: 11 },
  { label: "Internist", value: 369 },
  { label: "Interventional Cardiologist", value: 2 },
  { label: "Maternal Fetal Medicine Specialist", value: 1 },
  { label: "Neurologist", value: 1 },
  { label: "Nurse Practitioner", value: 126 },
  { label: "Nurse Practitioner (Allergy)", value: 1 },
  { label: "Nurse Practitioner (Dermatology)", value: 8 },
  { label: "Nurse Practitioner (Gastroenterology)", value: 1 },
  { label: "Nurse Practitioner (OB-GYN)", value: 20 },
  { label: "Nurse Practitioner (Orthopedics)", value: 3 },
  { label: "Nurse Practitioner (Pain Management)", value: 1 },
  { label: "Nurse Practitioner (Pediatrics)", value: 2 },
  { label: "Nurse Practitioner (Psychiatry)", value: 2 },
  { label: "Nurse Practitioner (Urology)", value: 11 },
  { label: "OB-GYN", value: 5 },
  { label: "Obstetrician", value: 4 },
  { label: "Pediatric Allergist", value: 3 },
  { label: "Pediatric Hematologist", value: 1 },
  { label: "Pediatric Infectious Disease Specialist", value: 1 },
  { label: "Pediatric Nurse Practitioner", value: 1 },
  { label: "Pediatric Oncologist", value: 1 },
  { label: "Pediatrician", value: 85 },
  { label: "Physician Assistant", value: 63 },
  { label: "Physician Assistant (Allergy)", value: 1 },
  { label: "Physician Assistant (Dermatology)", value: 8 },
  { label: "Physician Assistant (OB-GYN)", value: 1 },
  { label: "Physician Assistant (Pain Management)", value: 1 },
  { label: "Physician Assistant (Pediatrics)", value: 1 },
  { label: "Physician Assistant (Urology)", value: 5 },
  { label: "Primary Care Doctor", value: 473 },
  { label: "Pulmonologist", value: 3 },
  { label: "Rheumatologist", value: 3 },
  { label: "Sleep Medicine Specialist", value: 1 },
  { label: "Sports Medicine Specialist", value: 3 },
  { label: "Travel Medicine Specialist", value: 8 },
  { label: "Urgent Care Clinic", value: 27 },
  { label: "Urgent Care Specialist", value: 11 },
];

const availabilityData = [
  {
    date: "Thu, Apr 6",
    timeslots: ["4:00 pm"],
  },
  {
    date: "Fri, Apr 7",
    timeslots: ["No availability"],
  },
  {
    date: "Sat, Apr 8",
    timeslots: ["No availability"],
  },
  {
    date: "Sun, Apr 9",
    timeslots: [
      "10:30 am",
      "11:00 am",
      "1:30 pm",
      "2:00 pm",
      "2:30 pm",
      "3:00 pm",
      "3:30 pm",
      "4:00 pm",
    ],
  },
  {
    date: "Mon, Apr 10",
    timeslots: ["No availability"],
  },
  {
    date: "Tue, Apr 11",
    timeslots: ["No availability"],
  },
  {
    date: "Wed, Apr 12",
    timeslots: ["10:30 am", "2:00 pm"],
  },
  {
    date: "Thu, Apr 13",
    timeslots: ["10:30 am", "11:00 am", "1:30 pm"],
  },
];

const SearchPage = () => {
  const [selectedDistance, setSelectedDistance] = useState(5);
  const [doctorLocation, setDoctorLocation] = useState(doctors[0].locationMap);

  const handleDistanceChange = (event) => {
    setSelectedDistance(parseInt(event.target.value, 10));
  };

  const handleMouseEnter = (locationMap) => {
    // Update the doctorLocation state when hovering over a card
    setDoctorLocation(locationMap);
  };

  return (
    <main>
      <HeroSection />
      <section className="py-10">
        <Container>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="col lg:col-span-2">
                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <DropdownButton title="Time of day">
                    <h3 className="mb-2 text-base font-semibold ">
                      Do you have a preferred time of day?
                    </h3>
                    <ul className="space-y-2">
                      {timeOfday.map((item) => (
                        <li key={item.id}>
                          <div className="relative flex gap-x-2">
                            <div className="flex h-6 items-center">
                              <input
                                id={item.id}
                                name={item.name}
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-400 text-primary-600  focus:ring-primary-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor={item.id}
                                className="font-medium text-gray-500 text-sm"
                              >
                                <span className="text-black ">
                                  {item.label}
                                </span>
                              </label>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </DropdownButton>
                  <DropdownButton title="Distance">
                    <ul className="space-y-2">
                      {distanceOptions.map((option) => (
                        <li key={option.value}>
                          <label
                            htmlFor={option.label}
                            className="flex items-center cursor-pointer"
                          >
                            <input
                              name="distance"
                              id={option.label}
                              value={option.value}
                              checked={selectedDistance === option.value}
                              onChange={handleDistanceChange}
                              type="radio"
                              className="form-radio h-4 w-4 text-primary-600  transition duration-150 ease-in-out"
                            />
                            <span className="ml-2 text-sm leading-5 text-gray-700 ">
                              {option.label}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </DropdownButton>
                  <DropdownButton title="Specialty">
                    <div className="mb-3">
                      <h3 className="mb-2 text-base font-semibold ">
                        Common specialties for illness
                      </h3>
                      <ul className="space-y-2">
                        {specialties.map((specialty) => (
                          <li key={specialty.label}>
                            <div className="relative flex gap-x-2">
                              <div className="flex h-6 items-center">
                                <input
                                  id={`specialty${specialty.label}`}
                                  name={`specialty${specialty.label}`}
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-400 text-primary-600  focus:ring-primary-600"
                                />
                              </div>
                              <div className="text-sm leading-6">
                                <label
                                  htmlFor={`specialty${specialty.label}`}
                                  className="font-medium text-gray-500 text-sm"
                                >
                                  <span className="text-black ">{`${specialty.label}(${specialty.value})`}</span>
                                </label>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-semibold ">
                        All specialties for illness (a-z)
                      </h3>
                      <ul className="space-y-2">
                        {allSpecialties.map((specialty) => (
                          <li key={specialty.label}>
                            <div className="relative flex gap-x-2">
                              <div className="flex h-6 items-center">
                                <input
                                  id={specialty.label}
                                  name={specialty.label}
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-400 text-primary-600  focus:ring-primary-600"
                                />
                              </div>
                              <div className="text-sm leading-6">
                                <label
                                  htmlFor={specialty.label}
                                  className="font-medium text-gray-500 text-sm"
                                >
                                  <span className="text-black ">{`${specialty.label}(${specialty.value})`}</span>
                                </label>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DropdownButton>
                </div>
                {/* Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 pb-2 mb-2 border-b border-gray-400">
                  <h3 className="text-xl font-semibold capitalize ">
                    4 results
                  </h3>
                </div>
                {/* Cards */}
                <div>
                  <ul className="space-y-4">
                    {doctors.map((doctor, index) => (
                      <li
                        key={`${doctor.name}-${index}`}
                        onMouseEnter={() =>
                          handleMouseEnter(doctor.locationMap)
                        }
                      >
                        <SearchCard
                          {...doctor}
                          availabilityData={availabilityData}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* == */}
              <div className="col">
                <div className="sticky top-20 h-[40rem]">
                  <DashboardMap doctorLocation={doctorLocation} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SearchPage;
