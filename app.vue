<template>
   <NuxtLayout>
      <NuxtPage></NuxtPage>
   </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
   htmlAttrs: {
      lang: "en"
   },
   link: [
      {
         rel: "icon",
         media: "(prefers-color-scheme: light)",
         type: "image/png",
         href: "/images/Favicon-light-mode.png"
      },
      {
         rel: "icon",
         media: "(prefers-color-scheme: dark)",
         type: "image/png",
         href: "/images/Favicon-dark-mode.png"
      }
   ]
})
</script>
