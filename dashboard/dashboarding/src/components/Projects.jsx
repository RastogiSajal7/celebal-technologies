import React from 'react';
import projectSS from '../assets/projectSS.png';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Brief description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: projectSS,
    link: '#'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Brief description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: projectSS,
    link: '#'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Brief description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: projectSS,
    link: '#'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        className="h-64 w-full object-cover"
        src={project.imageUrl}
        alt={project.title}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex items-center">
          <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full uppercase text-xs font-semibold tracking-wide">
            Featured
          </span>
          <a
            href={project.link}
            className="ml-auto inline-block text-lg font-semibold text-blue-400 hover:text-blue-300 transition duration-300"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="bg-gray-900 mt-4 md:ml-2 md:mr-2 rounded-2xl p-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Project Showcase
          </h2>
          <p className="mt-4 font-semibold font-mono text-lg text-gray-400">
            Explore recent projects
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
