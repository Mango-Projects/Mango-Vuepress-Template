import { hopeTheme } from "vuepress-theme-hope";
import locales from "./theme/locals.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com",
  },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  darkmode: "enable",
  docsDir: "docs",
  favicon: "/logo.png",
  displayFooter: true,
  locales,

  encrypt: {
    config: {},
  },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: {
      excerptLength: 100,
    },

    components: {
      components: ["Badge", "VPCard", "VidStack"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
