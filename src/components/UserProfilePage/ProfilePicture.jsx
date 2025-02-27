import React, { useState } from 'react';
import images from '../assets/images';

const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(images[0]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('/api/upload-profile-picture', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          console.log('Image uploaded successfully');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div id="ProfilePicture_1" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div id="ProfilePicture_2" className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div id="ProfilePicture_3" className="relative w-48 h-48 mx-auto mb-6">
          <img
            src={previewImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-lg transition-transform hover:scale-105"
          />
          <div id="ProfilePicture_4" className="absolute bottom-2 right-2">
            <label
              htmlFor="image-upload"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 cursor-pointer shadow-md transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
        <div id="ProfilePicture_5" className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Update Profile Picture</h2>
          <p className="text-gray-600 mb-4">Upload a new profile picture by clicking the camera icon</p>
          <div id="ProfilePicture_6" className="space-y-2 text-sm text-gray-500">
            <p>Supported formats: JPG, PNG, GIF</p>
            <p>Maximum file size: 5MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;