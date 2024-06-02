"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("../utils/multer"));
const uploadControllers_1 = __importDefault(require("../controllers/uploadControllers"));
const uploadRouters = express_1.default.Router();
uploadRouters.post("/", multer_1.default.single("file"), uploadControllers_1.default.uploadFile);
exports.default = uploadRouters;
//# sourceMappingURL=uploadRouters.js.map