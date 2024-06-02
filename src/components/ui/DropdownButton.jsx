import React, { useState } from "react";
import { Menu } from "@headlessui/react";

const DropdownButton = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Menu>
        <Menu.Button
          className={`rounded-md py-1.5 px-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset hover:ring-primary-500 hover:text-primary-800 hover:bg-primary-50 ${
            open
              ? "ring-primary-500 bg-primary-50 text-primary-700 "
              : "ring-gray-300 bg-white  text-gray-900 "
          }`}
        >
          {title}
        </Menu.Button>

        <Menu.Items className="absolute bg-white  border border-gray-300 rounded-md shadow-md shadow-primary-500/40">
          <div className="overflow-auto w-max max-h-[22rem] max-w-[18rem] sm:max-w-[22rem]">
            <div className="p-4">{children}</div>
          </div>
          <div className="p-2 border-t flex gap-2 justify-end">
            <button
              type="button"
              className={`rounded-md bg-white  py-1.5 px-2.5 text-sm font-semibold text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 hover:text-primary-800 hover:bg-primary-50`}
            >
              Clear
            </button>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`rounded-md bg-primary-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                    active ? "bg-primary-700" : ""
                  }`}
                >
                  Apply
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownButton;
