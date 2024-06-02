import mongoose, { Document, Schema } from "mongoose";

interface IFile extends Document {
  filename: string;
  path: string;
  slug: string;
  createdAt: Date;
}

const FileSchema: Schema = new Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 }, // Expire after 24 hours
});

const File = mongoose.model<IFile>("File", FileSchema);
export default File;
