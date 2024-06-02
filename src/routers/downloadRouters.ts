import express from "express";
import downloadControllers from "../controllers/downloadControllers";

const downloadRouters = express.Router();

downloadRouters.get("/:slug", downloadControllers.downloadFile);

export default downloadRouters;
