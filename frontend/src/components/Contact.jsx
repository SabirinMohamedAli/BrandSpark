import React, { useState } from "react";
import axios from "axios";

const services = [
  { title: "Software Development" },
  { title: "Web Application Development" },
  { title: "Mobile App Development" },
  { title: "E-commerce Development" },
  { title: "Cybersecurity Services" },
  { title: "Website Development" },
  { title: "AI and Machine Learning Solutions" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "", // Added message field
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMessage("Thank you! We will get back to you as soon as possible.");
      setFormData({ firstName: "", lastName: "", email: "", service: "", message: "" }); // Reset form data
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const validationErrors = {};
        error.response.data.errors.forEach((err) => {
          validationErrors[err.param] = err.msg;
        });
        setErrors(validationErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 px-6 md:px-16">
      <div className="bg-white p-10 md:p-16 rounded-2xl shadow-2xl max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Let's Connect</h2>
        <p className="text-gray-600 mt-2 text-center">
          We're excited to work with you! Tell us what you need, and we'll respond as quickly as possible.
        </p>

        {successMessage && (
          <p className="text-green-600 mt-4 text-center">{successMessage}</p>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <select
                name="service"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
            </div>

            {/* New Textarea for the Message */}
            <div className="w-full">
              <textarea
                name="message"
                placeholder="Tell us what you need"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          </div>

          <button 
            type="submit" 
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold w-full md:w-auto transition-all duration-300 transform hover:scale-105"
            disabled={loading} 
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6 text-center">
          Your request is important to us. We promise to respond as quickly as possible!
        </p>
      </div>
    </div>
  );
};

export default Contact;















// import React, { useState } from "react";
// import axios from "axios";

// const services = [
//   { title: "Software Development" },
//   { title: "Web Application Development" },
//   { title: "Mobile App Development" },
//   { title: "E-commerce Development" },
//   { title: "Cybersecurity Services" },
//   { title: "Website Development" },
//   { title: "AI and Machine Learning Solutions" },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     service: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccessMessage("");
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:5000/api/contact", formData);
//       setSuccessMessage("Thank you! We will get back to you as soon as possible.");
//       setFormData({ firstName: "", lastName: "", email: "", service: "" });
//     } catch (error) {
//       if (error.response && error.response.data.errors) {
//         const validationErrors = {};
//         error.response.data.errors.forEach((err) => {
//           validationErrors[err.param] = err.msg;
//         });
//         setErrors(validationErrors);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700 px-6 md:px-16">
//       <div className="bg-white p-10 md:p-16 rounded-2xl shadow-2xl max-w-3xl w-full">
//         <h2 className="text-3xl font-bold text-gray-900 text-center">Let's Connect</h2>
//         <p className="text-gray-600 mt-2 text-center">
//           We're excited to work with you! Tell us what you need, and we'll respond as quickly as possible.
//         </p>

//         {successMessage && (
//           <p className="text-green-600 mt-4 text-center">{successMessage}</p>
//         )}

//         <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//             </div>

//             <div>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>

//             <div>
//               <select
//                 name="service"
//                 className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                 value={formData.service}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select a Service</option>
//                 {services.map((service, index) => (
//                   <option key={index} value={service.title}>
//                     {service.title}
//                   </option>
//                 ))}
//               </select>
//               {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
//             </div>
//           </div>

//           <button 
//             type="submit" 
//             className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold w-full md:w-auto transition-all duration-300 transform hover:scale-105"
//             disabled={loading} // Disable when loading
//           >
//             {loading ? "Sending..." : "Send Request"}
//           </button>
//         </form>

//         <p className="text-gray-600 text-sm mt-6 text-center">
//           Your request is important to us. We promise to respond as quickly as possible!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;
