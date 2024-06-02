import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const DoctorCard = ({
  imageUrl,
  name,
  experience,
  specialization,
  role,
  location,
  rating,
}) => {
  return (
    <Link
      to
      className="block hover:opacity-90 bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="aspect-[16/12] bg-gray-50 rounded-t-lg">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={imageUrl}
          alt="..."
        />
      </div>
      <div className="p-4 relative">
        <div className="absolute top-0 right-0 p-2">
          <div className="flex items-center justify-center gap-x-1 text-sm text-primary-500">
            <span className="font-semibold">{rating}</span>
            <StarIcon className="h-4 w-4 text-primary-500" aria-hidden="true" />
          </div>
        </div>
        <h6 className="text-sm font-semibold text-gray-600">{role}</h6>
        <h4
          title={name}
          className="text-primary-500 font-medium text-xl line-clamp-1 mb-2 capitalize"
        >
          {name}
        </h4>

        <ul className="mt-2 text-base space-y-1">
          <li className="flex items-center gap-1">
            <b>Location:</b>
            <span
              title={location}
              className="text-sm text-gray-500 line-clamp-1"
            >
              {location}
            </span>
          </li>
          <li className="flex flex-col">
            <b className="text-xl text-primary-500">{experience}</b>
            <span className="text-gray-500">Years of Experience:</span>
          </li>
          <li className="flex flex-col">
            <b>Specialization:</b>
            <span title={specialization} className="line-clamp-1">
              {specialization}
            </span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default DoctorCard;
