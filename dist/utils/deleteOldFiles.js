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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const cron_1 = require("cron");
const uploadsDir = path_1.default.join(__dirname, "../../uploads");
const ONE_DAY_IN_MS = 60 * 1000;
function deleteOldFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const files = yield fs_1.promises.readdir(uploadsDir);
            const now = Date.now();
            for (const file of files) {
                const filePath = path_1.default.join(uploadsDir, file);
                const stats = yield fs_1.promises.stat(filePath);
                if (now - stats.mtimeMs > ONE_DAY_IN_MS) {
                    yield fs_1.promises.unlink(filePath);
                    console.log(`Deleted old file: ${file}`);
                }
            }
        }
        catch (error) {
            console.error("Error deleting old files:", error);
        }
    });
}
// Schedule the task to run every hour
const job = new cron_1.CronJob("0 * * * *", deleteOldFiles);
job.start();
//# sourceMappingURL=deleteOldFiles.js.map