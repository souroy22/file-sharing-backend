"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileModel_1 = __importDefault(require("../models/fileModel"));
const downloadControllers = {
    downloadFile: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { slug } = req.params;
            const file = yield fileModel_1.default.findOne({ slug });
            if (!file) {
                return res.status(404).json({ message: "File not found or expired" });
            }
            return res.status(200).download(file.path, file.filename);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }),
};
exports.default = downloadControllers;
//# sourceMappingURL=downloadControllers.js.map