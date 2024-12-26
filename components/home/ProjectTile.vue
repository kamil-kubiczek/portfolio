<template>
   <div class="rounded-2xl w-full flex flex-col p-7 relative md:flex-row-reverse md:h-[500px] md:items-center">
      <div class="flex flex-col gap-4 mb-14 md:w-[45%]">
         <slot name="topSection"></slot>
      </div>
      <div class="w-full h-64 relative md:w-[55%]">
         <slot name="image"> </slot>
      </div>
   </div>
</template>
