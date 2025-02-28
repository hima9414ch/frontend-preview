import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const params = category ? { category } : {};
        const response = await axios.get('/api/posts', { params });
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };
    fetchPosts();
  }, [category]);

  if (loading) {
    return (
      <div id="PostList_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="PostList_2" className="text-center text-red-500 p-4">{error}</div>
    );
  }

  if (posts.length === 0) {
    return (
      <div id="PostList_3" className="text-center p-8">
        <div className="text-2xl text-gray-600 font-light">No posts found</div>
        <p className="text-gray-400 mt-2">Try changing your search criteria</p>
      </div>
    );
  }

  return (
    <div id="PostList_4" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            id={`PostList_${index + 5}`}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={images[index % images.length]}
                alt={post.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              {post.category && (
                <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">{post.summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                </div>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;