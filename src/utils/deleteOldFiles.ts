import { promises as fsPromises } from "fs";
import path from "path";
import { CronJob } from "cron";

const uploadsDir: string = path.join(__dirname, "../../uploads");
const ONE_DAY_IN_MS: number = 60 * 1000;

async function deleteOldFiles(): Promise<void> {
  try {
    const files: string[] = await fsPromises.readdir(uploadsDir);
    const now: number = Date.now();

    for (const file of files) {
      const filePath: string = path.join(uploadsDir, file);
      const stats = await fsPromises.stat(filePath);

      if (now - stats.mtimeMs > ONE_DAY_IN_MS) {
        await fsPromises.unlink(filePath);
        console.log(`Deleted old file: ${file}`);
      }
    }
  } catch (error) {
    console.error("Error deleting old files:", error);
  }
}

// Schedule the task to run every hour
const job = new CronJob("0 * * * *", deleteOldFiles);
job.start();
