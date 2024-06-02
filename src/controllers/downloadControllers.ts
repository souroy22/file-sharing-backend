import { Request, Response } from "express";
import File from "../models/fileModel";

const downloadControllers = {
  downloadFile: async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const file = await File.findOne({ slug });
      if (!file) {
        return res.status(404).json({ message: "File not found or expired" });
      }
      return res.status(200).download(file.path, file.filename);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default downloadControllers;
