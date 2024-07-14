import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahmeddorgham779@gmail.com",
    pass: "ebwodzckdoyirnuj",
  },
});
