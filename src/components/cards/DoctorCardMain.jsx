import { MapPinIcon, StarIcon } from "@heroicons/react/20/solid";

const DoctorCardMain = ({
  photo,
  name,
  role,
  location,
  badges,
  rating,
  finance,
  experience,
  satisfaction,
}) => {
  return (
    <div className="h-full w-full bg-white  rounded shadow-md overflow-hidden">
      <div className="md:flex p-2">
        <div className="md:flex-shrink-0">
          <img
            className="h-28 w-28 object-cover rounded-md"
            src={photo}
            alt={name}
          />
        </div>
        <div className="p-3 md:p-4 flex-1 relative">
          <div className="absolute top-0 right-0 p-2">
            <div className="flex justify-center gap-x-1 text-sm text-gray-400">
              <StarIcon
                className="h-4 w-4 text-primary-500"
                aria-hidden="true"
              />
              <span className="font-semibold">{rating}</span>
            </div>
          </div>
          <div className="capitalize tracking-wide text-base text-primary-600  font-medium">
            {role}
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 ">{name}</h2>
            <p className="text-gray-600  text-sm flex gap-1">
              <span className="inline-block h-6 w-6 min-w-[1.5rem]">
                <MapPinIcon className="block h-full w-full text-primary-500 " />
              </span>
              <div className="mt-1">
                <span>{location}</span>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="text-sm bg-primary-50  text-gray-600   divide-y-2 divide-gray-200 rounded-lg p-2">
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Experience:</h5>
            <span className="font-semibold">{experience}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Satisfaction:</h5>
            <span className="font-semibold">{satisfaction}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Consultation fee:</h5>
            <span className="font-semibold">{finance}</span>
          </div>
        </div>
        <div className="mt-3">
          <h5 className="mb-2 text-xs text-gray-400  font-medium">
            QUALIFICATIONS:
          </h5>
          <div className="flex flex-wrap">
            {badges.map((badge, index) => (
              <span
                key={`badge-${index}`}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-50   text-primary-800 mr-2 mb-2"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* === */}
    </div>
  );
};

export default DoctorCardMain;
