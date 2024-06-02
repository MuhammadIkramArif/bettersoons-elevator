import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const BookAppointmentModal = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block text-center w-full rounded-md  bg-primary-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Book Appointment
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
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

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <form>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-gray-900"
                    >
                      Book an Appointment
                    </Dialog.Title>
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="kind"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Kind of animal
                        </label>
                        <input
                          type="text"
                          name="kind"
                          id="kind"
                          placeholder="dog, cat, bird, etc."
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="petName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name of pet
                        </label>
                        <input
                          type="text"
                          name="petName"
                          id="petName"
                          placeholder="Name of pet"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="ownerName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name of owner
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          id="ownerName"
                          placeholder="Name of owner"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address of owner
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Email address of owner"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone number of owner
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          placeholder="Phone number of owner"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address of owner
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Address of owner"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="problem"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Short description of pet problem
                        </label>
                        <textarea
                          id="problem"
                          name="problem"
                          rows="3"
                          placeholder="Short description of pet problem"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default BookAppointmentModal;
