import express from "express";
import emailControllers from "../controllers/emailControllers";

const emailRouters = express.Router();

emailRouters.post("/", emailControllers.sendFileByEmail);

export default emailRouters;
