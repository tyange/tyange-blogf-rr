import { promises as fs } from "node:fs";
import { join } from "path";
import { marked } from "marked";

export async function getMd(): Promise<string> {
  try {
    const markdown = await fs.readFile(
      join(process.cwd(), "app/data/markdowns/test1.md"),
      "utf-8",
    );

    const html = marked.parse(markdown);

    return html;
  } catch (err) {
    console.error("Error reading or parsing markdown:", err);
    throw err;
  }
}
