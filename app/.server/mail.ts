import nodemailer from "nodemailer";
import { IS_PROD } from "~/common/constants";

// you can change to your custom SMTP config
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: IS_PROD ? 465 : 587,
  secure: IS_PROD,
  auth: {
    user: process.env.EMAIL_SERVER_ADDRESS,
    pass: process.env.EMAIL_SERVER_PASS,
  },
});

export const sendVerifyCodeToEmail = async ({
  email,
  verifyCode,
}: {
  email: string;
  verifyCode: string;
}) => {
  const mailOptions = {
    // from: `Words Learning <${process.env.EMAIL_SERVER_ADDRESS}>`,
    from: `Words Learning`,
    to: email,
    subject: `Welcome to Words Learning App!`,
    // text: `Hello ${email.split("@")[0]},\n\nThank you for registering with us! We're excited to have you on board.\n\nPlease check your verification code.\n\nBest regards,\nWords Learning Team`,
    html: `
        <h2>Welcome, ${email.split("@")[0]} !</h2>
        <p>Your verification code is: ${verifyCode}</p>
        <p>Thank you for registering with us! We're excited to have you on board.</p>
        <p>Best regards,<br>Words Learning Team</p>
      `,
  };

  return transporter.sendMail(mailOptions);
};
