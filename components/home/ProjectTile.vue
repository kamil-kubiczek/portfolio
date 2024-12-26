<template>
   <div class="rounded-2xl w-full flex flex-col p-7 relative">
      <div class="flex flex-col gap-4 mb-14">
         <slot name="topSection"></slot>
      </div>
      <div class="w-full h-64 relative">
         <slot name="image"> </slot>
      </div>
   </div>
</template>
