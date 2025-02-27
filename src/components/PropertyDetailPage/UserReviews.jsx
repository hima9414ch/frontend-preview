import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserReviews = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${propertyId}?page=${page}&sort=${sortBy}`);
        setReviews(prev => [...prev, ...response.data.reviews]);
        setAverageRating(response.data.averageRating);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId, page, sortBy]);

  const handleSort = (value) => {
    setSortBy(value);
    setReviews([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  if (loading) {
    return (
      <div id="UserReviews_1" className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="UserReviews_2" className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Property Reviews</h2>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-blue-600">{averageRating.toFixed(1)}</span>
            <div className="flex ml-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className={`w-5 h-5 ${index < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <select
          id="UserReviews_3"
          className="px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleSort(e.target.value)}
          value={sortBy}
        >
          <option value="date">Most Recent</option>
          <option value="rating">Highest Rated</option>
          <option value="rating-asc">Lowest Rated</option>
        </select>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            id={`UserReviews_${index + 4}`}
            className="p-6 bg-gray-50 rounded-lg transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  {review.userName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{review.userName}</h3>
                  <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      <button
        id="UserReviews_5"
        onClick={loadMore}
        className="mt-8 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Load More Reviews
      </button>
    </div>
  );
};

export default UserReviews;