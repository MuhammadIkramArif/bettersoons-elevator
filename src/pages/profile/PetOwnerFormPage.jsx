import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { TrashIcon } from "@heroicons/react/24/outline";

const PetOwnerFormPage = () => {
  const [medicalFile, setMedicalFile] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile);
  };

  const handlePhotoDelete = () => {
    setPhoto(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMedicalFile(file);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-black mb-4">
        Pet Owner Profile
      </h1>

      <div className="bg-white rounded shadow-md p-4 md:p-6">
        <form>
          <div className="mb-4 relative">
            <div className="rounded-full bg-gray-100 h-[6.375rem] w-[6.375rem] min-w-[6.375rem]]">
              {photo ? (
                <img
                  className="rounded-full h-full w-full object-cover"
                  src={URL.createObjectURL(photo)}
                  alt="..."
                />
              ) : (
                <img
                  className="rounded-full h-full w-full object-cover"
                  src="/assets/images/placeholder-1.png"
                  alt="..."
                />
              )}
            </div>
            <div className="mt-4 flex gap-4">
              <input
                id="photo"
                type="file"
                hidden
                onChange={handlePhotoChange}
                accept="image/*"
              />
              <button
                type="button"
                className="py-1 px-2 rounded-md bg-primary-500 text-white hover:bg-primary-600"
                onClick={() => document.getElementById("photo").click()}
              >
                <span className="font-medium text-sm">Upload picture</span>
              </button>
              <button
                type="button"
                onClick={handlePhotoDelete}
                disabled={!photo}
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

          <div className="max-w-[60rem] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
            <div className="form-group">
              <label htmlFor="name" className="mb-2 block">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              />
            </div>
            <div className="form-group">
              <label htmlFor="petAge" className="mb-2 block ">
                Age of Pet
              </label>
              <select
                id="petAge"
                name="petAge"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              >
                <option value="" selected disabled>
                  Age of Pet
                </option>
                <option value="0.25">0 - 6 months</option>
                <option value="0.5">6 months - 1 year</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10+ years</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="animalKind" className="mb-2 block ">
                Animal kind
              </label>
              <select
                id="animalKind"
                name="animalKind"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              >
                <option value="" selected disabled>
                  Animal kind
                </option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
                <option value="mouse">Mouse</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="race" className="mb-2 block ">
                Race
              </label>
              <select
                id="race"
                name="race"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              >
                <option value="" selected disabled>
                  Race
                </option>
                {/* Populate this dropdown based on the selected animal kind */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="mb-2 block ">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              >
                <option value="" selected disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="medicalConditions" className="mb-2 block ">
                Medical conditions
              </label>
              <select
                id="medicalConditions"
                name="medicalConditions"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              >
                <option value="" selected disabled>
                  Medical conditions
                </option>
                <option value="arthritis">Arthritis</option>
                <option value="pneumonia">Pneumonia</option>
                <option value="asthma">Asthma</option>
                {/* Add other medical conditions */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="allergies" className="mb-2 block ">
                Allergies
              </label>
              <select
                id="allergies"
                name="allergies"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              >
                <option value="" selected disabled>
                  Allergies
                </option>
                <option value="wheat">Wheat</option>
                <option value="antibiotics">Antibiotics</option>
                {/* Add other allergies */}
              </select>
            </div>
            {/* Medical Documents Upload */}
            <div className="form-group">
              <label htmlFor="medicalDocuments" className="mb-2 block">
                Medical documents
              </label>
              <input
                type="file"
                id="medicalDocuments"
                name="medicalDocuments"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="block w-full rounded-md border-0 px-2 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              />
              {/* Display selected file name */}
              {medicalFile && (
                <div className="flex items-center space-x-2 mt-1 text-sm">
                  <span className="text-gray-500">Selected file:</span>
                  <span className="text-gray-800">{medicalFile.name}</span>
                </div>
              )}
            </div>

            <div className="form-group md:col-span-2 xl:col-span-4">
              <label htmlFor="medicalHistory" className="mb-2 block ">
                Medical history
              </label>
              <textarea
                id="medicalHistory"
                name="medicalHistory"
                rows="4"
                placeholder="Medical history"
                className="block w-full rounded-md border-0 py-3 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-400"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default PetOwnerFormPage;
