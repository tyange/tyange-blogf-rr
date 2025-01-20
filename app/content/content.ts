import { promises as fs } from "node:fs";
import { join } from "path";
import markdownit from "markdown-it";
import matter from "gray-matter";

export async function getMd(slug: string): Promise<string> {
  try {
    const markdown = await fs.readFile(
      join(process.cwd(), `app/content/${slug}/index.md`),
      "utf-8",
    );

    const md = markdownit();

    const isDevelopment = import.meta.env.MODE === "development";

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      const srcIndex = token.attrIndex("src");
      const src = token.attrs![srcIndex][1];

      const fileName = src.split("/assets/content-images/")[1];

      token.attrs![srcIndex][1] = isDevelopment
        ? `/app/assets/content-images/${fileName}`
        : `/assets/${fileName}`;

      return self.renderToken(tokens, idx, options);
    };

    const { content } = matter(markdown);
    const html = md.render(content);

    return html;
  } catch (err) {
    console.error("Error reading or parsing markdown:", err);
    throw err;
  }
}

export async function getMdList(): Promise<string[]> {
  try {
    const entries = await fs.readdir(join(process.cwd(), "app/content"), {
      withFileTypes: true,
    });
    return entries.filter((entry) => entry.isDirectory()).map((e) => e.name);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getContentList(): Promise<string[]> {
  try {
    const entries = await fs.readdir(join(process.cwd(), "app/content"), {
      withFileTypes: true,
    });
    const contentInnerFolderName = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    return await Promise.all(
      contentInnerFolderName.map(async (name) => {
        console.log(process.cwd());
        const mdFile = await fs.readFile(
          join(process.cwd(), `app/content/${name}/index.md`),
        );

        const { data } = matter(mdFile);

        return data.title as string;
      }),
    );
  } catch (err) {
    console.error("Error reading or parsing markdown list:", err);
    throw err;
  }
}
