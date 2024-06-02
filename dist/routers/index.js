"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadRouters_1 = __importDefault(require("./uploadRouters"));
const downloadRouters_1 = __importDefault(require("./downloadRouters"));
const emailRouters_1 = __importDefault(require("./emailRouters"));
const routers = express_1.default.Router();
routers.use("/upload", uploadRouters_1.default);
routers.use("/download", downloadRouters_1.default);
routers.use("/send-email", emailRouters_1.default);
exports.default = routers;
//# sourceMappingURL=index.js.map