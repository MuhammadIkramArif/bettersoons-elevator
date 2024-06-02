import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";

const ScheduleSmallCard = ({ appts, day, date, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform  rounded-lg bg-white   px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute -top-3 -right-3 bg-white   border border-gray-500 text-gray-500 hover:border-primary-700 hover:text-primary-700  rounded-full h-8 w-8 flex items-center justify-center"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div
        onClick={() => {
          if (appts) setOpen(true);
        }}
        className={`rounded-lg shadow p-2 min-w-[4rem] flex flex-col flex-1 text-sm ${
          appts ? "bg-primary-100 cursor-pointer" : "bg-gray-50"
        }`}
      >
        <h3 className="mb-1">{day.slice(0, 3)}</h3>
        <p className="capitalize font-medium">{date}</p>
        {appts ? (
          <p className="mt-auto pt-1 flex-1 flex items-end">
            {appts} {appts === 1 ? "appt" : "appts"}{" "}
          </p>
        ) : (
          <p className="mt-auto pt-1 flex-1 flex items-end">no appts</p>
        )}
      </div>
    </>
  );
};

export default ScheduleSmallCard;
