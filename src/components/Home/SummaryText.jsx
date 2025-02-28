import React from 'react';

const SummaryText = ({ title, summary, readTime, date }) => {
  return (
    <div id="SummaryText_1" className="max-w-2xl mx-auto p-4 hover:transform hover:scale-102 transition-all duration-300">
      <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-md p-6 border border-gray-100">
        <h2 id="SummaryText_2" className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors duration-300">
          {title || 'The Future of Web Development: Trends to Watch in 2024'}
        </h2>
        <p id="SummaryText_3" className="text-gray-600 mb-4 line-clamp-3 text-lg">
          {summary || 'Explore the emerging trends shaping the future of web development. From AI-driven development to WebAssembly, discover how these innovations are transforming the way we build for the web.'}
        </p>
        <div id="SummaryText_4" className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
              {readTime || '5 min read'}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {date || 'Jan 15, 2024'}
            </span>
          </div>
          <button id="SummaryText_5" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryText;