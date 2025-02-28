import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Sidebar = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/popular-posts')
      .then(res => res.json())
      .then(data => {
        setPopularPosts(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const dummyPosts = [
    { id: 1, title: 'Top 10 Travel Destinations', views: '2.5k', image: images[0] },
    { id: 2, title: 'Best Summer Recipes', views: '1.8k', image: images[1] },
    { id: 3, title: 'Tech Trends 2024', views: '3.2k', image: images[2] }
  ];

  const authorInfo = {
    name: 'Jane Doe',
    bio: 'Professional blogger and digital content creator',
    avatar: images[3],
    socialLinks: [
      { platform: 'Twitter', followers: '12k' },
      { platform: 'Instagram', followers: '25k' },
      { platform: 'LinkedIn', followers: '8k' }
    ]
  };

  return (
    <aside id="Sidebar_1" className="w-80 h-screen bg-white shadow-lg p-6 space-y-8 sticky top-0">
      <div id="Sidebar_2" className="author-section bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
        <div className="flex items-center space-x-4">
          <img src={authorInfo.avatar} alt={authorInfo.name} className="w-16 h-16 rounded-full object-cover border-2 border-purple-400" />
          <div>
            <h3 className="font-bold text-lg text-gray-800">{authorInfo.name}</h3>
            <p className="text-sm text-gray-600">{authorInfo.bio}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-around">
          {authorInfo.socialLinks.map((link, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold text-purple-600">{link.followers}</p>
              <p className="text-xs text-gray-500">{link.platform}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="Sidebar_3" className="popular-posts">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Popular Posts</h2>
        <div className="space-y-4">
          {(loading ? dummyPosts : popularPosts).map(post => (
            <div key={post.id} className="group cursor-pointer hover:bg-gray-50 rounded-lg transition-all duration-300">
              <div className="flex space-x-3 p-2">
                <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                <div>
                  <h3 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="Sidebar_4" className="advertisement bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <h3 className="font-bold text-xl mb-2">Premium Membership</h3>
        <p className="text-sm mb-4">Get exclusive access to premium content</p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">Join Now</button>
      </div>

      <div id="Sidebar_5" className="tags">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Travel', 'Food', 'Lifestyle', 'Fashion', 'Health'].map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-purple-100 hover:text-purple-600 cursor-pointer transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;