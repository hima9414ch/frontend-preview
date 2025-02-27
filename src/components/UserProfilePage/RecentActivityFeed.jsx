import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const RecentActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch('/api/activities');
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      const mockActivities = [
        {
          id: 1,
          user: 'John Doe',
          action: 'commented on',
          target: 'Project Proposal',
          timestamp: '2 minutes ago',
          avatar: images[0]
        },
        {
          id: 2,
          user: 'Alice Smith',
          action: 'uploaded',
          target: 'Q4 Report.pdf',
          timestamp: '1 hour ago',
          avatar: images[1]
        },
        {
          id: 3,
          user: 'Bob Johnson',
          action: 'completed',
          target: 'Task #123',
          timestamp: '3 hours ago',
          avatar: images[2]
        }
      ];
      setActivities(mockActivities);
    }
  };

  return (
    <div id="RecentActivityFeed_1" className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 id="RecentActivityFeed_2" className="text-2xl font-bold mb-6 text-gray-800">Recent Activity</h2>
      <div id="RecentActivityFeed_3" className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            id={`RecentActivityFeed_${activity.id + 3}`}
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />
            <div className="ml-4 flex-1">
              <p className="text-sm">
                <span className="font-semibold text-blue-600 hover:text-blue-800">{activity.user}</span>
                <span className="text-gray-600"> {activity.action} </span>
                <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">
                  {activity.target}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
            </div>
            <button
              className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-300"
              onClick={() => console.log(`View activity ${activity.id}`)}
            >
              View
            </button>
          </div>
        ))}
      </div>
      <button
        id="RecentActivityFeed_7"
        className="mt-6 w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={() => fetchActivities()}
      >
        Refresh Activities
      </button>
    </div>
  );
};

export default RecentActivityFeed;