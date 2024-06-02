import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "../ui/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
];

const HeaderPrimary = () => {
  const location = useLocation();
  return (
    <Disclosure
      as="nav"
      className="bg-white border-b border-gray-300 sticky top-0 z-10"
    >
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-10 w-auto"
                      src="/assets/images/logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-8 lg:ml-20 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="navbar-link"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:flex items-center gap-5">
                  {location.pathname === "/" && (
                    <NavLink to="/doctor-homepage" className="navbar-link">
                      Are you a doctor?
                    </NavLink>
                  )}

                  {location.pathname === "/doctor-homepage" ? (
                    <Link
                      to="/doctor-sign-up"
                      className="font-semibold text-primary-500 hover:text-primary-600"
                    >
                      Create account
                    </Link>
                  ) : (
                    <Link
                      to="/sign-up"
                      className="font-semibold text-primary-500 hover:text-primary-600"
                    >
                      Create account
                    </Link>
                  )}
                  <Link
                    to="/sign-in"
                    className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className="navbar-link-mobile"
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {location.pathname === "/" && (
                <NavLink to="/doctor-homepage" className="navbar-link-mobile">
                  Are you a doctor?
                </NavLink>
              )}

              {location.pathname === "/doctor-homepage" ? (
                <Link to="/doctor-sign-up" className="navbar-link-mobile">
                  Create account
                </Link>
              ) : (
                <Link to="/sign-up" className="navbar-link-mobile">
                  Create account
                </Link>
              )}

              <Link to="/sign-in" className="navbar-link-mobile">
                Login
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default HeaderPrimary;
