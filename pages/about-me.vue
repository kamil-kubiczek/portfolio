<template>
   <AboutMeHeroSection class="mt-28" />
   <AboutMeQuestionsSection class="mt-24" />
   <AboutMeCtaSection class="mt-24 mb-24" />
</template>

<script setup lang="ts">
const { url } = useAppConfig()

useSeoMeta({
   title: "About me - Kamil Kubiczek - web developer",
   ogTitle: "About me - Kamil Kubiczek - web developer",
   twitterTitle: "About me - Kamil Kubiczek - web developer",
   description: "Read my about myself and take a look at what I can do for you.",
   ogDescription: "Read my about myself and take a look at what I can do for you.",
   twitterDescription: "Read my about myself and take a look at what I can do for you.",
   ogUrl: url,
   ogImage: url + "/images/About-me-og-image.png",
   twitterImage: url + "/images/About-me-og-image.png",
   twitterCard: "summary"
})
</script>
