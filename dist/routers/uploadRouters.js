"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import upload from "../utils/multer";
const uploadControllers_1 = __importDefault(require("../controllers/uploadControllers"));
const multer_1 = __importDefault(require("multer"));
const uploadRouters = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
uploadRouters.post("/", upload.single("file"), uploadControllers_1.default.uploadFile);
exports.default = uploadRouters;
//# sourceMappingURL=uploadRouters.js.map