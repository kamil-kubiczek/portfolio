<template>
   <header class="flex justify-between items-center">
      <NuxtLink class="text-xl font-medium md:text-4xl leading-3 md:leading-[24px]">
         <span class="text-sm md:text-base m-0 font-normal">Kamil</span>
         <br />
         Kubiczek
      </NuxtLink>

      <LucideMenu @click="$emit('openMobileNavigation')" class="cursor-pointer md:hidden" />

      <nav class="hidden md:flex items-center gap-8">
         <NuxtLink
            to="/"
            class="font-semibold relative text-base"
            active-class="before:opacity-100 before:w-full before:h-[2px] before:absolute before:-bottom-1 before:rounded-full before:bg-text"
            >Home</NuxtLink
         >

         <NuxtLink
            to="/about-me"
            class="font-semibold relative text-base"
            active-class="before:opacity-100 before:w-full before:h-[2px] before:absolute before:-bottom-1 before:rounded-full before:bg-text"
            >About me</NuxtLink
         >

         <ButtonPrimary @click="$router.push('/contact')">Contact</ButtonPrimary>
      </nav>
   </header>
</template>

<script setup lang="ts">
defineEmits<{
   openMobileNavigation: [value: void]
}>()
</script>
