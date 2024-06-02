"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = void 0;
// Extract base URL from request headers
const getBaseUrl = (req) => {
    if (process.env.NODE_ENV === "production") {
        // If running in production, use the actual domain or IP address
        return `https://${req.get("host")}`;
    }
    else {
        // If running locally or in development, use localhost
        return `http://localhost:${req.app.get("port")}`;
    }
};
exports.getBaseUrl = getBaseUrl;
//# sourceMappingURL=getBaseUrl.js.map