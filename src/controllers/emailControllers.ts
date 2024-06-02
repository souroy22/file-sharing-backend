import { Request, Response } from "express";
import File from "../models/fileModel";
import nodemailer from "nodemailer";
import { getBaseUrl } from "../utils/getBaseUrl";

const emailControllers = {
  sendFileByEmail: async (req: Request, res: Response) => {
    try {
      const { slug, email } = req.body;
      const file = await File.findOne({ slug });
      if (!file) {
        return res.status(404).json({ message: "File not found or expired" });
      }
      console.log("process.env.EMAIL_ID", process.env.EMAIL_ID);
      console.log("process.env.EMAIL_PASSWORD", process.env.EMAIL_PASSWORD);

      const transporter = nodemailer.createTransport({
        // service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const newLink = `${getBaseUrl(req)}/api/v1//download/${slug}`;
      const mailOptions = {
        from: process.env.EMAIL_ID,
        to: email,
        subject: "File from File Sharing App",
        text: "Here is your file.",
        attachments: [{ path: newLink }],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ message: "Email sent", info });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default emailControllers;
