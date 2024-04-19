import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/cc_blog/",
  bundler: viteBundler(),
  theme: defaultTheme(),
  lang: "zh-CN",
  title: "hello blog",
  description: "a best front blog",
});
