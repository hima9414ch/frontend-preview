import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const categories = [
  { id: 1, name: 'Electronics', image: images[0], count: '1.2k products' },
  { id: 2, name: 'Fashion', image: images[1], count: '2.5k products' },
  { id: 3, name: 'Home & Living', image: images[2], count: '890 products' },
  { id: 4, name: 'Sports', image: images[3], count: '650 products' },
  { id: 5, name: 'Books', image: images[4], count: '1.8k products' },
  { id: 6, name: 'Beauty', image: images[5], count: '950 products' },
  { id: 7, name: 'Toys & Games', image: images[6], count: '480 products' },
  { id: 8, name: 'Automotive', image: images[7], count: '320 products' }
];

const ProductCategoriesList = () => {
  return (
    <div id="ProductCategoriesList_1" className="container mx-auto px-4 py-8">
      <h2 id="ProductCategoriesList_2" className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
      <div id="ProductCategoriesList_3" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.name.toLowerCase()}`}
            className="group"
          >
            <div id="ProductCategoriesList_4" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div id="ProductCategoriesList_5" className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div id="ProductCategoriesList_6" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white text-sm p-4">{category.count}</span>
                </div>
              </div>
              <div id="ProductCategoriesList_7" className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">Explore our collection</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoriesList;