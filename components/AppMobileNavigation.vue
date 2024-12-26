<script setup lang="ts">
const emit = defineEmits<{
   closeMobileNavigation: [value: void]
}>()

const router = useRouter()

const closeNavigation = () => {
   emit("closeMobileNavigation")
}
let clearRouterGuard: (() => void) | null = null

onMounted(() => {
   clearRouterGuard = router.beforeEach((to, from, next) => {
      closeNavigation()
      next()
   })
})

onUnmounted(() => {
   if (clearRouterGuard) clearRouterGuard()
})
</script>

<template>
   <div class="bg-white fixed z-50 w-full h-full flex items-center justify-center">
      <BackgroundsAppNavigation class="absolute -z-2 -left-12 pointer-events-none opacity-50" />
      <nav class="flex flex-col gap-12 text-text">
         <NuxtLink
            to="/"
            class="text-3xl w-fit mx-auto relative font-light text-center before:opacity-0"
            active-class="before:opacity-100 before:w-full before:h-1 before:absolute before:-bottom-1 before:rounded-full before:bg-text before:left-1/2 before:-translate-x-1/2"
            >Home</NuxtLink
         >

         <NuxtLink
            to="/about-me"
            class="text-3xl w-fit mx-auto relative font-light text-center before:opacity-0"
            active-class="before:opacity-100 before:w-full before:h-1 before:absolute before:-bottom-1 before:rounded-full before:bg-text"
            >About me</NuxtLink
         >

         <ButtonPrimary @click="router.push('/contact')"> Contact </ButtonPrimary>
      </nav>
      <LucideX @click="emit('closeMobileNavigation')" class="absolute top-7 right-6" />
   </div>
</template>
