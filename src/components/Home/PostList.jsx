import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/posts?page=${page}`);
      if (response.data.length === 0) {
        setHasMore(false);
        return;
      }
      setPosts(prev => [...prev, ...response.data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div id="PostList_1" className="max-w-4xl mx-auto py-8 px-4">
      <div
        className="space-y-6 overflow-y-auto max-h-[800px] pr-4"
        onScroll={handleScroll}
      >
        {loading && posts.length === 0 ? (
          <div id="PostList_2" className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          posts.map(post => (
            <div
              key={post.id}
              id={`PostList_${post.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {post.author[0]}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{post.author}</h3>
                    <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {post.views}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {loading && posts.length > 0 && (
          <div id="PostList_3" className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        {!hasMore && posts.length > 0 && (
          <div id="PostList_4" className="text-center text-gray-500 py-4">
            No more posts to load
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;