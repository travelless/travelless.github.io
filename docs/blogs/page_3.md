---
page: true
title: page_3
aside: false
---
<script setup>
import Page from "../.vitepress/theme/components/blogs.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(10,15)
</script>
<Page :posts="posts" :pageCurrent="3" :pagesNum="3" />