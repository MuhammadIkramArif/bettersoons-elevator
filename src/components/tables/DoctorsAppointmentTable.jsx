import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const DoctorsAppointmentTable = ({ doctorsAppointment }) => {
  return (
    <div className="overflow-x-auto h-56 align-middle">
      <table className="min-w-full divide-y divide-gray-300  ">
        <tbody className="divide-y divide-gray-200  bg-white  ">
          {doctorsAppointment.map((person, index) => (
            <tr
              className="bg-gray-50   hover:bg-gray-100"
              key={`${person.name}-${index}`}
            >
              <td className="whitespace-nowrap py-3 px-3 text-sm">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={person.image}
                      alt="..."
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900 ">
                      {person.name}
                    </div>
                    <div className="text-gray-500 ">{person.role}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500 ">
                <div>
                  <div className="font-medium text-gray-900 ">
                    {person.date}
                  </div>
                  <div className="text-gray-500 ">{person.time}</div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500 ">
                <div>
                  <div className="text-gray-500 ">Treatement</div>
                  <div className="font-medium text-gray-900 ">
                    {person.treatement}
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500 ">
                <div>
                  <div className="text-gray-500 ">Contact Number</div>
                  <div className="font-medium text-gray-900 ">
                    {person.contactNumber}
                  </div>
                </div>
              </td>

              <td className="relative whitespace-nowrap py-3 px-3 text-right text-sm font-medium">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-primary-50 "
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-600 " />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-primary-50 "
                  >
                    <XCircleIcon className="h-6 w-6 text-red-500 " />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsAppointmentTable;
