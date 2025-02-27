import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PriceDetails = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('/api/cart/items');
      const data = await response.json();
      setItems(data);
      calculateTotal(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  return (
    <div id="PriceDetails_1" className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-8">
      <h2 id="PriceDetails_2" className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Price Details</h2>
      
      <div id="PriceDetails_3" className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Price ({items.length} items)</span>
          <span className="text-gray-800 font-medium">${total}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery Charges</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Discount</span>
          <span className="text-green-600 font-medium">-$20</span>
        </div>

        <div className="border-t border-dashed my-4"></div>

        <div className="flex justify-between items-center font-bold text-lg">
          <span className="text-gray-800">Total Amount</span>
          <span className="text-gray-800">${total - 20}</span>
        </div>

        <div className="border-t border-dashed my-4"></div>

        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-600 font-medium">You will save $20 on this order</p>
        </div>

        <button 
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 mt-6"
          onClick={() => window.location.href = '/checkout'}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default PriceDetails;