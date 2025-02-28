import React from 'react';

const ReadMoreLink = ({ postId, title }) => {
  return (
    <div id="ReadMoreLink_1" className="inline-block">
      <a
        href={`/blog/${postId}`}
        className="group relative inline-flex items-center gap-2 px-6 py-2 border-2 border-indigo-500 text-indigo-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white"
      >
        <span id="ReadMoreLink_2" className="relative z-10 font-medium text-sm">
          Read Full Article
        </span>
        <svg
          id="ReadMoreLink_3"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
        <div id="ReadMoreLink_4" className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
};

export default ReadMoreLink;