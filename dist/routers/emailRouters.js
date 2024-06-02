"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailControllers_1 = __importDefault(require("../controllers/emailControllers"));
const emailRouters = express_1.default.Router();
emailRouters.post("/", emailControllers_1.default.sendFileByEmail);
exports.default = emailRouters;
//# sourceMappingURL=emailRouters.js.map