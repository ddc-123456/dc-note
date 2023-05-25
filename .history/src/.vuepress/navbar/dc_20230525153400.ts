import { navbar } from "vuepress-theme-hope";

export const dcNavbar = navbar([
  "/",
  {
    text: "文章",
    icon: "edit",
    prefix: "/posts/",
    children: [
      // {
      //   text: "前端",
      //   icon: "edit",
      //   prefix: "font/",
      //   children: [
      //   ],
      // },
      // {
      //   text: "一般人",
      //   icon: "edit",
      //   prefix: "fool/",
      //   children: [
      //     {
      //       text: "政治",
      //       icon: "edit",
      //       link: "politics/",
      //     },
      //   ],
      // },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
