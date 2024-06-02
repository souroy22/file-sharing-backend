import { Request } from "express";

// Extract base URL from request headers
export const getBaseUrl = (req: Request) => {
  if (process.env.NODE_ENV === "production") {
    // If running in production, use the actual domain or IP address
    return `https://${req.get("host")}`;
  } else {
    // If running locally or in development, use localhost
    return `http://localhost:${req.app.get("port")}`;
  }
};
