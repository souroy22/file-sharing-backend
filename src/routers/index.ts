import express from "express";
import uploadRouters from "./uploadRouters";
import downloadRouters from "./downloadRouters";
import emailRouters from "./emailRouters";

const routers = express.Router();

routers.use("/upload", uploadRouters);
routers.use("/download", downloadRouters);
routers.use("/send-email", emailRouters);

export default routers;
