import { defineConfig } from 'vitepress';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { getSideBar } from './getSideBar.js'




export default defineConfig({
  title: 'FM talk', // 标题
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com" },
    ],
    nav: [
          { text: "Navigate", link: "/navigate/" , },
        ],
    sidebar: getSideBar(),
    // sidebar: {
    //   "/mdBase/ts/": getSideBar("ts", "TS"),
    //   "/mdBase/daily/": getSideBar("daily", "Daily"),
    //   "/mdBase/todo": getSideBar("todo", "todoList"),
    // }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});