import type { Route } from "./+types/blog";

import parse from "html-react-parser";

import { getMd } from "~/data/data";

export async function loader() {
  return await getMd();
}

export default function Blog({loaderData}: Route.ComponentProps) {
  return (
    <main>
      {parse(loaderData)}
    </main>
  );
}