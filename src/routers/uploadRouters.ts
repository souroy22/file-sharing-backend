import express from "express";
// import upload from "../utils/multer";
import uploadControllers from "../controllers/uploadControllers";
import multer from "multer";

const uploadRouters = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

uploadRouters.post("/", upload.single("file"), uploadControllers.uploadFile);

export default uploadRouters;
