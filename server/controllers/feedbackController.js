const  {validationResult}  = require("express-validator");
const nodemailer = require("nodemailer");

// @desc FEEDBACK
// @Route POST /feedbacksy
// @Access Public
const feedback = async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // NodeMailer proccessing ...

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `Quotes`,
    html: 
    `<div>
    <p>From: ${process.env.EMAIL}</p>
    <p>Subject: Quotes</p>
    <p>Quote: ${req.body.quoteData.content}</p>
    </div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.json({ message: "Error: Message is not sent" });
    } else {
      console.log("Email sent: " + info);
      return res.json({ message: "Reading Qoutes makes us a better human!" });
    }
  });
};

module.exports = { feedback };