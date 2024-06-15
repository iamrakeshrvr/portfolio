"use client"
import React from 'react';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  liveAppLink: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Netflix Clone',
      description: 'Created a secure and user-friendly Netflix-inspired web app with React, Firebase authentication and Stripe payments.',
      imageUrl: 'nett.png',
      liveAppLink: 'http://netflix-clone-d75ce.web.app',
    },
    {
      title: 'Cars Hub',
      description: 'Crafted a visually stunning Car Showcase Website using Next.js, React, and Tailwind CSS.',
      imageUrl: 'caruu.png',
      liveAppLink: 'https://cars-hub-nine.vercel.app/',
    },
    {
      title: 'Pocket Ride',
      description: 'Created an impressive Cab booking app as an intern software developer at Pocketride.',
      imageUrl: 'pocket.jpg',
      liveAppLink: 'https://www.linkedin.com/company/pocketride2024/mycompany/',
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-10">
      <h3 className="uppercase tracking-[20px] text-2xl text-center mb-6">
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <a
              href={project.liveAppLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full rounded-lg mb-4"
              />
            </a>
            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
