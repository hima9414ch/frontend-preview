import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const ResponsiveImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setImageUrl(images[Math.floor(Math.random() * images.length)]);
  }, []);

  return (
    <div id="ResponsiveImage_1" className="container mx-auto p-4">
      <div id="ResponsiveImage_2" className="relative overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-102 group">
        <picture>
          <source
            id="ResponsiveImage_3"
            srcSet={imageUrl}
            type="image/webp"
            media="(min-width: 1024px)"
            className="w-full h-auto"
          />
          <source
            id="ResponsiveImage_4"
            srcSet={imageUrl}
            type="image/webp"
            media="(min-width: 640px)"
            className="w-full h-auto"
          />
          <img
            id="ResponsiveImage_5"
            src={imageUrl}
            alt="Responsive demonstration image"
            loading="lazy"
            className="w-full h-auto transition-opacity duration-300 hover:opacity-90"
          />
        </picture>
        <div id="ResponsiveImage_6" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <h2 id="ResponsiveImage_7" className="text-white text-xl font-bold mb-2">Beautiful Landscape</h2>
          <p id="ResponsiveImage_8" className="text-gray-200 text-sm">This image automatically adjusts to provide the best viewing experience across all devices</p>
        </div>
      </div>
      <div id="ResponsiveImage_9" className="mt-4 text-center">
        <p id="ResponsiveImage_10" className="text-gray-600 text-sm">
          Optimized for all screen sizes | WebP format supported
        </p>
      </div>
    </div>
  );
};

export default ResponsiveImage;