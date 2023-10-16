import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import useDarkMode from "../hook/useDarkMode";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <nav className="z-10  w-full sticky  top-0 bg-slate-100 flex dark:bg-slate-800 h-fit " >
          <div className="container mx-auto p-5 flex justify-start items-center dark:text-white">
            <span>logo</span>
            <span>Naram</span>
          </div>
          <div className="container hidden mx-auto p-5 md:flex justify-end gap-5 text-sm items-center">
            <Link
              to="/"
              className="hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="/Gallery"
              className="hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
            >
              Gallery
            </Link>
            <a
              href="#AboutMe"
              className="hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
            >
              About Me
            </a>
            <a
              href="#Services"
              style={{ scrollBehavior: "smooth" }}
              className="hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
            >
              Services
            </a>

            <a
              href="#ContactMe"
              className="hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
            >
              Contact me
            </a>

            {colorTheme == "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  setTheme(colorTheme);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-white"
                onClick={() => {
                  setTheme(colorTheme);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
            {/* <img
              src={LDicon}
              className={"h-7 cursor-pointer"}
              onClick={() => {
                setTheme(colorTheme);
              }}
            /> */}
          </div>

          {/* humborger */}
          <Menu
            as="div"
            className="relative p-4 inline-block text-left md:hidden"
          >
            <div>
              <Menu.Button className="inline-flex justify-center w-fit h-fit rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 dark:bg-slate-800 dark:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              /> */}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/gallery"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-slate-200 dark:text-black"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm dark:text-white "
                        )}
                      >
                        Gallery
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#AboutMe"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-slate-200 dark:text-black"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm dark:text-white "
                        )}
                      >
                        About me
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#Services"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-slate-200 dark:text-black"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm dark:text-white "
                        )}
                      >
                        Services
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#ContactMe"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-slate-200 dark:text-black"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm dark:text-white "
                        )}
                      >
                        Contact me
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {colorTheme == "dark" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer ml-3 "
                        onClick={() => {
                          setTheme(colorTheme);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer ml-3  text-white"
                        onClick={() => {
                          setTheme(colorTheme);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* <div
          className="bg-orange-600 w-full top-0 left-0 text-white sticky space-y-6 py-4 rounded-b-3xl "
        
        >
          <div
            to=""
            className="hover:text-slate-400  dark:text-white cursor-pointer"
          >
            Services
          </div>
          <div
            to=""
            className="hover:text-slate-400  dark:text-white cursor-pointer"
          >
            Gallery
          </div>
          <div
            to=""
            className="hover:text-slate-400  dark:text-white cursor-pointer"
          >
            Contact me
          </div> 
        </div>*/}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
