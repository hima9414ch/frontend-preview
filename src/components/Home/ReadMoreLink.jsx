import React from 'react';

const ReadMoreLink = ({ link = '#', text = 'Continue Reading' }) => {
  return (
    <div id="ReadMoreLink_1" className="inline-block">
      <a
        href={link}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 text-white transition-all hover:scale-105 hover:shadow-lg"
      >
        <span id="ReadMoreLink_2" className="relative">{text}</span>
        <svg
          id="ReadMoreLink_3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div id="ReadMoreLink_4" className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-transform duration-300 group-hover:translate-y-0"></div>
      </a>
    </div>
  );
};

export default ReadMoreLink;