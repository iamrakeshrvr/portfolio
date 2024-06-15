"use client"
import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-10">
      {/* About heading */}
      <h3 className="uppercase tracking-[20px] text-2xl md:text-3xl mt-6 mb-6 md:mb-8 text-center">
        About Me
      </h3>

      {/* About section content */}
      <div className="max-w-full md:max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            {/* You can add an Image component here if needed */}
          </div>
          <div className="text-gray-400 text-base md:text-lg text-left">
            <p className="mb-4">
              I am Rakesh Ranganathan, currently based in Sarnia, ON. With a background in Full Stack Software Development from Lambton College and a Bachelor's in Computer Science from SNS College of Technology, I bring expertise in Python, JavaScript, TypeScript, React.js, Next.js, Django, and more.
            </p>
            <p className="mb-4">
              As an Intern Software Developer at Pocket Ride, I've integrated a sophisticated payment system using Stripe, aimed at boosting user transactions by 40% and reducing errors by 30%. My role also involves collaborating with senior developers to innovate features enhancing user engagement by 40%, employing agile methodologies to streamline project management, and creating effective onboarding processes and career websites.
            </p>
            <p className="mb-4">
              Beyond work, I've led a full-stack development team, driving a 30% productivity increase and fostering a collaborative environment that improves project efficiency by 15%.
            </p>
            <p>
              Feel free to reach out to me at <a href="mailto:rakeshrvr1998@gmail.com" className="text-blue-400">rakeshrvr1998@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/rakesh-rvr/" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
