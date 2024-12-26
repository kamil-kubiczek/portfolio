<template>
   <div class="flex items-start gap-4 justify-center h-72">
      <NuxtLink :to="socials.upwork" class="rounded-full border border-[#EAEAEA] p-5 bg-white relative">
         <img src="assets/icons/upwork.svg" alt="UpWork icon" class="w-6 h-6" />

         <div class="absolute -left-14">
            <ContactArrowOne />
            <p class="font-medium text-2xl">UpWork</p>
         </div>
      </NuxtLink>

      <NuxtLink :to="socials.linkedIn" class="rounded-full border border-[#EAEAEA] p-5 bg-white relative">
         <img src="assets/icons/linkedin.svg" alt="LinkedIn icon" class="w-6 h-6" />
         <div class="absolute -left-1/2 -bottom-40">
            <ContactArrowTwo />
            <p class="font-medium text-2xl">LinkedIn</p>
         </div>
      </NuxtLink>

      <NuxtLink :to="socials.email" class="rounded-full border border-[#EAEAEA] p-5 bg-white relative">
         <img src="assets/icons/email.svg" alt="Email icon" class="w-6 h-6" />

         <div class="absolute -bottom-36 -left-1/4">
            <ContactArrowThree />
            <p class="font-medium text-2xl ml-10">Email</p>
         </div>
      </NuxtLink>
   </div>
</template>

<script setup lang="ts">
const { socials } = useAppConfig()
</script>
