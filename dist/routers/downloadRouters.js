"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const downloadControllers_1 = __importDefault(require("../controllers/downloadControllers"));
const downloadRouters = express_1.default.Router();
downloadRouters.get("/:slug", downloadControllers_1.default.downloadFile);
exports.default = downloadRouters;
//# sourceMappingURL=downloadRouters.js.map