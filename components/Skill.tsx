import React from 'react';

type Props = {
  name: string; // Skill name
};

const Skill = ({ name }: Props) => {
  return (
    <div className="group relative flex items-center justify-center bg-gray-900 text-gray-400 rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out">
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default Skill;
