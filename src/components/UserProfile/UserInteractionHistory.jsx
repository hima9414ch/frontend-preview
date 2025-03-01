import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const UserInteractionHistory = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setActivities([
          {
            id: 1,
            type: 'view',
            date: '2024-01-15',
            property: 'Luxury Villa',
            image: images[0],
            description: 'Viewed property details'
          },
          {
            id: 2,
            type: 'inquiry',
            date: '2024-01-14',
            property: 'Modern Apartment',
            image: images[1],
            description: 'Sent inquiry about pricing'
          },
          {
            id: 3,
            type: 'bookmark',
            date: '2024-01-13',
            property: 'Beach House',
            image: images[2],
            description: 'Added to favorites'
          }
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'view':
        return '👁️';
      case 'inquiry':
        return '💬';
      case 'bookmark':
        return '⭐';
      default:
        return '📝';
    }
  };

  if (loading) {
    return (
      <div id="UserInteractionHistory_1" className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="UserInteractionHistory_2" className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Your Activity History</h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            id={`UserInteractionHistory_${activity.id + 2}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex"
          >
            <div className="w-1/4">
              <img
                src={activity.image}
                alt={activity.property}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4 flex-1 flex items-center">
              <div className="mr-4 text-2xl" role="img" aria-label={activity.type}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {activity.property}
                </h3>
                <p className="text-gray-600 mb-2">{activity.description}</p>
                <p className="text-sm text-gray-400">
                  {new Date(activity.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activities.length === 0 && (
        <div id="UserInteractionHistory_6" className="text-center py-8">
          <p className="text-gray-500 text-lg">No activity history found.</p>
        </div>
      )}
    </div>
  );
};

export default UserInteractionHistory;