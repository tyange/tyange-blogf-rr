import { promises as fs } from "node:fs";
import { join } from "path";
import markdownit from "markdown-it";
import matter from "gray-matter";

const getImagePath = (path: string) => {
  if (path.startsWith("http") || path.startsWith("https")) {
    return path;
  }

  const assetPath = path.substring(path.indexOf("assets"));
  return `/app/${assetPath}`;
};

export async function getMd(slug: string): Promise<string> {
  try {
    const markdown = await fs.readFile(
      join(process.cwd(), `app/data/markdowns/${slug}.md`),
      "utf-8",
    );

    const md = markdownit();
    md.renderer.rules.image = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      const srcIndex = token.attrIndex("src");
      const src = token.attrs![srcIndex][1];

      token.attrs![srcIndex][1] = getImagePath(src);

      return self.renderToken(tokens, idx, options);
    };

    const html = md.render(markdown);

    return html;
  } catch (err) {
    console.error("Error reading or parsing markdown:", err);
    throw err;
  }
}

export async function getMdList(): Promise<string[]> {
  try {
    const mds = await fs.readdir(join(process.cwd(), "app/data/markdowns"));
    const list = await Promise.all(
      mds.map(async (md) => {
        const mdFile = await fs.readFile(
          join(process.cwd(), `app/data/markdowns/${md}`),
        );
        const { data } = matter(mdFile);

        return data.title as string;
      }),
    );

    return list;
  } catch (err) {
    console.error("Error reading or parsing markdown list:", err);
    throw err;
  }
}
