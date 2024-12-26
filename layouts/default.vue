<script setup lang="ts">
const mobileNavigationOpen = ref(false)
</script>

<template>
   <AppMobileNavigation v-if="mobileNavigationOpen" @close-mobile-navigation="mobileNavigationOpen = false" />
   <div class="p-6 relative text-text overflow-x-clip flex flex-col min-h-screen">
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
</style>
