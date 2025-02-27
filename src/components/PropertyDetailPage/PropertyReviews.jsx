import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('api/property/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/property/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      if (response.ok) {
        fetchReviews();
        setNewReview({ rating: 5, comment: '' });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div id="PropertyReviews_1" className="max-w-6xl mx-auto px-4 py-8">
      <h2 id="PropertyReviews_2" className="text-3xl font-bold text-gray-800 mb-8 text-center">Property Reviews</h2>
      
      <div id="PropertyReviews_3" className="mb-12 bg-white rounded-lg shadow-lg p-6">
        <h3 id="PropertyReviews_4" className="text-xl font-semibold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div id="PropertyReviews_5" className="flex items-center space-x-4">
            <label className="font-medium">Rating:</label>
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              className="border rounded-md p-2"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} Stars</option>
              ))}
            </select>
          </div>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            placeholder="Share your experience..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            rows="4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div id="PropertyReviews_6" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <div id="PropertyReviews_7" className="flex items-center mb-4">
              <img
                src={images[index % images.length]}
                alt="Reviewer"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-lg">{review.userName}</h4>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <div className="mt-4 text-sm text-gray-500">{review.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyReviews;