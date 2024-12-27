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
   meta: [
      {
         name: "google-site-verification",
         content: "qWSz_FF0chlLWD7qMo6X2lo69Ji15KIgjbl-Bl-JNNQ"
      }
   ],
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
