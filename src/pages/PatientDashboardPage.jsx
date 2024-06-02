import React, { useState } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import PatientCardMain from "../components/cards/PatientCardMain";
import DoctorsAppointmentTable from "../components/tables/DoctorsAppointmentTable";
import SimilarDoctorsSection from "../components/sections/SimilarDoctorsSection";
import BookAppointmentModal from "../components/modals/BookAppointmentModal";

const patient = {
  photo:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  animalKind: "Dog",
  petName: "Buddy",
  ownerName: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
  address: "123 Main St, City, Country",
  problemDescription: "Coughing and sneezing",
};

const doctorsAppointment = [
  {
    name: "Lindsay Walton",
    role: "Radiologist",
    date: "12 June '20",
    time: "09:00-10:00",
    treatement: "CT scans",
    contactNumber: "+123 676545655",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 1",
    role: "Radiologist",
    date: "12 June '20",
    time: "09:00-10:00",
    treatement: "CT scans",
    contactNumber: "+123 676545655",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 2",
    role: "Radiologist",
    date: "12 June '20",
    time: "09:00-10:00",
    treatement: "CT scans",
    contactNumber: "+123 676545655",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 2",
    role: "Radiologist",
    date: "12 June '20",
    time: "09:00-10:00",
    treatement: "CT scans",
    contactNumber: "+123 676545655",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lindsay Walton 3",
    role: "Radiologist",
    date: "12 June '20",
    time: "09:00-10:00",
    treatement: "CT scans",
    contactNumber: "+123 676545655",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const PatientDashboardPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <DashboardLayout>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-2xl font-semibold text-black mr-auto">
            Patient Dashboard
          </h1>
          <div>
            <BookAppointmentModal />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-3">
            <div className="h-full w-full bg-white rounded shadow-md p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="h-36 w-72">
                  <img
                    src="/assets/images/svgs/Tierarzt-Vs01-02-04.svg"
                    alt=".."
                    className="block h-full w-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h6 className="font-medium ">Welcome back</h6>
                  <h4 className="text-3xl font-semibold text-primary-500 ">
                    John Smith!
                  </h4>
                  <p className="text-gray-500  text-base lg:text-lg leading-normal">
                    We would like to take this opportunity to welcome you to our
                    practice and to thank you for choosing our physicians to
                    participate in your healthcare. We look forward to providing
                    you with personalized, comprehensive health care focusing on
                    wellness and prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-1">
            <PatientCardMain {...patient} />
          </div>
          <div className="xl:col-span-2">
            <div className="h-full w-full bg-white  rounded shadow-md p-4 overflow-hidden">
              <div className="mb-2 flex items-center gap-2 border-b-2 pb-2">
                <button
                  type="button"
                  className={`w-full text-primary-700  hover:bg-primary-50  text-xs sm:text-base font-semibold capitalize rounded py-2 px-3 ${
                    tab === 0 && "bg-primary-50 "
                  } `}
                  onClick={() => setTab(0)}
                >
                  <span>Upcoming Appointment</span>
                </button>
                <button
                  type="button"
                  className={`w-full text-primary-700  hover:bg-primary-50  text-xs sm:text-base font-semibold capitalize rounded py-2 px-3 ${
                    tab === 1 && "bg-primary-50 "
                  } `}
                  onClick={() => setTab(1)}
                >
                  Past Appointment
                </button>
              </div>
              {tab === 0 && (
                <div className="animate-feature-card">
                  <DoctorsAppointmentTable
                    doctorsAppointment={doctorsAppointment}
                  />
                </div>
              )}
              {tab === 1 && (
                <div className="animate-feature-card">
                  <DoctorsAppointmentTable
                    doctorsAppointment={doctorsAppointment}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="xl:col-span-3">
            <div className="h-full w-full bg-white   rounded shadow-md p-1">
              <SimilarDoctorsSection />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboardPage;
