import React from "react";
import aboutImage from "../images/2.png"; 

const About = () => {
  return (
    <div className="bg-blue-100 py-8 px-6 md:px-16">
      <hr className="border-t border-white w-5/9 mx-auto my-6" />




      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900">About BrandSpark Tech</h2>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-md text-blue-600 font-semibold text-4xl">About Us</h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 leading-tight">
            Empowering Innovation with BrandSpark Technology Solutions
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
          BrandSpark Technology provides cutting-edge IT solutions including software development,
            website design, e-commerce solutions, and educational platforms. Our mission is to 
            deliver innovative solutions tailored to our clients' unique needs, ensuring long-term success.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={aboutImage} 
            alt="About Us" 
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg transform transition duration-300 hover:scale-105" 
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full md:w-1/3 hover:shadow-2xl transition duration-300">
          <div className="text-red-600 text-3xl">🔥</div>
          <h4 className="font-bold text-lg mt-2">Innovative IT Solutions</h4>
          <p className="text-gray-600 mt-2">BrandSpark Tech specializes in providing modern IT services to businesses of all sizes.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full md:w-1/3 hover:shadow-2xl transition duration-300">
          <div className="text-black text-3xl">📊</div>
          <h4 className="font-bold text-lg mt-2">Software & Web Development</h4>
          <p className="text-gray-600 mt-2">We craft high-quality websites and software tailored to your needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full md:w-1/3 hover:shadow-2xl transition duration-300">
          <div className="text-purple-600 text-3xl">👥</div>
          <h4 className="font-bold text-lg mt-2">Professional & Experienced Team</h4>
          <p className="text-gray-600 mt-2">Our team consists of highly skilled professionals dedicated to excellence.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
