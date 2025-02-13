---
title: Blog
sidebar: false
editLink: false
lastUpdated: false
layout: home
---

<script setup>
import { withBase } from "vitepress";
import { data as posts } from '/../data/posts.data'
import formatDate from '/../.vitepress/theme/utils/formatDate';
import getSorted from '/../.vitepress/theme/utils/getSorted';

const filteredPosts = posts.filter(post => !post.frontmatter.hidden);
const sortedPosts = getSorted(filteredPosts);
</script>

<h1 align="center">Blog</h1>
<ul>
    <li v-for="post of sortedPosts">
        <strong><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></strong>
        <span>{{ formatDate( post.frontmatter.date ) }}</span>
    </li>
</ul>

<style scoped>
ul {
    list-style-type: none;
    font-size: 1.125rem;
    line-height: 1.75;
}

a {
    text-decoration: none;
}

li {
    display: flex;
    gap: 20px;
    align-items: baseline;
    justify-content: space-between;
}

li span {
    font-family: var(--vp-font-family-mono);
    font-size: var(--vp-code-font-size);
}
</style>

**Blog posts are coming soon...**. In the meantime enjoy an image of Twilight looking at planet Earth and waiting for [@MareStare](https://tantabus.ai/profiles/MareStare) to write a blog post:

![](https://tantabuscdn.net/img/view/2025/1/7/36487.png){.figure}
[(Source)](https://tantabus.ai/images/36487)
