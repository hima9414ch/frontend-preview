import React, { useState } from 'react';

const EditProfileButton = ({ onEditClick, isEditing }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEditClick = () => {
    onEditClick(!isEditing);
  };

  return (
    <div id="EditProfileButton_1" className="flex items-center justify-end mb-4">
      <button
        id="EditProfileButton_2"
        onClick={handleEditClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative px-4 py-2 rounded-lg font-semibold transition-all duration-300
          ${isEditing
            ? 'bg-gray-600 text-white hover:bg-gray-700'
            : 'bg-blue-500 text-white hover:bg-blue-600'}
          transform ${isHovered ? 'scale-105' : 'scale-100'}
          shadow-md hover:shadow-lg
        `}
      >
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${isEditing ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
        </div>
        {isHovered && (
          <div
            id="EditProfileButton_3"
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
          >
            {isEditing ? 'Cancel editing mode' : 'Enable editing mode'}
          </div>
        )}
      </button>
    </div>
  );
};

export default EditProfileButton;