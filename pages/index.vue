<template>
   <HomeHeroSection class="mt-24" />
   <HomeProjectsSection class="mt-24" />
   <HomeCtaSection class="mt-24 mb-24" />
</template>

<script setup lang="ts">
const { url } = useAppConfig()

useSeoMeta({
   title: "Portfolio - Kamil Kubiczek - web developer",
   ogTitle: "Portfolio - Kamil Kubiczek - web developer",
   twitterTitle: "Portfolio - Kamil Kubiczek - web developer",
   description:
      "I am experienced fullstack web developer with a focus on modern frontend and backend technologies. Check out my portfolio.",
   ogDescription:
      "I am experienced fullstack web developer with a focus on modern frontend and backend technologies. Check out my portfolio.",
   twitterDescription:
      "I am experienced fullstack web developer with a focus on modern frontend and backend technologies. Check out my portfolio.",
   ogUrl: url,
   ogImage: url + "/images/Home-og-image.png",
   twitterImage: url + "/images/Home-og-image.png",
   twitterCard: "summary"
})
</script>
