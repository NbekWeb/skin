<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <!-- Gradient border faqat hoverda ko'rinsin -->
  <div
    class="relative rounded-3xl h-100 max-xl:h-84 max-xs:h-100 max-lg:h-71 pt-[2px] pr-[2px] pb-[2px] pl-[1px] transition-all duration-500 bg-black-700 hover:bg-gradient-to-r hover:from-black hover:via-red-600 hover:via-orange-500 hover:to-amber-200 "
    :class="router.currentRoute?.value.path.includes('offer') && 'max-[900px]:!h-102 max-md:!h-134 max-md:!my-4 max-sm:!h-114'"
  >
    <!-- Ichki qora fon -->
     
    <div
      class="bg-black-700 rounded-[calc(theme(borderRadius.3xl)-2px)] h-full py-6 px-5 max-xl:py-4 max-xl:px-3 bg-[url('@/assets/img/hand.svg')] bg-cover bg-center flex flex-col justify-between"
    >
      <div>
        <p class="text-xl max-xl:text-sm max-xs:text-xl ">Sport Gloves | Big Game</p>
        <p class="font-montserrat-300 max-lg:text-xs max-xs:text-base text-gray-400">Founded in 3  containers</p>
      </div>

      <div class="flex justify-between items-end">
        <div>
          <p class="font-montserrat-300 max-lg:text-sm max-xs:text-xl">$105.49 - $377.51</p>
        </div>
          <div
            class="w-9 h-9 max-xl:h-7 max-xl:w-7 max-xs:h-9 max-xs:w-9 rounded-full bg-red-400 flex justify-center items-center"
          ></div>
      </div>
    </div>
  </div>
</template>

<style>
/* Gradients hover effekti uchun */
.hover\:bg-gradient-to-r {
  background-size: 200% 200%;
  transition: background-position 0.5s ease;
}

.hover\:bg-gradient-to-r:hover {
  background-position: 100% 50%;
}
</style>
