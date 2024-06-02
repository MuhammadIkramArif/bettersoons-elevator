import React from "react";

const PetCard = ({ imageUrl, title, location, paragraph }) => {
  return (
    <div className="block hover:opacity-90 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="aspect-[16/12] bg-gray-50 rounded-t-lg relative">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={imageUrl}
          alt="..."
        />
      </div>
      <div className="p-4">
        <h4
          title={title}
          className="text-primary-500 font-medium text-xl line-clamp-1 mb-0 capitalize"
        >
          {title}
        </h4>
        <h6 className="mb-2 text-gray-500">{location}</h6>
        <p title={paragraph} className="mb-0 line-clamp-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default PetCard;
