import type { Config } from "@react-router/dev/config";

import { getMdList } from "./app/content/content";

export default {
  async prerender() {
    let list = await getMdList();
    return ["/", "/blog"].concat(list.map((md) => `/blog/${md}`));
  },
} satisfies Config;
