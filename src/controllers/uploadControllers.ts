import { Request, Response } from "express";
import File from "../models/fileModel";
import slugify from "slugify";
import ShortUniqueId from "short-unique-id";
import { getBaseUrl } from "../utils/getBaseUrl";
import mainPath from "path";

const uploadControllers = {
  uploadFile: async (req: Request, res: Response) => {
    try {
      const { filename, path, originalname } = req.file;
      const ext = mainPath.extname(req.file.originalname);
      const baseName = mainPath.basename(originalname, ext);

      let slug = slugify(baseName, { lower: true });
      const isSlugExist = await File.findOne({ slug });
      if (isSlugExist) {
        const uid = new ShortUniqueId({ length: 4 });
        slug = slug + uid.rnd();
      }
      await File.create({
        filename,
        path,
        slug,
      });
      const newLink = `${getBaseUrl(req)}/api/v1/download/${slug}`;
      return res.status(201).json({
        msg: "File successfully uploaded",
        data: { link: newLink, slug },
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default uploadControllers;
