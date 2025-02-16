const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.COMPANY_EMAIL,
    pass: process.env.COMPANY_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Fixes self-signed certificate error
  },
});

module.exports = transporter; // Export transporter





















// const nodemailer = require("nodemailer");
// require("dotenv").config(); // Load environment variables

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.COMPANY_EMAIL,
//     pass: process.env.COMPANY_EMAIL_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false, // Fixes self-signed certificate error
//   },
// });

// module.exports = transporter; // Export transporter
