<template>
    <VPTeamMembers
        class="author"
        size="small"
        :members="getAuthor(frontmatter)"
    />
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { VPTeamMembers } from "vitepress/theme";

const { frontmatter } = useData();

const allPeople = [
    {
        avatar: "https://www.github.com/MareStare.png",
        name: "MareStare",
        title: "Twai author",
        links: [{ icon: "github", link: "https://github.com/MareStare" }],
    },
];

function getAuthor(frontmatter: Record<string, unknown>) {
    return allPeople.filter((member) => member.name === frontmatter.author);
}
</script>

<style scoped>
.author {
    display: inline-flex;
}
</style>
