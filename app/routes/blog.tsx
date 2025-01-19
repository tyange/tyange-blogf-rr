import { Outlet } from "react-router";
import { getMdList } from "~/data/data";
import type { Route } from "./+types/blog";

export async function loader() {
  return await getMdList();
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);

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
