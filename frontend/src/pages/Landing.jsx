import React, { useContext, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import riteshImg from "../assets/ritesh.jpg";

const Landing = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <>
      <script src="//unpkg.com/alpinejs" defer></script>

      <main>
        <section className="bg-white dark:bg-gray-900 dark:text-white">
          <nav
            x-data={isOpen}
            className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between"
          >
            <div className="flex items-center justify-between">
              <div>
                <a
                  className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                  href="#"
                >
                  Invoicify
                </a>
              </div>

              <div className="flex lg:hidden text-2xl font-bold">
                {isOpen && (
                  <button className="px-2" onClick={() => setOpen(false)}>
                    <IoClose />
                  </button>
                )}
                {!isOpen && (
                  <button onClick={() => setOpen(true)}>
                    <IoMenuSharp />
                  </button>
                )}
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              x-cloak:className={`${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
              className={`${
                !isOpen && "hidden"
              } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent`}
            >
              <button
                className="text-4xl mx-4"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  localStorage.setItem(
                    "theme",
                    theme === "dark" ? "light" : "dark"
                  );
                }}
              >
                <span className="text-xs">Theme</span>
                {theme === "dark" && <FaToggleOn className="text-orange-600" />}
                {theme === "light" && (
                  <FaToggleOff className="text-orange-600" />
                )}
              </button>
              <div className="my-2 mx-2">
                <button className=" border-2 border-orange-600 rounded-md px-5 py-2 hover:bg-orange-500 font-semibold">
                  <a href="/login">Login</a>
                </button>
              </div>

              <div className="my-2 mx-2">
                <button className=" border-2 border-orange-600 rounded-md px-5 py-2 hover:bg-orange-500 font-semibold">
                  <a href="/register">SignUp</a>
                </button>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-6 py-16 text-center">
            <div className="mx-auto max-w-lg">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                Generate Invoices and Preview With Ease
              </h1>
              <p className="mt-6 text-gray-500 dark:text-gray-300">
                Generate Invoices for your business with ease and store them for
                future use. We allow to edit your Invoices and regenrate them.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <img
                className="h-96 w-full rounded-xl object-cover lg:w-4/5"
                src="https://plus.unsplash.com/premium_photo-1679923814036-8febf10a04c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW52b2ljZXxlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 py-10">
              <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
                Made By
              </h1>

              <div className="mx-auto mt-6 flex justify-center">
                <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
                We aim to provide efficient and easy user experience with this
                project of ours so that genrating Invoices is easy peasy for
                your business.
              </p>
            </div>
          </div>

          <div className="container mx-auto -mt-72 px-6 py-10 sm:-mt-80 md:-mt-96">
            <div className="mt-8 flex justify-center xl:mt-16">
              <div className="flex flex-col items-center rounded-xl border p-6 dark:border-gray-700 max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg place-items-center">
                <img
                  className="aspect-square w-48 h-48 rounded-xl object-cover shadow"
                  src={riteshImg}
                  alt="Ritesh"
                />

                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 dark:text-white">
                  Ritesh
                </h1>

                <p className="mt-2 text-center text-sm font-medium text-gray-500 dark:text-gray-300">
                  IIT PATNA’27 (EEE) | Specialist @ Codeforces | Full Stack Web Developer | AI/ML Enthusiast
                </p>

                <div className="-mx-2 mt-4 flex">
                  <a
                    href="https://www.linkedin.com/in/ritesh-324429296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/Ritesh1coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
