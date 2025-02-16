import React from 'react';

const Services = () => {
  const services = [
    { title: 'Software Development', description: 'We build modern software applications.', color: 'bg-blue-900', icon: '🖥️' },
    { title: 'Web Application Development', description: 'We create dynamic web applications.', color: 'bg-blue-800', icon: '🌐' },
    { title: 'Mobile App Development', description: 'We develop cross-platform mobile apps.', color: 'bg-blue-700', icon: '📱' },
    { title: 'E-commerce Development', description: 'We build e-commerce platforms.', color: 'bg-blue-600', icon: '🛒' },
    { title: 'Cybersecurity Services', description: 'We provide top-tier cybersecurity solutions.', color: 'bg-blue-500', icon: '🔒' },
    { title: 'Website Development', description: 'We design and develop responsive websites.', color: 'bg-blue-400', icon: '📈' },
    { title: 'AI and Machine Learning Solutions', description: 'We create AI-driven solutions for businesses.', color: 'bg-blue-300', icon: '🤖' },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 duration-300 ${service.color} text-white hover:shadow-2xl`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
