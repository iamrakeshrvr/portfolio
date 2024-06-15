import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 text-center">
      <p className="text-lg font-bold">Rakesh Ranganathan</p>
      <p className="text-sm mt-2 mb-4">Full Stack Developer | Passionate about building meaningful applications</p>
      <p className="text-xs">&copy; {new Date().getFullYear()} Rakesh Ranganathan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
