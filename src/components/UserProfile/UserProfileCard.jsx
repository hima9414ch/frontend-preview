import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const UserProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return (
    <div id="UserProfileCard_1" className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div id="UserProfileCard_2" className="text-red-500 text-center p-4">{error}</div>
  );

  return (
    <div id="UserProfileCard_3" className="max-w-md mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            id="UserProfileCard_4"
            src={profile?.avatar || images[0]}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      
      <div className="pt-16 pb-8 px-6">
        <h2 id="UserProfileCard_5" className="text-2xl font-bold text-center text-gray-800 mb-2">
          {profile?.name || 'John Doe'}
        </h2>
        <p id="UserProfileCard_6" className="text-gray-600 text-center mb-4">
          {profile?.email || 'john@example.com'}
        </p>
        
        <div className="space-y-3">
          <div id="UserProfileCard_7" className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-600">Location</span>
            <span className="font-medium text-gray-800">{profile?.location || 'New York, USA'}</span>
          </div>
          <div id="UserProfileCard_8" className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-600">Joined</span>
            <span className="font-medium text-gray-800">{profile?.joinDate || 'January 2023'}</span>
          </div>
          <div id="UserProfileCard_9" className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-600">Role</span>
            <span className="font-medium text-gray-800">{profile?.role || 'Member'}</span>
          </div>
        </div>
        
        <button
          id="UserProfileCard_10"
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;