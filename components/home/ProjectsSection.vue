<template>
   <section class="flex flex-col gap-28">
      <HomeProjectTile class="bg-[#69A1FF]">
         <template #topSection>
            <div class="px-10 py-3 bg-[#385FA3] rounded-full text-white w-fit text-center whitespace-nowrap">Education</div>

            <p class="text-white font-bold text-4xl">School website</p>

            <p class="text-white text-base">UX/UI Design | React | Strapi | SEO</p>
         </template>

         <template #image>
            <NuxtImg
               src="/images/school-project-mobile.png"
               class="z-10 absolute w-full"
               alt="School website on mobile and tablet devices"
            />
            <div class="bg-[#336DCD] w-[290px] h-[290px] rounded-full absolute -right-5 bottom-0" />
         </template>
      </HomeProjectTile>

      <HomeProjectTile class="bg-[#003669]">
         <template #topSection>
            <div class="px-6 py-3 bg-[#367CAE] rounded-full text-white w-fit min-w-28 text-center whitespace-nowrap">
               Education
            </div>

            <p class="text-white font-bold text-4xl">Online shop for KL MAT</p>

            <p class="text-white text-base">GoldShop CMS | SEO</p>
         </template>

         <template #image>
            <NuxtImg
               src="/images/klmat-shop-project-mobile.png"
               class="z-10 absolute left-1/2 -translate-x-1/2 h-72 -top-8"
               alt="School website on mobile and tablet devices"
            />
            <div class="bg-[#00518A] w-[225px] h-[225px] rounded-full absolute right-1/2 translate-x-1/2 bottom-10" />
         </template>
      </HomeProjectTile>

      <HomeProjectTile class="bg-[#1A1A1A]">
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
               class="z-10 absolute left-1/2 -translate-x-1/2 w-full"
               alt="School website on mobile and tablet devices"
            />
            <div class="bg-[#303030] w-[264px] h-[264px] rounded-full absolute -right-4 -top-10" />
         </template>
      </HomeProjectTile>
   </section>
</template>
