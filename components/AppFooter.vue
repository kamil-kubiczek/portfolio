<template>
   <footer class="w-full mt-auto">
      <hr class="w-full" />
      <div class="flex gap-4 justify-center mt-6">
         <NuxtLink :to="socials.linkedIn" class="font-light text-sm text-[#a4a4a4]">LinkedIn</NuxtLink>

         <NuxtLink :to="socials.upwork" class="font-light text-sm text-[#a4a4a4]">UpWork</NuxtLink>

         <NuxtLink :to="socials.github" class="font-light text-sm text-[#a4a4a4]">GitHub</NuxtLink>
      </div>

      <p class="mt-12 text-[#a4a4a4] text-center font-light text-sm">Copyright © Kamil Kubiczek</p>
   </footer>
</template>

<script setup lang="ts">
const { socials } = useAppConfig()
</script>
