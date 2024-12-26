// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-lucide-icons", "@nuxt/image"],
   googleFonts: {
      families: {
         "Funnel Display": "300..800"
      }
   },
   tailwindcss: {
      config: {
         theme: {
            extend: {
               fontFamily: {
                  funnel: ['"Funnel Display"', "serif"]
               },
               colors: {
                  text: "#0A0614",
                  primary: "#0054F1"
               }
            }
         }
      }
   }
})
