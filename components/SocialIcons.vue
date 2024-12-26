<template>
   <div class="flex items-center gap-4">
      <NuxtLink :to="socials.upwork" class="rounded-full border border-[#EAEAEA] p-5 bg-white">
         <img src="assets/icons/upwork.svg" alt="UpWork icon" class="w-6 h-6" />
      </NuxtLink>

      <NuxtLink :to="socials.linkedIn" class="rounded-full border border-[#EAEAEA] p-5 bg-white">
         <img src="assets/icons/linkedin.svg" alt="LinkedIn icon" class="w-6 h-6" />
      </NuxtLink>

      <NuxtLink :to="socials.github" class="rounded-full border border-[#EAEAEA] p-5 bg-white">
         <img src="assets/icons/github.svg" alt="GitHub icon" class="w-6 h-6" />
      </NuxtLink>
   </div>
</template>

<script setup>
const { socials } = useAppConfig()
</script>
