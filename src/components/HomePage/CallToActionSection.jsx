import React from 'react';
import images from '../assets/images';

const CallToActionSection = () => {
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      if (response.ok) {
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="CallToActionSection_1" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={images[0]}
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 id="CallToActionSection_2" className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          Looking for your dream home?
        </h2>
        <p id="CallToActionSection_3" className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover luxurious properties tailored to your lifestyle. Our expert agents are ready to help you find the perfect home.
        </p>
        
        <form onSubmit={handleContactSubmit} className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl">
          <div id="CallToActionSection_4" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            ></textarea>
          </div>
          
          <button
            id="CallToActionSection_5"
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-500 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg"
          >
            Contact us today!
          </button>
        </form>
        
        <div id="CallToActionSection_6" className="mt-8 flex justify-center space-x-6">
          <div className="text-white text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm">Properties Sold</div>
          </div>
          <div className="text-white text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
          <div className="text-white text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;