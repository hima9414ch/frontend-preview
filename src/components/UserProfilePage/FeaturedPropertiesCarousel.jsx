import React, { useState } from 'react';

export const FeaturedPropertiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div id="FeaturedPropertiesCarousel_1">
      <button id="FeaturedPropertiesCarousel_2" onClick={() => setCurrentIndex(prev => prev - 1)}>Prev</button>
      <button id="FeaturedPropertiesCarousel_3" onClick={() => setCurrentIndex(prev => prev + 1)}>Next</button>
    </div>
  );
}