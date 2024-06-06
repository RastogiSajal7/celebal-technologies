import React from 'react';
import farmen from '../assets/farmenSS.png';

const Project = () => {
  return (
    <div className="bg-gray-100 mt-4 md:ml-2 md:mr-2 rounded-2xl p-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Project Showcase
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore recent project
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image section */}
          <div className="md:flex md:items-center md:justify-center">
            <div className="relative pb-2/3 md:w-64 mx-auto">
              <img
                className=" h-full w-full object-contain rounded-lg"
                src={farmen}
                alt="Project Image"
                style={{ width: "100%", height: "auto" }}
              />
              <img
                className=" h-full w-full object-contain rounded-lg"
                src={farmen}
                alt="Project Image"
                style={{ width: "100%", height: "auto" }}
              />
              <img
                className=" h-full w-full object-contain rounded-lg"
                src={farmen}
                alt="Project Image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          
          {/* Details section */}
          <div className="md:flex md:flex-col md:justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <div className="p-6 text-center ">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project 1
                </h3>
                <p className="text-gray-600 mb-4">
                  Brief description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center">
                  <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full uppercase text-xs font-semibold tracking-wide">
                    Featured
                  </span>
                  <a
                    href="farmen.vercel.app"
                    className="ml-auto inline-block text-lg font-semibold text-blue-500 hover:text-blue-400 transition duration-300"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
