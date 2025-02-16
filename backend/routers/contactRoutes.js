
const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const transporter = require("../config/nodemailerConfig"); // ✅ Import transporter (don't redeclare)
const router = express.Router();

// Contact Form Validation Middleware
const validateContactForm = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("service").notEmpty().withMessage("Service is required"),
  body("message").notEmpty().withMessage("Message is required"), // Added message validation
];

// Contact Form Route (Save to DB + Send Email)
router.post("/", validateContactForm, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, service, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ firstName, lastName, email, service, message });
    await newContact.save();

    // Send Email to Company
    const mailOptions = {
      from: process.env.COMPANY_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: "New Contact Request",
      text: `New contact request:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nService Requested: ${service}\nMessage: ${message}`, // Added message
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Email error:", err);
      }
    });

    res.status(201).json({ success: true, message: "Request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;





































































































// const express = require("express");
// const { body, validationResult } = require("express-validator");
// const Contact = require("../models/Contact");
// const transporter = require("../config/nodemailerConfig"); // ✅ Import transporter (don't redeclare)
// const router = express.Router();

// // Contact Form Validation Middleware
// const validateContactForm = [
//   body("firstName").notEmpty().withMessage("First name is required"),
//   body("lastName").notEmpty().withMessage("Last name is required"),
//   body("email").isEmail().withMessage("Valid email is required"),
//   body("service").notEmpty().withMessage("Service is required"),
// ];

// // Contact Form Route (Save to DB + Send Email)
// router.post("/", validateContactForm, async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { firstName, lastName, email, service } = req.body;

//     // Save to MongoDB
//     const newContact = new Contact({ firstName, lastName, email, service });
//     await newContact.save();

//     // Send Email to Company
//     const mailOptions = {
//       from: process.env.COMPANY_EMAIL,
//       to: process.env.COMPANY_EMAIL,
//       subject: "New Contact Request",
//       text: `New contact request:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nService Requested: ${service}`,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.log("Email error:", err);
//       }
//     });

//     res.status(201).json({ success: true, message: "Request submitted successfully!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const transporter = require("../config/nodemailerConfig"); // Import transporter

// router.post("/send-email", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const mailOptions = {
//       from: process.env.COMPANY_EMAIL,
//       to: email,
//       subject: "Thank you for contacting us!",
//       text: `Hello ${name},\n\nThank you for reaching out. We received your message:\n"${message}"\n\nBest Regards,\nYour Company`,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ success: false, message: "Email sending failed!" });
//   }
// });

// module.exports = router;
