// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "edit", link: "1" },
          { text: "Apple2", icon: "edit", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "Banana",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "edit",
            link: "1"
          },
          {
            text: "Banana 2",
            icon: "edit",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "Cherry", icon: "edit", link: "cherry" },
      { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/"
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  { text: "\u6F14\u793A", icon: "discover", link: "/zh/demo/" },
  {
    text: "\u535A\u6587",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "\u82F9\u679C",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "\u82F9\u679C1", icon: "edit", link: "1" },
          { text: "\u82F9\u679C2", icon: "edit", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "\u9999\u8549",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "\u9999\u8549 1",
            icon: "edit",
            link: "1"
          },
          {
            text: "\u9999\u8549 2",
            icon: "edit",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "\u6A31\u6843", icon: "edit", link: "cherry" },
      { text: "\u706B\u9F99\u679C", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/"
  }
]);

// src/.vuepress/navbar/dc.ts
import { navbar as navbar3 } from "vuepress-theme-hope";
var dcNavbar = navbar3([
  "/",
  {
    text: "\u6587\u7AE0",
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
    ]
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slides"
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "note",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slides"
  ]
});

// src/.vuepress/sidebar/dc.ts
import { sidebar as sidebar3 } from "vuepress-theme-hope";
var dcSidebar = sidebar3({
  "/": [
    "",
    {
      icon: "discover",
      text: "\u5199\u6587\u7AE0\u7684\u4F8B\u5B50",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u4E00\u822C\u4EBA",
      icon: "note",
      prefix: "posts/",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var MR_HOPE_AVATAR = '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';
var theme_default = hopeTheme({
  hostname: "https://mister-hope.github.io",
  author: {
    name: "dc",
    url: "https://mrhope.site"
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "docs",
  blog: {
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      MrHope: ["https://mrhope.site", MR_HOPE_AVATAR]
    }
  },
  locales: {
    "/": {
      // navbar
      navbar: dcNavbar,
      // sidebar
      sidebar: dcSidebar,
      footer: "Default footer",
      displayFooter: true,
      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html"
      },
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "\u9ED8\u8BA4\u9875\u811A",
      displayFooter: true,
      blog: {
        description: "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
        intro: "/zh/intro.html"
      },
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"]
    }
  },
  plugins: {
    blog: true,
    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Giscus"
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "\u4E00\u672C\u81EA\u5DF1\u90FD\u4E0D\u770B\u7684\u4E66",
      description: "\u4E0D\u770B"
    }
  },
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "\u5206\u7C7B\uFF1A$content"
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "\u6807\u7B7E\uFF1A$content"
        }
      ]
    })
    // searchPlugin({})
  ],
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9kYy50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIiwgInNyYy8udnVlcHJlc3Mvc2lkZWJhci9kYy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2RjL1dFQl9QUk9KRUNUL2RlbW8vZGMtbm90ZS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2RjL1dFQl9QUk9KRUNUL2RlbW8vZGMtbm90ZS9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IHNlYXJjaFByb1BsdWdpbiB9IGZyb20gXCJ2dWVwcmVzcy1wbHVnaW4tc2VhcmNoLXByb1wiO1xuaW1wb3J0IHsgc2VhcmNoUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tc2VhcmNoXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgICAgdGl0bGU6IFwiXHU0RTAwXHU2NzJDXHU4MUVBXHU1REYxXHU5MEZEXHU0RTBEXHU3NzBCXHU3Njg0XHU0RTY2XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcdTRFMERcdTc3MEJcIixcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICBzZWFyY2hQcm9QbHVnaW4oe1xuICAgICAgLy8gXHU3RDIyXHU1RjE1XHU1MTY4XHU5MEU4XHU1MTg1XHU1QkI5XG4gICAgICBpbmRleENvbnRlbnQ6IHRydWUsXG4gICAgICAvLyBcdTRFM0FcdTUyMDZcdTdDN0JcdTU0OENcdTY4MDdcdTdCN0VcdTZERkJcdTUyQTBcdTdEMjJcdTVGMTVcbiAgICAgIGN1c3RvbUZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAgZ2V0dGVyOiAocGFnZSkgPT4gcGFnZS5mcm9udG1hdHRlci5jYXRlZ29yeSxcbiAgICAgICAgICBmb3JtYXR0ZXI6IFwiXHU1MjA2XHU3QzdCXHVGRjFBJGNvbnRlbnRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGdldHRlcjogKHBhZ2UpID0+IHBhZ2UuZnJvbnRtYXR0ZXIudGFnLFxuICAgICAgICAgIGZvcm1hdHRlcjogXCJcdTY4MDdcdTdCN0VcdUZGMUEkY29udGVudFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgIC8vIHNlYXJjaFBsdWdpbih7fSlcbiAgXSxcblxuICB0aGVtZSxcblxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2RjL1dFQl9QUk9KRUNUL2RlbW8vZGMtbm90ZS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZGMvV0VCX1BST0pFQ1QvZGVtby9kYy1ub3RlL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyICxkY05hdmJhcn0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhcixkY1NpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XG5cbmNvbnN0IE1SX0hPUEVfQVZBVEFSID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4yNDc4IC43ODEzMyAtMi41NDc5NyAuNjM2MjIgOTEwLjM1IDI4MS41OClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImFcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjc1XCIgc3RvcC1jb2xvcj1cIiNlMzM5MzlcIi8+PHN0b3Agb2Zmc2V0PVwiLjk5OFwiIHN0b3AtY29sb3I9XCIjZmZmXCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4xMzgxNCAuODA3OTcgMi41NTU5OSAtLjYwMzIgMzQuMDg3IDQ5NC4zNjkpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgaWQ9XCJiXCIgeDE9XCIzNy44MjdcIiB4Mj1cIjE1OS45ODhcIiB5MT1cIjI3Mi45MTZcIiB5Mj1cIjI3NC42M1wiPjxzdG9wIG9mZnNldD1cIi44MTVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD1cIk0xMzUuNjM3IDU4OC4wNjdjLTQ4Ljg5MS0yMDEuMzM0IDc0LjYwNS00MDQuMTYyIDI3NS44MzctNDUzLjAyOCAyMDEuMjMzLTQ4Ljg2NiA0MDMuOTk4IDc0LjczNCA0NTIuODg5IDI3Ni4wNjggNDguODkyIDIwMS4zMzUtNzQuNjA2IDQwNC4xNjItMjc1LjgzOCA0NTMuMDI5LTIwMS4yMzMgNDguODY2LTQwMy45OTctNzQuNzM0LTQ1Mi44ODgtMjc2LjA2OVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk01OTYuMDc2IDE5Ny4wNDRjLTMuMzQyLTU2LjA5IDU2Ljg5Ny03Ny44MzEgODkuMDE3LTUxLjM2MW0tNDEwLjY1IDEyOC44MTljLTIyLjc1My01MS4zNzctODYuMjU2LTQzLjA3LTEwMi42NTktNC44MTZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTgzMy41NjggMjg4LjAyYy4wNSAxOC4wNDYtMTIuNTg0IDMwLjY5OS0yMS4zNDYgMzIuMjExLTguNzYyIDEuNTEyLTE3LjAzMS0xLjA5OS0xOC41ODQtMS4zNDEgMCAwLTYxLjM2My02LjEwMy0xMDUuNjI3IDYuOTIxLTQ0LjI2NSAxMy4wMjYtODcuMDQgNDcuMzg3LTk0LjYzNyA1MS44OTItNi42MjcgMy45MjgtMjkuMTEyIDcuNjk3LTQ0LjQ2Mi0xMi45MzgtMTUuMzUxLTIwLjYzNi4wMjQtNDEuNTI2LjAyNC00MS41MjZzMTIuNjg1LTE4LjI3OSA0MC43NzEtMzUuMTIzYzI4LjA4OC0xNi44NDQgMjQuNjI0LTEzLjIyNiA1Mi4zMjYtMjUuNjk2IDE1LjI0Ny02Ljg2NSA0My4zMTktMTQuMTg2IDY3LjQyOS0xNy4wNjkgMjUuMTkzLTMuMDExIDQ2LjM0OC0xLjM4NCA1Ny42NzMuNzY5IDIyLjE2NSA0LjIxMiAyOC42MzIgNS45MyAzOS4xNjkgOS4yMjkgMTIuNDUxIDMuODk4IDI3LjIxNCAxNC41MTYgMjcuMjY0IDMyLjY3MVpcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTU1OC4zNTEgMzQ1LjYzMmMtMy40NTgtMTQuMjM3IDUuMjE0LTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1NC0zLjQzNyAyOC40MyA1LjMyIDMxLjg4NyAxOS41NTcgMy40NTggMTQuMjM4LTUuMjEyIDI4LjU2Ny0xOS4zNjcgMzIuMDA0LTE0LjE1MiAzLjQzNy0yOC40My01LjMxOS0zMS44ODctMTkuNTU4WlwiIGZpbGw9XCIjNmQ1ZTU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI2LjI2OFwiLz48cGF0aCBkPVwiTTIyMC4yNDkgNDgzLjQxNmM0Ni44MS0xMS42ODkgOTEuMzIzLS40NjcgOTkuNDIgMjUuMDY0IDguMDk4IDI1LjUzMi0yMy4yODYgNTUuNzA2LTcwLjA5NyA2Ny4zOTMtNDYuODExIDExLjY4OS05MS4zMjMuNDY3LTk5LjQyLTI1LjA2NC04LjA5Ny0yNS41MzIgMjMuMjg2LTU1LjcwNiA3MC4wOTctNjcuMzkzWlwiIGZpbGw9XCJ1cmwoI2EpXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIG9wYWNpdHk9XCIuMjYxXCIvPjxwYXRoIGQ9XCJNNzM5LjkgMzU3LjIyNmMtNDYuOTU5IDExLjA4Mi04MS4zNjcgNDEuNDY5LTc2Ljg1MyA2Ny44NzEgNC41MTQgMjYuNDAyIDQ2LjI0MSAzOC44MjEgOTMuMTk4IDI3LjczOCA0Ni45NTgtMTEuMDgxIDgxLjM2Ni00MS40NjcgNzYuODUzLTY3Ljg2OS00LjUxNC0yNi40MDMtNDYuMjQxLTM4LjgyMS05My4xOTgtMjcuNzRaXCIgZmlsbD1cInVybCgjYilcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk00MDAuOTM0IDM5OC45MTdjLS41OTkgMTguMDM0LTEzLjY4MSAzMC4yMTgtMjIuNDk0IDMxLjQwOS04LjgxMiAxLjE5Mi0xNi45ODItMS43MTYtMTguNTI2LTIuMDE0IDAgMC02MS4xMDktOC4zMzQtMTA1LjgxOSAzLjA3LTQ0LjcwOSAxMS40MDQtODguNjk2IDQ0LjE4MS05Ni40NTIgNDguNDA2LTYuNzYzIDMuNjgzLTI5LjM3MiA2LjYzMi00My45NzItMTQuNTQ2LTE0LjYtMjEuMTggMS41MTktNDEuNDk0IDEuNTE5LTQxLjQ5NHMxMy4zMzUtMTcuODAzIDQyLjAxMy0zMy42MTJjMjguNjc3LTE1LjgwOSAyNS4wODUtMTIuMzE5IDUzLjIyMi0yMy43NzIgMTUuNDg0LTYuMzA0IDQzLjgwMy0xMi41OTggNjguMDA1LTE0LjYgMjUuMjg4LTIuMDkzIDQ2LjM3My4zMDUgNTcuNjE2IDIuODY3IDIyIDUuMDE2IDI4LjQwMSA2Ljk2OCAzOC44MTMgMTAuNjQ5IDEyLjMwNCA0LjM0OCAyNi42NzcgMTUuNDk2IDI2LjA3NSAzMy42MzdaXCIgZmlsbD1cIiNmZmZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjhcIi8+PHBhdGggZD1cIk0xMjkuMDUgNDQ1LjU0NmMtMy40NTgtMTQuMjM5IDUuMjEzLTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1My0zLjQzNyAyOC40MjkgNS4zMTggMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTMgMjguNTY2LTE5LjM2NyAzMi4wMDMtMTQuMTUzIDMuNDM3LTI4LjQzLTUuMzE4LTMxLjg4Ny0xOS41NTdaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNNDI0LjM4MSA2OTYuMzg2czY0LjQyNyAxMy42NDYgMTAxLjk5NiA1Ljc1N0M2NDAuNjUzIDY3OC4xNDYgNjkwLjggNTIxLjg5NCA2OTAuOCA1MjEuODk0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTFcIi8+PHBhdGggZD1cIk03OTYuMDQgNjY2Ljc3NHMtMTAuNzM0LTQ0LjE2NS00MS40MDUtMTEuMzQ4Yy05LjY4MSAxMC4zNTktMTAuNDM4IDQwLjYwNC0yOC4yMTcgODEuODktMTUuOTQyIDM3LjAyLTM5LjU2NCA2MC43MjgtNDIuOTM4IDc2LjA2My0zLjM3NCAxNS4zMzUuNDUxIDM1Ljk5MiAyNi4zNTIgNDEuNTM3IDI1LjkwMiA1LjU0NSA0MS45NjctMjMuMzgxIDQxLjk2Ny0yMy4zODFsNDQuMjQxLTE2NC43NjFaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjxwYXRoIGQ9XCJNNzkzLjMzNyA2NjQuNzM0Yy0zNy4wNzUgMTYwLjA0NS01MS43MyAxNjMuMTQ1LTQwLjM0MyAxODQuODQ1IDExLjM4NyAyMS43MDEgNTEuNDE3IDMzLjcxNiA3MS44NzYtNy4zMTMgNi43MzQtMTMuNTA1LTEuMzEtNDMuMzE3LTEuNTExLTc4LjA3Ny0uMzA3LTUzLjA2IDE2Ljg2NS04Ni4xMTEgMTAuNDAzLTk4LjEtMTUuMzMyLTI4LjQ1Mi0zOS4zNzctNS44NzUtNDAuNDI1LTEuMzU1WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48L3N2Zz4nO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL21pc3Rlci1ob3BlLmdpdGh1Yi5pb1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiZGNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tcmhvcGUuc2l0ZVwiLFxuICB9LFxuXG4gIGljb25Bc3NldHM6IFwiaWNvbmZvbnRcIixcblxuICBsb2dvOiBcIi9sb2dvLnN2Z1wiLFxuXG4gIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXG5cbiAgZG9jc0RpcjogXCJkb2NzXCIsXG5cbiAgYmxvZzoge1xuICAgIG1lZGlhczoge1xuICAgICAgQmFpZHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgQml0YnVja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERpbmdkaW5nOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRHJpYmJibGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRW1haWw6IFwibWFpbHRvOmluZm9AZXhhbXBsZS5jb21cIixcbiAgICAgIEV2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEZsaXBib2FyZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRlZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0bGFiOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXG4gICAgICBJbnN0YWdyYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGFyazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBMaW5lczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBMaW5rZWRpbjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBQaW50ZXJlc3Q6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUG9ja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFFROiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFF6b25lOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFJlZGRpdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBSc3M6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgU3RlYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgVHdpdHRlcjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXZWNoYXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VpYm86IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2hhdHNhcHA6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgWW91dHViZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBaaGlodTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBNckhvcGU6IFtcImh0dHBzOi8vbXJob3BlLnNpdGVcIiwgTVJfSE9QRV9BVkFUQVJdLFxuICAgIH0sXG4gIH0sXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogZGNOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IGRjU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIkRlZmF1bHQgZm9vdGVyXCIsXG5cbiAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBGcm9udEVuZCBwcm9ncmFtbWVyXCIsXG4gICAgICAgIGludHJvOiBcIi9pbnRyby5odG1sXCIsXG4gICAgICB9LFxuXG4gICAgICBtZXRhTG9jYWxlczoge1xuICAgICAgICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoaW5lc2UgbG9jYWxlIGNvbmZpZ1xuICAgICAqL1xuICAgIFwiL3poL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIlx1OUVEOFx1OEJBNFx1OTg3NVx1ODExQVwiLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICBibG9nOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NEUwMFx1NEUyQVx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMVx1ODAwNVwiLFxuICAgICAgICBpbnRybzogXCIvemgvaW50cm8uaHRtbFwiLFxuICAgICAgfSxcblxuICAgICAgLy8gcGFnZSBtZXRhXG4gICAgICBtZXRhTG9jYWxlczoge1xuICAgICAgICBlZGl0TGluazogXCJcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgICBcIi96aC9kZW1vL2VuY3J5cHQuaHRtbFwiOiBbXCIxMjM0XCJdLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHRydWUsXG5cbiAgICBjb21tZW50OiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBZb3Ugc2hvdWxkIGdlbmVyYXRlIGFuZCB1c2UgeW91ciBvd24gY29tbWVudCBzZXJ2aWNlXG4gICAgICBwcm92aWRlcjogXCJHaXNjdXNcIixcbiAgICB9LFxuXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIHBsYXlncm91bmQ6IHtcbiAgICAgICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgICB9LFxuICAgICAgcHJlc2VudGF0aW9uOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcImhpZ2hsaWdodFwiLCBcIm1hdGhcIiwgXCJzZWFyY2hcIiwgXCJub3Rlc1wiLCBcInpvb21cIl0sXG4gICAgICB9LFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcbiAgICAgIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG4gICAgfSxcblxuICAgIC8vIHVuY29tbWVudCB0aGVzZSBpZiB5b3Ugd2FudCBhIFBXQVxuICAgIC8vIHB3YToge1xuICAgIC8vICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAvLyAgIGNhY2hlSFRNTDogdHJ1ZSxcbiAgICAvLyAgIGNhY2hlUGljOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGxlOiB7XG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1zVGlsZToge1xuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgLy8gICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYW5pZmVzdDoge1xuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIHNob3J0Y3V0czogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgc2hvcnRfbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgLy8gICAgICAgICBpY29uczogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovZGMvV0VCX1BST0pFQ1QvZGVtby9kYy1ub3RlL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2RjL1dFQl9QUk9KRUNUL2RlbW8vZGMtbm90ZS9zcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlbk5hdmJhciA9IG5hdmJhcihbXG4gIFwiL1wiLFxuICB7IHRleHQ6IFwiRGVtb1wiLCBpY29uOiBcImRpc2NvdmVyXCIsIGxpbms6IFwiL2RlbW8vXCIgfSxcbiAge1xuICAgIHRleHQ6IFwiUG9zdHNcIixcbiAgICBpY29uOiBcImVkaXRcIixcbiAgICBwcmVmaXg6IFwiL3Bvc3RzL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQXBwbGVcIixcbiAgICAgICAgaWNvbjogXCJlZGl0XCIsXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUxXCIsIGljb246IFwiZWRpdFwiLCBsaW5rOiBcIjFcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJBcHBsZTJcIiwgaWNvbjogXCJlZGl0XCIsIGxpbms6IFwiMlwiIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkJhbmFuYVwiLFxuICAgICAgICBpY29uOiBcImVkaXRcIixcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJhbmFuYSAxXCIsXG4gICAgICAgICAgICBpY29uOiBcImVkaXRcIixcbiAgICAgICAgICAgIGxpbms6IFwiMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCYW5hbmEgMlwiLFxuICAgICAgICAgICAgaWNvbjogXCJlZGl0XCIsXG4gICAgICAgICAgICBsaW5rOiBcIjJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiM1wiLFxuICAgICAgICAgIFwiNFwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJDaGVycnlcIiwgaWNvbjogXCJlZGl0XCIsIGxpbms6IFwiY2hlcnJ5XCIgfSxcbiAgICAgIHsgdGV4dDogXCJEcmFnb24gRnJ1aXRcIiwgaWNvbjogXCJlZGl0XCIsIGxpbms6IFwiZHJhZ29uZnJ1aXRcIiB9LFxuICAgICAgXCJ0b21hdG9cIixcbiAgICAgIFwic3RyYXdiZXJyeVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlYyIERvY3NcIixcbiAgICBpY29uOiBcIm5vdGVcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRjXFxcXFdFQl9QUk9KRUNUXFxcXGRlbW9cXFxcZGMtbm90ZVxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZGMvV0VCX1BST0pFQ1QvZGVtby9kYy1ub3RlL3NyYy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcbiAgXCIvemgvXCIsXG4gIHsgdGV4dDogXCJcdTZGMTRcdTc5M0FcIiwgaWNvbjogXCJkaXNjb3ZlclwiLCBsaW5rOiBcIi96aC9kZW1vL1wiIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTM1QVx1NjU4N1wiLFxuICAgIGljb246IFwiZWRpdFwiLFxuICAgIHByZWZpeDogXCIvemgvcG9zdHMvXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTgyRjlcdTY3OUNcIixcbiAgICAgICAgaWNvbjogXCJlZGl0XCIsXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMVwiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCIxXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMlwiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCIyXCIgfSxcbiAgICAgICAgICBcIjNcIixcbiAgICAgICAgICBcIjRcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5XCIsXG4gICAgICAgIGljb246IFwiZWRpdFwiLFxuICAgICAgICBwcmVmaXg6IFwiYmFuYW5hL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5IDFcIixcbiAgICAgICAgICAgIGljb246IFwiZWRpdFwiLFxuICAgICAgICAgICAgbGluazogXCIxXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAyXCIsXG4gICAgICAgICAgICBpY29uOiBcImVkaXRcIixcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NkEzMVx1Njg0M1wiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCJjaGVycnlcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NzA2Qlx1OUY5OVx1Njc5Q1wiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCJkcmFnb25mcnVpdFwiIH0sXG4gICAgICBcInRvbWF0b1wiLFxuICAgICAgXCJzdHJhd2JlcnJ5XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiVjIgXHU2NTg3XHU2ODYzXCIsXG4gICAgaWNvbjogXCJub3RlXCIsXG4gICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvemgvXCIsXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovZGMvV0VCX1BST0pFQ1QvZGVtby9kYy1ub3RlL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcZGMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2RjL1dFQl9QUk9KRUNUL2RlbW8vZGMtbm90ZS9zcmMvLnZ1ZXByZXNzL25hdmJhci9kYy50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGNOYXZiYXIgPSBuYXZiYXIoW1xyXG4gIFwiL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXHJcbiAgICBpY29uOiBcImVkaXRcIixcclxuICAgIHByZWZpeDogXCIvcG9zdHMvXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgdGV4dDogXCJcdTUyNERcdTdBRUZcIixcclxuICAgICAgLy8gICBpY29uOiBcImVkaXRcIixcclxuICAgICAgLy8gICBwcmVmaXg6IFwiZm9udC9cIixcclxuICAgICAgLy8gICBjaGlsZHJlbjogW1xyXG4gICAgICAvLyAgIF0sXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICB0ZXh0OiBcIlx1NEUwMFx1ODIyQ1x1NEVCQVwiLFxyXG4gICAgICAvLyAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgICAvLyAgIHByZWZpeDogXCJmb29sL1wiLFxyXG4gICAgICAvLyAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIHRleHQ6IFwiXHU2NTNGXHU2Q0JCXCIsXHJcbiAgICAgIC8vICAgICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgICAvLyAgICAgICBsaW5rOiBcInBvbGl0aWNzL1wiLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICBdLFxyXG4gICAgICAvLyB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiVjIgRG9jc1wiLFxyXG4gICAgaWNvbjogXCJub3RlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy9cIixcclxuICB9LFxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIGljb246IFwiZGlzY292ZXJcIixcbiAgICAgIHRleHQ6IFwiRGVtb1wiLFxuICAgICAgcHJlZml4OiBcImRlbW8vXCIsXG4gICAgICBsaW5rOiBcImRlbW8vXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQXJ0aWNsZXNcIixcbiAgICAgIGljb246IFwibm90ZVwiLFxuICAgICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICBcImludHJvXCIsXG4gICAgXCJzbGlkZXNcIixcbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvemgvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU1OTgyXHU0RjU1XHU0RjdGXHU3NTI4XCIsXG4gICAgICBpY29uOiBcImNyZWF0aXZlXCIsXG4gICAgICBwcmVmaXg6IFwiZGVtby9cIixcbiAgICAgIGxpbms6IFwiZGVtby9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTY1ODdcdTdBRTBcIixcbiAgICAgIGljb246IFwibm90ZVwiLFxuICAgICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICBcImludHJvXCIsXG4gICAgXCJzbGlkZXNcIixcbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxkY1xcXFxXRUJfUFJPSkVDVFxcXFxkZW1vXFxcXGRjLW5vdGVcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGRjLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9kYy9XRUJfUFJPSkVDVC9kZW1vL2RjLW5vdGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2RjLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBkY1NpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIGljb246IFwiZGlzY292ZXJcIixcbiAgICAgIHRleHQ6IFwiXHU1MTk5XHU2NTg3XHU3QUUwXHU3Njg0XHU0RjhCXHU1QjUwXCIsXG4gICAgICBwcmVmaXg6IFwiZGVtby9cIixcbiAgICAgIGxpbms6IFwiZGVtby9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTRFMDBcdTgyMkNcdTRFQkFcIixcbiAgICAgIGljb246IFwibm90ZVwiLFxuICAgICAgcHJlZml4OiBcInBvc3RzL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLHdCQUF3QjtBQUNyVixTQUFTLHVCQUF1Qjs7O0FDRGtSLFNBQVMsaUJBQWlCOzs7QUNBVixTQUFTLGNBQWM7QUFFbFYsSUFBTSxXQUFXLE9BQU87QUFBQSxFQUM3QjtBQUFBLEVBQ0EsRUFBRSxNQUFNLFFBQVEsTUFBTSxZQUFZLE1BQU0sU0FBUztBQUFBLEVBQ2pEO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLFVBQVUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBLFVBQzFDLEVBQUUsTUFBTSxVQUFVLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxVQUMxQztBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVB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Q0YsQ0FBQzs7O0FEMU5ELElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQTtBQUFBLE1BRWQsY0FBYztBQUFBO0FBQUEsTUFFZCxjQUFjO0FBQUEsUUFDWjtBQUFBLFVBQ0UsUUFBUSxDQUFDLFNBQVMsS0FBSyxZQUFZO0FBQUEsVUFDbkMsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRLENBQUMsU0FBUyxLQUFLLFlBQVk7QUFBQSxVQUNuQyxXQUFXO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLEVBRUg7QUFBQSxFQUVBO0FBQUE7QUFBQTtBQUlGLENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAibmF2YmFyIiwgIm5hdmJhciIsICJzaWRlYmFyIiwgInNpZGViYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
