<script setup lang="ts">
const mobileNavigationOpen = ref(false)
</script>

<template>
   <AppMobileNavigation v-if="mobileNavigationOpen" @close-mobile-navigation="mobileNavigationOpen = false" />
   <div
      class="p-6 md:p-12 lg:px-24 xl:w-[1200px] text-text relative overflow-x-clip xl:overflow-x-visible flex flex-col xl:mx-auto min-h-screen"
   >
      <AppHeader @open-mobile-navigation="mobileNavigationOpen = true" />
      <main>
         <slot />
      </main>
      <AppFooter />
   </div>
</template>

<style>
* {
   font-family: "Funnel Display", serif;
}

div#__nuxt {
   overflow-x: clip;
}
</style>
