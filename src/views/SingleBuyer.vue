<script setup>
import BuyerSingleCard from '@/components/BuyerSingleCard.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class=" ">
    <div
      class="flex justify-between max-sm:flex-col gap-5 !rounded-3xl overflow-hidden bg-black-700"
    >
      <div class="py-6 px-4 pt-4">
        <h2 class="uppercase italic font-montserrat-500 text-[40px] max-sm:text-2xl">
          Glove skins
        </h2>
        <p class="font-montserrat-300 text-gray-400 max-xl:text-sm max-sm:!mt-2">
          Browse and buy all CS2 glove skins. Glove skins have been introduced to CS2 in late 2016
          and every since then, they have been among the rarest skins in the game. Iconic glove
          skins can cost thousands of dollars
        </p>
      </div>
      <img
        class="h-42 w-[46%] max-xl:h-40 max-lg:h-38 max-xl:w-[44%] max-sm:w-full max-sm:h-40 max-md:h-50 max-md:w-[40%] object-cover"
        src="@/assets/img/group.svg"
        alt=""
      />
    </div>
    <div
      class="grid grid-cols-4 gap-4 max-lg:gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 mt-4"
    >
      <BuyerSingleCard
        @click="
          router.push({
            path: '/offer/' + value,
            query: { mode: router.currentRoute?.value?.query?.mode || 'buy' },
          })
        "
        v-for="value in 4"
        :key="value"
      />
    </div>
  </div>
</template>
