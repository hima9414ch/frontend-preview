import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PopularPosts = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch('/api/posts/popular');
        const data = await response.json();
        setPopularPosts(data);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
        setPopularPosts([
          { id: 1, title: 'The Art of Modern Web Development', views: 1500, image: images[0] },
          { id: 2, title: '10 Tips for Better Code Organization', views: 1200, image: images[1] },
          { id: 3, title: 'Understanding React Hooks', views: 1100, image: images[2] },
          { id: 4, title: 'Best Practices in Frontend Development', views: 900, image: images[3] },
          { id: 5, title: 'The Future of Web Technologies', views: 800, image: images[4] }
        ]);
      }
    };
    fetchPopularPosts();
  }, []);

  return (
    <div id="PopularPosts_1" className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 id="PopularPosts_2" className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Popular Posts</h2>
      <div id="PopularPosts_3" className="space-y-4">
        {popularPosts.map((post) => (
          <div
            key={post.id}
            id={`PopularPosts_${post.id + 3}`}
            className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer"
          >
            <div className="relative w-20 h-20 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {post.views.toLocaleString()} views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;