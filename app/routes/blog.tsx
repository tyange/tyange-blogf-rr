import { Outlet } from "react-router";
import { getContentList } from "~/content/content";
import type { Route } from "./+types/blog";

export async function loader() {
  return await getContentList();
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <ul>
        {loaderData.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
