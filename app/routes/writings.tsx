import type { Route } from "./+types/writings";

import parse from "html-react-parser";

import { getMd } from "~/data/data";

export async function loader({ params }: Route.LoaderArgs) {
  return await getMd(params.slug);
}

export default function Writings({ loaderData }: Route.ComponentProps) {
  return <div>{parse(loaderData)}</div>;
}
