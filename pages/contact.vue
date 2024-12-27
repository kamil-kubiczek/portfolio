<template>
   <ContactHeroSection class="mt-24" />
   <ContactSocialIcons class="mt-8" />
</template>

<script setup lang="ts">
const { url } = useAppConfig()

useSeoMeta({
   title: "Contact - Kamil Kubiczek - web developer",
   ogTitle: "Contact - Kamil Kubiczek - web developer",
   twitterTitle: "Contact - Kamil Kubiczek - web developer",
   description: "Contact with me via LinkedIn, email and others.",
   ogDescription: "Contact with me via LinkedIn, email and others.",
   twitterDescription: "Contact with me via LinkedIn, email and others.",
   ogUrl: url,
   ogImage: url + "/images/Contact-og-image.png",
   twitterImage: url + "/images/Contact-og-image.png",
   twitterCard: "summary"
})
</script>
