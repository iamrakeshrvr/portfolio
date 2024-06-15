"use client"
import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-10">
      <h3 className="uppercase tracking-[20px] text-2xl text-center mb-6">
        Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <Skill name="React" />
        <Skill name="Next.js" />
        <Skill name="JavaScript" />
        <Skill name="CSS" />
        <Skill name="HTML" />
        <Skill name="Python" />
        <Skill name="Firebase" />
        <Skill name="Stripe" />
        <Skill name="TypeScript" />
        <Skill name="Tailwind CSS" />
        <Skill name="Git" />
        <Skill name="MySQL" />
        <Skill name="Node.js" />
        <Skill name="Express.js" />
        <Skill name='MongoDB' />
        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default Skills;
