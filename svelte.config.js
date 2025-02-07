import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import remarkContainers from "remark-containers";
import rehypeUrls from "rehype-urls";

function processUrl(url, node) {
  if (!url.href.startsWith("/")) {
    node.properties.target = "_blank";
    node.properties.rel = "noreferrer";
  }
}

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
  },

  extensions: [".svelte", ".md"],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extension: ".md",
      layout: {
        projects: "./src/routes/projects/__layout.svelte",
      },
      remarkPlugins: [remarkContainers],
      rehypePlugins: [[rehypeUrls, processUrl]],
      smartypants: true,
    }),
  ],
};
