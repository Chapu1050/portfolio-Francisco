import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Francisco's bodacious portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-Francisco/",
  // TODO: add your base here; this should be your repo name!
  // base: "/<REPO_NAME>/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },

      {
        text: "Assignments",
        link: "/assignments",
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
