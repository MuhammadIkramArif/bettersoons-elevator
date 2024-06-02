import { DocumentIcon } from "@heroicons/react/24/outline";
import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import DoctorCardMain from "../components/cards/DoctorCardMain";
import NumberPatientsChart from "../components/charts/NumberPatientsChart";

const doctor = {
  photo:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  name: "Dr. John Smith",
  role: "Cardiologist",
  rating: 4.75,
  location: "Mount Sinai Doctors Health Quarteres NoHo",
  badges: [
    "MD",
    "Board Certified",
    "MD",
    "F.C.P.S",
    "M.B.B.S",
    "Gynecology",
    "Obstetrics",
  ],
  experience: "25 years",
  satisfaction: "97%",
  finance: "100 $",
  schedule: [
    {
      day: "Monday",
      appts: 1,
      time: "9:00 AM - 12:00 PM",
      date: "mar 16",
    },
    { day: "Tuesday", time: "1:00 PM - 4:00 PM", date: "mar 17" },
    {
      day: "Wednesday",
      appts: 4,
      time: "9:00 AM - 12:00 PM",
      date: "mar 18",
    },
    { day: "Thursday", time: "1:00 PM - 4:00 PM", date: "mar 19" },
    {
      day: "Friday",
      appts: 16,
      time: "9:00 AM - 12:00 PM",
      date: "mar 20",
    },
    {
      day: "Saturday",
      appts: 5,
      time: "10:00 AM - 1:00 PM",
      date: "mar 21",
    },
    { day: "Sunday", time: "Not available", date: "mar 22" },
    {
      day: "Monday",
      appts: 1,
      time: "9:00 AM - 12:00 PM",
      date: "mar 23",
    },
    { day: "Tuesday", time: "1:00 PM - 4:00 PM", date: "mar 24" },
    {
      day: "Wednesday",
      appts: 4,
      time: "9:00 AM - 12:00 PM",
      date: "mar 25",
    },
    { day: "Thursday", time: "1:00 PM - 4:00 PM", date: "mar 26" },
    {
      day: "Friday",
      appts: 16,
      time: "9:00 AM - 12:00 PM",
      date: "mar 27",
    },
    {
      day: "Saturday",
      appts: 5,
      time: "10:00 AM - 1:00 PM",
      date: "mar 28",
    },
    { day: "Sunday", time: "Not available", date: "mar 29" },
  ],
};

const todayPatients = [
  {
    name: "Lindsay Walton",
    lastVisitDate: "12/05/2016",
    kind: "Fever",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 1",
    lastVisitDate: "12/05/2016",
    kind: "Cholera",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 2",
    lastVisitDate: "12/05/2016",
    kind: "Jaundice",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 2",
    lastVisitDate: "12/05/2016",
    kind: "Typhod",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 3",
    lastVisitDate: "12/05/2016",
    kind: "Maleria",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-semibold text-black mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-1">
            <DoctorCardMain {...doctor} />
          </div>
          <div className="xl:col-span-2">
            <div className="h-full w-full bg-white   rounded shadow-md p-4">
              <div className="mb-2 flex items-center gap-2 border-b-2  pb-2">
                <h5 className="text-lg font-semibold capitalize">
                  Schedule Time
                </h5>
              </div>

              <div className="mt-4 overflow-x-hidden">
                <div className="overflow-x-auto animate-feature-card">
                  <table className="w-full text-gray-700 bg-gray-50  table-auto">
                    <thead>
                      <tr className="bg-primary-600 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Day</th>
                        <th className="py-3 px-6 text-left">Appointment</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600   text-sm font-light">
                      {doctor.schedule.slice(0, 7).map((item, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-200  hover:bg-gray-100 font-medium ${
                            item.appts && "bg-primary-50 text-black"
                          }`}
                        >
                          <td className="py-2 px-6 capitalize">{item.day}</td>
                          <td className="py-2 px-6">
                            {item.appts ? item.appts : "No"}{" "}
                            {item.appts === 1 ? "appt" : "appts"}{" "}
                          </td>
                          <td className="py-2 px-6 capitalize">{item.date}</td>
                          <td className="py-2 px-6 text-right text-xs">
                            {item.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2">
            <div className="h-full w-full bg-white   rounded shadow-md p-4">
              <h3 className="text-primary-900  text-lg font-semibold capitalize mb-4">
                Todays Appointment
              </h3>
              <div>
                <div className="overflow-x-auto align-middle">
                  <table className="min-w-full divide-y divide-gray-300 ">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-2.5 px-3 text-left text-sm font-bold text-primary-900 "
                        >
                          Owner Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2.5 text-left text-sm font-bold text-primary-900 "
                        >
                          Kind
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2.5 text-left text-sm font-bold text-primary-900 "
                        >
                          Last Visit
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-2.5 text-center text-sm font-bold text-primary-900 "
                        >
                          Report
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200  bg-white  ">
                      {todayPatients.slice(0, 5).map((person, index) => (
                        <tr
                          className="hover:bg-gray-100 hover:"
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
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                            <span className="inline-flex rounded-md bg-primary-50  px-2 text-xs font-semibold leading-5 text-primary-700">
                              {person.kind}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                            <div className="text-gray-900 ">
                              {person.lastVisitDate}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                            <a
                              href="http://"
                              className="text-primary-500  hover:text-primary-600 flex justify-center"
                              download
                            >
                              <DocumentIcon className="h-5 w-5" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-1">
            <div className="h-full w-full bg-white   rounded shadow-md p-4">
              <h3 className="text-primary-900  text-lg font-semibold capitalize mb-4">
                Number Of Patients
              </h3>
              <div>
                <NumberPatientsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
