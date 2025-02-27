import React, { useState } from 'react';
import axios from 'axios';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    profileVisibility: 'public',
    dataSharing: true,
    twoFactorAuth: false,
    locationTracking: true
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: typeof prev[setting] === 'boolean' ? !prev[setting] : prev[setting]
    }));
  };

  const handleVisibilityChange = (e) => {
    setSettings(prev => ({
      ...prev,
      profileVisibility: e.target.value
    }));
  };

  const saveSettings = async () => {
    try {
      await axios.post('/api/privacy-settings', settings);
      alert('Settings saved successfully!');
    } catch (error) {
      alert('Error saving settings');
    }
  };

  return (
    <div id="PrivacySettings_1" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 id="PrivacySettings_2" className="text-3xl font-bold text-gray-800 mb-8">Privacy Settings</h1>
        
        <div className="space-y-6">
          <div id="PrivacySettings_3" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
            <div>
              <h3 className="font-semibold text-gray-800">Email Notifications</h3>
              <p className="text-sm text-gray-600">Receive emails about your account activity</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div id="PrivacySettings_4" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
            <h3 className="font-semibold text-gray-800 mb-2">Profile Visibility</h3>
            <p className="text-sm text-gray-600 mb-3">Choose who can see your profile</p>
            <select
              value={settings.profileVisibility}
              onChange={handleVisibilityChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div id="PrivacySettings_5" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
            <div>
              <h3 className="font-semibold text-gray-800">Data Sharing</h3>
              <p className="text-sm text-gray-600">Allow us to share your data with trusted partners</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.dataSharing}
                onChange={() => handleToggle('dataSharing')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div id="PrivacySettings_6" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
            <div>
              <h3 className="font-semibold text-gray-800">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.twoFactorAuth}
                onChange={() => handleToggle('twoFactorAuth')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div id="PrivacySettings_7" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
            <div>
              <h3 className="font-semibold text-gray-800">Location Tracking</h3>
              <p className="text-sm text-gray-600">Allow us to track your location for better service</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.locationTracking}
                onChange={() => handleToggle('locationTracking')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <button
          id="PrivacySettings_8"
          onClick={saveSettings}
          className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default PrivacySettings;