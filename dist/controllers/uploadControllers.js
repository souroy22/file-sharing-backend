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
const slugify_1 = __importDefault(require("slugify"));
const short_unique_id_1 = __importDefault(require("short-unique-id"));
const getBaseUrl_1 = require("../utils/getBaseUrl");
const path_1 = __importDefault(require("path"));
const uploadControllers = {
    uploadFile: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { filename, path, originalname } = req.file;
            const ext = path_1.default.extname(req.file.originalname);
            const baseName = path_1.default.basename(originalname, ext);
            let slug = (0, slugify_1.default)(baseName, { lower: true });
            const isSlugExist = yield fileModel_1.default.findOne({ slug });
            if (isSlugExist) {
                const uid = new short_unique_id_1.default({ length: 4 });
                slug = slug + uid.rnd();
            }
            yield fileModel_1.default.create({
                filename,
                path,
                slug,
            });
            const newLink = `${(0, getBaseUrl_1.getBaseUrl)(req)}/api/v1/download/${slug}`;
            return res.status(201).json({
                msg: "File successfully uploaded",
                data: { link: newLink, slug },
            });
        }
        catch (error) {
            console.log("Error", error.message);
            return res.status(500).json({ error: error.message });
        }
    }),
};
exports.default = uploadControllers;
//# sourceMappingURL=uploadControllers.js.map