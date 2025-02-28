import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialShareButtons = ({ url = window.location.href, title = 'Check out this awesome content!' }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
  };

  return (
    <div id="SocialShareButtons_1" className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 bg-white p-3 rounded-lg shadow-lg">
      <button
        id="SocialShareButtons_2"
        onClick={shareOnFacebook}
        className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Share on Facebook"
      >
        <FaFacebook className="text-xl" />
      </button>
      <button
        id="SocialShareButtons_3"
        onClick={shareOnTwitter}
        className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 transform hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Share on Twitter"
      >
        <FaTwitter className="text-xl" />
      </button>
      <button
        id="SocialShareButtons_4"
        onClick={shareOnLinkedIn}
        className="p-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:from-blue-800 hover:to-blue-900 transform hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin className="text-xl" />
      </button>
      <button
        id="SocialShareButtons_5"
        onClick={shareOnWhatsapp}
        className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-110 transition-all duration-300 shadow-md"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </button>
    </div>
  );
};

export default SocialShareButtons;