import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav id="Breadcrumbs_1" className="flex items-center py-4 px-6 bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm">
      <Link
        to="/"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
      >
        <svg
          className="w-5 h-5 inline-block mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={name} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {isLast ? (
              <span id="Breadcrumbs_2" className="text-blue-600 font-medium capitalize">
                {name.replace(/-/g, ' ')}
              </span>
            ) : (
              <Link
                id="Breadcrumbs_3"
                to={routeTo}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 capitalize"
              >
                {name.replace(/-/g, ' ')}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;