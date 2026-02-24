import React from 'react';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
];

export default function MobileHeader() {
  return (
    <div className="w-full p-[7%] flex items-center bg-gray-800 justify-around">
      <h1 className="text-2xl font-bold text-center">ClosedAI</h1>
      <h2>teste</h2>
    </div>
  );
}
