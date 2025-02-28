import React from 'react';
import { Link } from 'react-router-dom';

const PasswordRecoveryLink = () => {
  return (
    <Link
      to="/forgot-password"
      id="PasswordRecoveryLink_1"
      className="inline-block text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-1 py-0.5"
    >
      Forgot password?
    </Link>
  );
};

export default PasswordRecoveryLink;