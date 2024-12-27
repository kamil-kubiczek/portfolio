<script setup lang="ts">
const { projects } = useAppConfig()
</script>

<template>
   <section class="flex flex-col gap-28 2xl:grid 2xl:grid-cols-2 2xl:gap-16">
      <HomeProjectTile
         :to="projects.schoolWebsite"
         class="bg-[#69A1FF] 2xl:col-span-2 2xl:!flex-row-reverse 2xl:!items-center"
         topSectionClass="2xl:!w-[45%]"
         imageSectionClass="2xl:!w-[55%]"
      >
         <template #topSection>
            <div class="px-10 py-3 bg-[#385FA3] rounded-full text-white w-fit text-center whitespace-nowrap">Education</div>

            <p class="text-white font-bold text-4xl">School website</p>

            <p class="text-white text-base">UX/UI Design | React | Strapi | SEO</p>
         </template>

         <template #image>
            <NuxtImg
               src="/images/school-project-mobile.png"
               format="webp"
               class="z-10 absolute w-full max-w-[290px] md:max-w-[320px] lg:max-w-[370px] lg:top-1/2 lg:-translate-y-1/2 2xl:max-w-[80%]"
               alt="School website on mobile and tablet devices"
            />
            <div
               class="bg-[#336DCD] w-[290px] h-[290px] rounded-full absolute -right-5 bottom-0 md:right-5 md:bottom-1 lg:right-12 lg:-top-20 lg:w-[340px] lg:h-[340px] 2xl:right-20 2xl:w-[360px] 2xl:h-[360px]"
            />
         </template>
      </HomeProjectTile>

      <HomeProjectTile class="bg-[#003669]" :to="projects.klmatShop">
         <template #topSection>
            <div class="px-6 py-3 bg-[#367CAE] rounded-full text-white w-fit min-w-28 text-center whitespace-nowrap">
               E-commerce
            </div>

            <p class="text-white font-bold text-4xl">
               Online shop for
               <br class="hidden md:block" />
               KL MAT
            </p>

            <p class="text-white text-base">GoldShop CMS | SEO</p>
         </template>

         <template #image>
            <NuxtImg
               src="/images/klmat-shop-project-mobile.png"
               format="webp"
               class="z-10 absolute left-1/2 -translate-x-1/2 h-72 md:h-96 -top-8 md:translate-y-1/2 md:bottom-1/2 md:top-auto 2xl:h-80 2xl:bottom-0 2xl:translate-y-0"
               alt="KL MAT shop on mobile device"
            />
            <div
               class="bg-[#00518A] w-[225px] h-[225px] md:w-[290px] md:h-[290px] rounded-full absolute right-1/2 translate-x-1/2 bottom-10 md:bottom-0 2xl:bottom-5 2xl:w-[270px] 2xl:h-[270px]"
            />
         </template>
      </HomeProjectTile>

      <HomeProjectTile class="bg-[#1A1A1A]" :to="projects.terminaiWebsite">
         <template #topSection>
            <div class="px-6 py-3 bg-[#303030] rounded-full text-white w-fit text-center whitespace-nowrap">
               Artificial intelligence
            </div>

            <p class="text-white font-bold text-4xl">Termin AI</p>

            <p class="text-white text-base">UI/UX Design | Nuxt 3 | Strapi</p>
         </template>

         <template #image>
            <NuxtImg
               src="/images/terminai-project-mobile.png"
               format="webp"
               class="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[304px] 2xl:max-w-full 2xl:top-10"
               alt="Termin AI website on tablet device"
            />
            <div
               class="bg-[#303030] w-[264px] h-[264px] rounded-full absolute -right-4 -top-10 md:-left-2 md:-top-8 2xl:-right-4 2xl:-top-12 2xl:left-auto 2xl:w-[300px] 2xl:h-[300px]"
            />
         </template>
      </HomeProjectTile>
   </section>
</template>
