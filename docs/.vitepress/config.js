import { defineConfig } from 'vitepress';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { getSideBar } from './getSideBar.js'
import { getFileTree } from './getFileTree'

export default defineConfig({
  title: 'FM talk', // 标题
  lastUpdated: true, // 最后更新时间
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com" },
    ],
    nav: [
          { text: "Navigate", link: "/navigate/" , },
          { text: "Blogs", link: "/blogs/" , },
        ],
    docFooter: {
      prev: 'prev',
      next: 'next'
    },
    sidebar: getSideBar(),
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
  buildEnd: getFileTree(),
  build: {
    chunkSizeWarningLimit: 1600,
  },
});