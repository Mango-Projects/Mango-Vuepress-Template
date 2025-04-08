import type { LocaleConfig } from "vuepress/shared";
import type { ThemeLocaleOptions } from "vuepress-theme-hope/";

import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./sidebar/index.js";
import { zhTWLocale } from "./patch/i18n/zh_tw.js";


export default{
  "/": {
    navbar: enusNavbar,
    sidebar: enusSidebar,

    footer: "Default footer",

    blog: {
      description: "A FrontEnd programmer",
      intro: "/en-us/intro.html",
    },
  },
  "/zh-tw/": {
    navbar: zhtwNavbar,
    sidebar: zhtwSidebar,

    footer: "預設頁腳",

    blog: {
      description: "一個前端開發者",
      intro: "/zh-tw/intro.html",
    },

    ...zhTWLocale,
    navbarLocales: {
      langName: "正體中文",
    },
  },
  "/zh-cn/": {
    navbar: zhcnNavbar,
    sidebar: zhcnSidebar,

    footer: "默认页脚",

    blog: {
      description: "一个前端开发者",
      intro: "/zh-cn/intro.html",
    },
  },
} as LocaleConfig<ThemeLocaleOptions>;