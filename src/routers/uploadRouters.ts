import express from "express";
import upload from "../utils/multer";
import uploadControllers from "../controllers/uploadControllers";

const uploadRouters = express.Router();

uploadRouters.post("/", upload.single("file"), uploadControllers.uploadFile);

export default uploadRouters;
