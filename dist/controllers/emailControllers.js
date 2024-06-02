"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileModel_1 = __importDefault(require("../models/fileModel"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const getBaseUrl_1 = require("../utils/getBaseUrl");
const emailControllers = {
    sendFileByEmail: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { slug, email } = req.body;
            const file = yield fileModel_1.default.findOne({ slug });
            if (!file) {
                return res.status(404).json({ message: "File not found or expired" });
            }
            console.log("process.env.EMAIL_ID", process.env.EMAIL_ID);
            console.log("process.env.EMAIL_PASSWORD", process.env.EMAIL_PASSWORD);
            const transporter = nodemailer_1.default.createTransport({
                // service: "gmail",
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_ID,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });
            const newLink = `${(0, getBaseUrl_1.getBaseUrl)(req)}/api/v1//download/${slug}`;
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
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }),
};
exports.default = emailControllers;
//# sourceMappingURL=emailControllers.js.map