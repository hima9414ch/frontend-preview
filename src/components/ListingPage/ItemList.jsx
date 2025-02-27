import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/items');
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div id="ItemList_1" className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="ItemList_2" className="container mx-auto px-4 py-8">
      <h2 id="ItemList_3" className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Items</h2>
      <div id="ItemList_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            id={`ItemList_${index + 5}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={images[index % images.length]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 m-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                ${item.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{item.category}</span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300"
                  onClick={() => console.log(`Add to cart: ${item.name}`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;