import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaPinterest } from 'react-icons/fa';

const SocialShareButtons = ({ url, title }) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`
  };

  const handleShare = (platform) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div id="SocialShareButtons_1" className="flex items-center space-x-4 py-4">
      <button
        id="SocialShareButtons_2"
        onClick={() => handleShare('facebook')}
        className="transform hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg"
        aria-label="Share on Facebook"
      >
        <FaFacebook className="w-5 h-5" />
      </button>
      <button
        id="SocialShareButtons_3"
        onClick={() => handleShare('twitter')}
        className="transform hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="w-5 h-5" />
      </button>
      <button
        id="SocialShareButtons_4"
        onClick={() => handleShare('linkedin')}
        className="transform hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:shadow-lg"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="w-5 h-5" />
      </button>
      <button
        id="SocialShareButtons_5"
        onClick={() => handleShare('whatsapp')}
        className="transform hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white hover:shadow-lg"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
      </button>
      <button
        id="SocialShareButtons_6"
        onClick={() => handleShare('pinterest')}
        className="transform hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:shadow-lg"
        aria-label="Share on Pinterest"
      >
        <FaPinterest className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SocialShareButtons;