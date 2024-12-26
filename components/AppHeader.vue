<template>
   <header class="flex justify-between items-center">
      <p class="text-xl leading-3">
         <span class="text-sm m-0">Kamil</span>
         <br />
         Kubiczek
      </p>

      <LucideMenu @click="$emit('openMobileNavigation')" class="cursor-pointer" />
   </header>
</template>

<script setup lang="ts">
defineEmits<{
   openMobileNavigation: [value: void]
}>()
</script>
