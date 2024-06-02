import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import ScheduleSmallCard from "./ScheduleSmallCard";

const SearchCard = ({
  photo,
  name,
  role,
  location,
  distance,
  badges,
  rating,
  finance,
  experience,
  satisfaction,
  schedule,
  availabilityData,
}) => {
  return (
    <>
      <div className="h-full w-full bg-white  rounded shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col">
            <div className="md:flex p-2">
              <div className="md:flex-shrink-0">
                <img
                  className="h-28 w-28 object-cover rounded-md"
                  src={photo}
                  alt={name}
                />
              </div>
              <div className="p-3 md:p-4 flex-1">
                <div className="flex gap-x-1 text-sm text-gray-400 ">
                  <StarIcon
                    className="h-4 w-4 text-primary-500 "
                    aria-hidden="true"
                  />
                  <span className="font-semibold">{rating}</span>
                </div>
                <div className="capitalize tracking-wide text-base text-primary-600  font-medium">
                  {role}
                </div>

                <div>
                  <Link
                    to="/doctor-detail"
                    className="text-xl font-bold text-gray-900  hover:text-primary-700 "
                  >
                    {name}
                  </Link>
                  <p className="mt-1 text-gray-600  text-sm flex gap-1">
                    <span className="inline-block h-6 w-6 min-w-[1.5rem]">
                      <MapPinIcon className="block h-full w-full text-primary-500 " />
                    </span>
                    <div className="mt-1">
                      <span>
                        <span className="font-semibold">{distance}</span>{" "}
                        {location}
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="text-sm bg-primary-50  text-gray-500   divide-y-2 divide-gray-200 rounded-lg p-2">
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

              <div className="mt-3 flex flex-wrap">
                {badges.map((badge) => (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-50 text-primary-800 mr-2 mb-2">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flex items-center gap-4 text-sm">
              <h6 className="mr-auto font-semibold capitalize ">
                Fri, Mar 1 – Wed, Mar 6
              </h6>
              <div className="flex items-center justify-center gap-1">
                <button
                  type="button"
                  className="text-gray-400 hover:text-primary-600  "
                >
                  <ChevronLeftIcon className="h-7 w-7" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="text-gray-400 hover:text-primary-600  "
                >
                  <ChevronRightIcon className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2">
              {schedule.map(({ day, appts, date, time }) => (
                <ScheduleSmallCard
                  key={`schedule-${day}`}
                  day={day}
                  appts={appts}
                  date={date}
                  time={time}
                >
                  <div>
                    <div className="card pb-3 mb-2 border-b-2 border-gray-300">
                      <div className="md:flex">
                        <div className="md:flex-shrink-0">
                          <img
                            className="h-28 w-28 object-cover rounded-md"
                            src={photo}
                            alt={name}
                          />
                        </div>
                        <div className="p-3 md:p-4 flex-1">
                          <div className="flex gap-x-1 text-sm text-gray-400 ">
                            <StarIcon
                              className="h-4 w-4 text-primary-500 "
                              aria-hidden="true"
                            />
                            <span className="font-semibold">{rating}</span>
                          </div>
                          <div className="capitalize tracking-wide text-base text-primary-600  font-medium">
                            {role}
                          </div>

                          <div>
                            <h2 className="text-xl font-bold text-gray-900 ">
                              {name}
                            </h2>
                            <p className="text-gray-600  text-sm flex gap-1">
                              <span className="inline-block h-6 w-6 min-w-[1.5rem]">
                                <MapPinIcon className="block h-full w-full text-primary-500 " />
                              </span>
                              <div className="mt-1">
                                <span>
                                  <span className="font-semibold">
                                    {distance}
                                  </span>{" "}
                                  {location}
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* === */}
                      <div className="flex items-center gap-4 text-lg">
                        <h6 className="mr-auto font-semibold capitalize">
                          Fri, Mar 1 – Wed, Mar 6
                        </h6>
                        <div className="flex items-center justify-center gap-1">
                          <button
                            type="button"
                            className="text-gray-400  hover:text-primary-600"
                          >
                            <ChevronLeftIcon
                              className="h-7 w-7"
                              aria-hidden="true"
                            />
                          </button>

                          <button
                            type="button"
                            className="text-gray-400  hover:text-primary-600"
                          >
                            <ChevronRightIcon
                              className="h-7 w-7"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">
                          Choose a time with {name} that works for you
                        </p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2 overflow-auto max-h-96">
                      {availabilityData.map((item, index) => (
                        <li key={`availability-${index}`}>
                          <h6 className="font-medium mb-1">{item.date}</h6>
                          <div className="flex flex-wrap gap-2">
                            {item.timeslots.map((slot, index) => (
                              <div
                                key={`availability-slot-${index}`}
                                className={`font-medium text-sm cursor-pointer rounded ${
                                  slot === "No availability"
                                    ? "text-gray-500"
                                    : "p-2 bg-primary-50 text-primary-500 hover:bg-primary-600 hover:text-white"
                                }`}
                              >
                                {slot}
                              </div>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScheduleSmallCard>
              ))}
            </div>
          </div>
        </div>

        {/* === */}
      </div>
    </>
  );
};

export default SearchCard;
