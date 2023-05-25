import { sidebar } from "vuepress-theme-hope";

export const dcSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "写文章的例子",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "一般人",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
