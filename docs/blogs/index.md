---
page: true
title: home
aside: false
---
<script setup>
import Page from "../.vitepress/theme/components/blogs.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(0,6)
</script>
<Page :posts="posts" :pageCurrent="1" :pagesNum="2" />