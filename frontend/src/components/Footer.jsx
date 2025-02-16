import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">About BrandSpark Tech</h3>
          <p className="text-gray-300 text-sm">
            We specialize in IT solutions, software development, and digital transformation.
          </p>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Support</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Contact Support</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p className="text-gray-300 text-sm">📞 Phone: +252 61 2011700</p>
          <p className="text-gray-300 text-sm">📍 Location: Mogadishu, Somalia</p>
          <p className="text-gray-300 text-sm">✉️ Email: thaprinmohamett1333@gmail.com</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white">🔵</a>
            <a href="#" className="text-gray-300 hover:text-white">🔗</a>
            <a href="#" className="text-gray-300 hover:text-white">📘</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-6">
        <p>© 2025 BrandSpark Tech. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-gray-500 my-4 mx-auto w-3/1" />

      {/* Made with love */}
      <div className="text-center text-gray-300 text-sm mt-4">
      Designed & Developed <span className="text-red-500">❤️</span> by <span className="font-bold text-gray-100 text-1xl">Sabirin Mohamed Ali</span>
      </div>
    </footer>
  );
};

export default Footer;
