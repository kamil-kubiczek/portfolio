<template>
   <NuxtLink
      target="_blank"
      class="rounded-2xl w-full flex flex-col p-7 relative md:flex-row-reverse md:h-[500px] md:items-center 2xl:flex-col-reverse 2xl:items-start 2xl:h-[600px] cursor-pointer"
   >
      <div class="flex flex-col gap-4 mb-14 md:w-[45%] 2xl:w-auto 2xl:mb-0" :class="topSectionClass">
         <slot name="topSection"></slot>
      </div>
      <div class="w-full h-64 relative md:w-[55%] 2xl:w-full" :class="imageSectionClass">
         <slot name="image"> </slot>
      </div>
   </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
   topSectionClass?: string
   imageSectionClass?: string
}>()
</script>
