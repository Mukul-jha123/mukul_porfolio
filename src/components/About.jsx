import React, { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8 w-full flex flex-col justify-center items-center mx-auto">
          <h3
            smooth
            duration={500}
            data-aos="fade-up"
            data-aos-delay="2000"
            data-aos-duration="2000"
            className="text-4xl pb-2 mb-10 font-bold inline border-b-4 border-gray-500"
          >
            Work Experience
          </h3>

          <ol
            smooth
            duration={500}
            data-aos="fade-up"
            data-aos-delay="2000"
            data-aos-duration="2000"
            className="relative border-s border-blue-700 dark:border-blue-700 w-full mx-auto flex flex-col justify-center items-center"
          >
            <li className="mb-6 ms-6 px-5 lg:w-3/5 ">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex pl-10 items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Software Engineering Virtual Experience &nbsp;&nbsp;&nbsp;{" "}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  Latest
                </span>
              </h3>
              <time className="block pl-10 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              J.P. Morgan (through Forage) | Sep'23 - Sep'24
              </time>
              <p className="mb-4 pl-10 text-base font-normal text-gray-500 dark:text-gray-400">
              Configured a local development environment
              create an interactive live graph, enabling traders to effectively monitor data feeds.
              </p>
            </li>
            <li className="mb-6 ms-6 px-5 lg:w-3/5">
              <span className="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 pl-10 text-lg font-semibold text-gray-900 dark:text-white">
                 Governance Analyst Intern (Virtual Experience)
              </h3>
              <time className="block pl-10 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Goldman Sachs (through Forage) | Sep'24 - Sep'24
              </time>
              <p className="text-base pl-10 font-normal text-gray-500 dark:text-gray-400">
              Evaluated IT security protocols, recommending enhancements
              Detected vulnerabilities in password security by cracking over 100 accounts
              </p>
            </li>
            <li className="ms-6 px-5 lg:w-3/5">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 pl-10 text-lg font-semibold text-gray-900 dark:text-white">
              Data Analyst Intern (Virtual Experience)
              </h3>
              <time className="block pl-10 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Accenture North America, Forage| Sep'24 - Sep'24
              </time>
              <p className="text-base pl-10 font-normal text-gray-500 dark:text-gray-400">
              Advised a hypothetical social media client as a Data Analyst
              Created a PowerPoint deck and video presentation, delivering insights to 5 stakeholders
              </p>
            </li>
          </ol>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2"
        >
          <AiOutlineCloudDownload />
          <a href="./jha_resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
