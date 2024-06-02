import { MapPinIcon } from "@heroicons/react/20/solid";

const PatientCardMain = ({
  photo,
  name,
  animalKind,
  petName,
  ownerName,
  email,
  phone,
  address,
  problemDescription,
}) => {
  return (
    <div className="h-full w-full bg-white rounded shadow-md overflow-hidden">
      <div className="md:flex p-2">
        <div className="md:flex-shrink-0">
          <img
            className="h-28 w-28 object-cover rounded-md"
            src={photo}
            alt={ownerName}
          />
        </div>
        <div className="p-3 md:p-4 flex-1 relative">
          <a
            href="tel:+123-456-7890"
            className="capitalize tracking-wide text-base text-primary-600 hover:text-primary-500 font-medium"
          >
            +123-456-7890
          </a>
          <div>
            <h2 className="text-xl font-bold text-gray-900 ">{ownerName}</h2>
            <p className="text-gray-600  text-sm flex gap-1">
              <span className="inline-block h-6 w-6 min-w-[1.5rem] bg-primary-500 rounded-full p-1">
                <MapPinIcon className="block h-full w-full text-primary-100" />
              </span>
              <div className="mt-1">
                <span>{address}</span>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="text-sm bg-primary-50  text-gray-500   divide-y-2 divide-gray-200 rounded-lg p-2">
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Kind of Animal:</h5>
            <span className="font-semibold">{animalKind}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Pet Name:</h5>
            <span className="font-semibold">{petName}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Email:</h5>
            <span className="font-semibold">{email}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Phone:</h5>
            <span className="font-semibold">{phone}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-between py-1">
            <h5>Problem Description:</h5>
            <span className="font-semibold">{problemDescription}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCardMain;
