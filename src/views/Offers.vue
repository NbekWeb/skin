<script setup>
import { ref } from 'vue'
import BuyerSingleCard from '@/components/BuyerSingleCard.vue'
import InputRange from '@/components/InputRange.vue'
import Containers from '@/components/Containers.vue'
import History from '@/components/History.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const offers = ref([
  {
    id: 1,
    name: 'Skinport',
    reviews: '4.9 | 33k reviews',
    rating: 5,
    price: 573,
    bestPrice: '+22% best price',
    type: 'Instant sell',
    recommended: true,
  },
  {
    id: 2,
    name: 'Buff163',
    reviews: '2.2 | 72k reviews',
    rating: 2,
    price: 573,
    type: 'Manual sell',
    recommended: false,
  },
  {
    id: 3,
    name: 'Buff163',
    reviews: '2.2 | 72k reviews',
    rating: 2,
    price: 573,
    type: 'Manual sell',
    recommended: false,
  },
])
</script>

<template>
  <div class="flex gap-2 max-[900px]:flex-col">
    <div
      class="w-[324px] max-xl:w-60 max-[900px]:!w-full max-[900px]:grid max-md:grid-cols-1 max-[900px]:grid-cols-2"
    >
      <BuyerSingleCard />
      <div class="flex flex-col gap-1">
        <div
          class="flex justify-between rounded-2xl mt-1 transition p-4 bg-black-700 hover:bg-[#F16001]"
        >
          <p class="font-montserrat-300">Factory new</p>
          <p class="font-montserrat-300">$1,392.35</p>
        </div>
        <div
          class="flex justify-between rounded-2xl transition p-4 bg-black-700 hover:bg-[#F16001]"
        >
          <p class="font-montserrat-300">Field-tested</p>
          <p class="font-montserrat-300">$409.72</p>
        </div>
        <div
          class="flex justify-between rounded-2xl transition p-4 bg-black-700 hover:bg-[#F16001]"
        >
          <p class="font-montserrat-300">Well-worn</p>
          <p class="font-montserrat-300">$264.40</p>
        </div>
        <div
          class="flex justify-between rounded-2xl transition p-4 bg-black-700 hover:bg-[#F16001]"
        >
          <p class="font-montserrat-300">Battle-scared</p>
          <p class="font-montserrat-300">$214.42</p>
        </div>
      </div>
      <InputRange />
      <Containers />
    </div>
    <div class="bg-black grow-1 flex-1 min-h-screen text-white p-6 pr-0 max-[900px]:p-0">
      <div class="flex gap-2 mb-6">
        <p class="font-montserrat-500 !text-base italic">ACTIVE OFFERS</p>
        <img class="w-3 -mt-1" src="@/assets/img/received.svg" alt="" />
      </div>

      <!-- Offers list -->
      <div class="space-y-6 overflow-hidden max-sm:pb-6">
        <div
          class="relative max-sm:top-5"
          v-for="(offer, ind) in offers"
          :key="offer.id"
          :class="ind == 0 && 'max-sm:!top-0'"
        >
          <div class="" v-if="ind == 0">
            <svg
              viewBox="0 0 752 82"
              id="preview"
              xmlns="http://www.w3.org/2000/svg"
              class="max-h-[70vh] max-xl:hidden max-xl:text-2xl absolute top-0 overflow-visible"
            >
              <defs>
                <!-- Gradient chapdan o‘ngga, ranglar almashgan -->
                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#C10801" />
                  <stop offset="100%" stop-color="#F16001" />
                </linearGradient>

                <!-- Grid pattern -->
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#513d34"
                    opacity="0.2"
                    stroke-width="0.5"
                  />
                </pattern>
              </defs>

              <!-- Grid background -->
              <rect width="90000" height="90000" class="-translate-[45000px]" fill="url(#grid)" />

              <!-- Main shape -->
              <path
                d="M11,0H560A12,12 0,0,1 572,12V12A10,10 0,0,0 582,22H740A12,12 0,0,1 752,34V71A11,11 0,0,1 741,82H11A11,11 0,0,1 0,71V11A11,11 0,0,1 11,0Z"
                fill="url(#borderGradient)"
                stroke="url(#borderGradient)"
                stroke-width="0.5"
              />

              <!-- Inner path -->
              <path
                class="inner-path"
                d="M11,1H560A11,11 0,0,1 571,12V12A11,11 0,0,0 582,23H740A11,11 0,0,1 751,34V71A10,10 0,0,1 741,81H11A10,10 0,0,1 1,71V11A10,10 0,0,1 11,1Z"
                fill="black"
                stroke="url(#borderGradient)"
                stroke-width="0.5"
              />

              <!-- Optional handlers -->
              <g stroke="dodgerblue" fill="none" stroke-width=".5%" stroke-linecap="round">
                <path class="hidden" d="M1 11 A10 10 0 0 1 11 1" />
                <path class="hidden" d="M741 1 A10 10 0 0 1 751 11" />
                <path class="hidden" d="M741 81 A10 10 0 0 0 751 71" />
                <path class="hidden" d="M11 81 A10 10 0 0 1 1 71" />
              </g>

              <g class="fill-coffee stroke-gray-300 handlers" stroke-width=".3%">
                <circle data-index="0" cx="11" cy="11" />
                <circle data-index="2" cx="741" cy="71" />
                <circle data-index="3" cx="11" cy="71" />
              </g>
            </svg>

            <svg
              viewBox="0 0 882 121"
              id="preview1"
              xmlns="http://www.w3.org/2000/svg"
              class="max-h-[70vh] hidden max-lg:hidden max-xl:text-2xl absolute top-0 max-xl:block overflow-visible"
            >
              <defs>
                <linearGradient id="borderGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#C10801" />
                  <stop offset="100%" stop-color="#F16001" />
                </linearGradient>
                <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#513d34"
                    opacity="1"
                    stroke-width="1"
                  />
                </pattern>
              </defs>
              <rect width="90000" height="90000" class="-translate-[45000px]" fill="url(#grid1)" />
              <path
                d="M17,0H547A15,15 0,0,1 562,15V15A13,13 0,0,0 575,28H867A15,15 0,0,1 882,43V109A13,13 0,0,1 869,122H17A17,17 0,0,1 0,105V17A17,17 0,0,1 17,0Z"
                fill="url(#borderGradient1)"
                stroke="url(#borderGradient1)"
                stroke-width="1"
              />
              <path
                class="inner-path"
                d="M17,1H547A14,14 0,0,1 561,15V15A14,14 0,0,0 575,29H867A14,14 0,0,1 881,43V109A12,12 0,0,1 869,121H17A16,16 0,0,1 1,105V17A16,16 0,0,1 17,1Z"
                fill="black"
                stroke="url(#borderGradient1)"
                stroke-width="1"
              />
              <g stroke="dodgerblue" fill="none" stroke-width=".5%" stroke-linecap="round">
                <path class="hidden" d="M1 17 A16 16 0 0 1 17 1" />
                <path class="hidden" d="M869 121 A12 12 0 0 0 881 109" />
                <path class="hidden" d="M17 121 A16 16 0 0 1 1 105" />
              </g>
              <g class="fill-coffee stroke-gray-300 handlers" stroke-width=".3%">
                <circle data-index="0" cx="17" cy="17" />
                <circle data-index="2" cx="869" cy="109" />
                <circle data-index="3" cx="17" cy="105" />
              </g>
            </svg>
            <svg
              viewBox="0 0 882 162"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-[122px] hidden max-xl:text-2xl absolute top-0 max-lg:block max-[900px]:!hidden overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <!-- Gradient border -->
                <linearGradient id="borderGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#C10801" />
                  <stop offset="100%" stop-color="#F16001" />
                </linearGradient>

                <!-- Grid pattern -->
                <pattern id="grid3" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#513d34"
                    opacity="0.3"
                    stroke-width="0.6"
                  />
                </pattern>
              </defs>

              <!-- Orqa fon grid -->
              <rect width="90000" height="90000" class="-translate-[45000px]" fill="url(#grid3)" />

              <!-- Tashqi shakl -->
              <path
                d="M17,0H527A15,15 0,0,1 542,15V15A13,13 0,0,0 555,28H867A15,15 0,0,1 882,43V155A17,17 0,0,1 865,172H17A17,17 0,0,1 0,155V17A17,17 0,0,1 17,0Z"
                fill="url(#borderGradient3)"
                stroke="url(#borderGradient3)"
                stroke-width="1"
              />

              <!-- Ichki shakl -->
              <path
                class="inner-path"
                d="M17,1H527A14,14 0,0,1 541,15V15A14,14 0,0,0 555,29H867A14,14 0,0,1 881,43V155A16,16 0,0,1 865,171H17A16,16 0,0,1 1,155V17A16,16 0,0,1 17,1Z"
                fill="black"
                stroke="url(#borderGradient3)"
                stroke-width="1"
              />
            </svg>

            <svg
              viewBox="0 0 362 172"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full max-h-[70vh] hidden max-xl:text-2xl absolute top-0 max-[466px]:block max-[400px]:hidden overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <!-- Gradient border -->
                <linearGradient id="borderGradientNew" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#C10801" />
                  <stop offset="100%" stop-color="#F16001" />
                </linearGradient>

                <!-- Grid pattern -->
                <pattern id="gridNew" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#513d34"
                    opacity="0.3"
                    stroke-width="0.6"
                  />
                </pattern>
              </defs>

              <!-- Orqa fon grid -->
              <rect
                width="90000"
                height="90000"
                class="-translate-[45000px]"
                fill="url(#gridNew)"
              />

              <!-- Tashqi shakl -->
              <path
                d="M11,0H166A11,11 0,0,1 177,11V11A9,9 0,0,0 186,20H351A11,11 0,0,1 362,31V161A11,11 0,0,1 351,172H11A11,11 0,0,1 0,161V11A11,11 0,0,1 11,0Z"
                fill="url(#borderGradientNew)"
                stroke="url(#borderGradientNew)"
                stroke-width="1"
              />

              <!-- Ichki shakl -->
              <path
                class="inner-path"
                d="M11,1H166A10,10 0,0,1 176,11V11A10,10 0,0,0 186,21H351A10,10 0,0,1 361,31V161A10,10 0,0,1 351,171H11A10,10 0,0,1 1,161V11A10,10 0,0,1 11,1Z"
                fill="black"
                stroke="url(#borderGradientNew)"
                stroke-width="1"
              />
            </svg>
            <svg
              viewBox="0 0 362 192"
              id="preview"
              xmlns="http://www.w3.org/2000/svg"
              class="max-h-[70vh] hidden max-xl:text-2xl absolute top-0 max-[400px]:block overflow-visible"
            >
              <defs>
                <!-- Gradient border -->
                <linearGradient id="borderGradientNew2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#C10801" />
                  <stop offset="100%" stop-color="#F16001" />
                </linearGradient>

                <!-- Grid pattern -->
                <pattern id="gridNew2" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#513d34"
                    opacity="0.3"
                    stroke-width="0.6"
                  />
                </pattern>
              </defs>

              <!-- Orqa fon grid -->
              <rect
                width="90000"
                height="90000"
                class="-translate-[45000px]"
                fill="url(#gridNew2)"
              />

              <!-- Tashqi shakl -->
              <path
                d="M11,0H151A11,11 0,0,1 162,11V11A9,9 0,0,0 171,20H351A11,11 0,0,1 362,31V181A11,11 0,0,1 351,192H11A11,11 0,0,1 0,181V11A11,11 0,0,1 11,0Z"
                fill="url(#borderGradientNew2)"
                stroke="url(#borderGradientNew2)"
                stroke-width="1"
              />

              <!-- Ichki shakl -->
              <path
                class="inner-path"
                d="M11,1H151A10,10 0,0,1 161,11V11A10,10 0,0,0 171,21H351A10,10 0,0,1 361,31V181A10,10 0,0,1 351,191H11A10,10 0,0,1 1,181V11A10,10 0,0,1 11,1Z"
                fill="black"
                stroke="url(#borderGradientNew2)"
                stroke-width="1"
              />

              <!-- Corner helpers -->
              <g stroke="dodgerblue" fill="none" stroke-width=".5%" stroke-linecap="round">
                <path class="hidden" d="M1 11 A10 10 0 0 1 11 1" />
                <path class="hidden" d="M351 1 A10 10 0 0 1 361 11" />
                <path class="hidden" d="M351 191 A10 10 0 0 0 361 181" />
                <path class="hidden" d="M11 191 A10 10 0 0 1 1 181" />
              </g>

              <!-- Handler circles -->
              <g class="fill-coffee stroke-gray-300 handlers" stroke-width=".3%">
                <circle data-index="0" cx="11" cy="11" />
                <circle data-index="2" cx="351" cy="181" />
                <circle data-index="3" cx="11" cy="181" />
              </g>
            </svg>

            <!-- Recommended badge -->
            <div
              v-if="offer.recommended"
              class="recommended-label max-[1350px]:text-sm max-sm:text-xs"
            >
              RECOMMENDED OFFER
            </div>
            <div
              class="flex max-sm:grid max-sm:grid-cols-2 max-sm:gap-2.5 relative z-1 justify-between items-end p-6 pt-5 max-md:px-4 max-sm:py-1"
            >
              <div class="max-sm:col-span-2">
                <h3 class="text-lg font-montserrat-300 flex items-center gap-2">
                  <img v-if="ind == 0" src="@/assets/img/a1.svg" alt="" />
                  <img v-else-if="ind == 1" src="@/assets/img/a2.svg" alt="" />
                  <img v-else src="@/assets/img/a3.svg" alt="" />
                  {{ offer.name }}
                </h3>
                <p class="text-xs my-1 text-gray-400">{{ offer.reviews }}</p>

                <!-- Rating stars -->
                <div class="flex gap-0.5 text-orange-400 text-xs mt-1">
                  <span v-for="i in 5" :key="i">
                    <i v-if="i <= offer.rating" class="fas fa-star"></i>
                    <i v-else class="fas fa-star text-gray-400"></i>
                  </span>
                </div>
              </div>

              <!-- Middle part -->
              <div
                v-if="route.query.mode == 'buy'"
                class="flex items-center max-sm:col-span-2 max-sm:justify-between max-sm:flex-row-reverse gap-4"
              >
                <p class="text-sm text-gray-300">
                  <span class="text-gray-500">From - </span> ${{ offer.price }}
                </p>
                <button
                  v-if="offer.bestPrice"
                  class="bg-green-400 text-black px-4 py-2 rounded-2xl text-xs max-sm:py-1.5"
                >
                  {{ offer.bestPrice }}
                </button>
                <button
                  v-else
                  class="bg-green-400 invisible text-black px-4 py-2 max-sm:py-1.5 rounded-2xl text-xs"
                >
                  +22% best price
                </button>
              </div>
              <p class="text-gray-400 font-montserrat-300 text-sm" v-else>
                Active offers - <span class="text-white">14</span>
              </p>

              <!-- Buttons -->
              <div
                class="flex items-center gap-2 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:col-span-2"
              >
                <button
                  class="border justify-center cursor-pointer rounded-3xl flex gap-1.5 border-black-600 py-3 px-6 max-sm:py-2 max-sm:px-4  bg-black-800 text-xs hover:bg-black-600"
                >
                  <img v-if="!ind" src="@/assets/img/flash.svg" alt="" />
                  <img v-else src="@/assets/img/send.svg" alt="" />
                  <span>{{ offer.type }}</span>
                </button>
                <button
                  class="py-3 px-6 max-sm:py-2 max-sm:px-4 cursor-pointer text-xs rounded-3xl bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>

          <!-- Left part -->
          <div
            v-else
            class="flex justify-between mt-1 p-6 max-sm:grid max-sm:grid-cols-2 max-md:!px-4 max-md:!py-2 rounded-2xl bg-black-700 items-center"
          >
            <div>
              <h3 class="text-lg font-montserrat-300 flex items-center gap-2">
                <img v-if="ind == 0" src="@/assets/img/a1.svg" alt="" />
                <img v-else-if="ind == 1" src="@/assets/img/a2.svg" alt="" />
                <img v-else src="@/assets/img/a3.svg" alt="" />
                {{ offer.name }}
              </h3>
              <p class="text-xs my-1 text-gray-400">{{ offer.reviews }}</p>

              <!-- Rating stars -->
              <div class="flex gap-0.5 text-orange-400 text-xs mt-1">
                <span v-for="i in 5" :key="i">
                  <i v-if="i <= offer.rating" class="fas fa-star"></i>
                  <i v-else class="fas fa-star text-gray-400"></i>
                </span>
              </div>
            </div>

            <!-- Middle part -->
            <div v-if="route.query.mode == 'buy'" class="flex items-center gap-4 max-sm:col-span-2 max-sm:justify-between max-sm:flex-row-reverse">
              <p class="text-sm text-gray-300">
                <span class="text-gray-500">From - </span> ${{ offer.price }}
              </p>
              <button
                v-if="offer.bestPrice"
                class="bg-green-400 text-black px-4 py-2 rounded-2xl text-xs"
              >
                {{ offer.bestPrice }}
              </button>
              <button
                v-else
                class="bg-green-400 invisible text-black px-4 py-2 rounded-2xl text-xs"
              >
                +22% best price
              </button>
            </div>
            <p class="text-gray-400 font-montserrat-300 text-sm" v-else>
              Active offers - <span class="text-white">14</span>
            </p>
            <!-- Buttons -->
            <div class="flex items-center max-sm:grid max-sm:grid-cols-2 max-sm:col-span-2 gap-2">
              <button
                class="border justify-center rounded-3xl flex gap-1.5 border-black-600 py-3 px-6 max-sm:py-2 max-sm:px-4 bg-black-800 text-xs hover:bg-black-600"
              >
                <img v-if="!ind" src="@/assets/img/flash.svg" alt="" />
                <img v-else src="@/assets/img/send.svg" alt="" />
                <span>{{ offer.type }}</span>
              </button>
              <button
                class="py-3 px-6 max-sm:py-2 max-sm:px-4 cursor-pointer text-xs rounded-3xl bg-orange-500 hover:bg-orange-600 text-white"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>

      <History />
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Box with "cut corner" */
.recommended-box {
  position: relative;
}

*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: #111;
  color: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  position: relative;
  width: 400px;
  padding: 2rem;
  background: #222;
  border: 2px solid orange;
  overflow: hidden;
}

/* umumiy effekt */
[class^='invert'],
[class^='invert']::before {
  backface-visibility: hidden;
  transform: translateZ(0) translate(0, 0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  will-change: transform, clip-path;
}

[class^='invert'] {
  clip-path: inset(0);
  will-change: transform, clip-path;
}

/* Chap yuqori */
.invert-1::before {
  border-radius: 25px 0 0 25px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  box-shadow: 0 0 0 50px #111;
  pointer-events: none;
}

/* O‘ng yuqori */
.invert-3::before {
  border-radius: 0 25px 0 0;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  box-shadow: 0 0 0 50px #111;
  pointer-events: none;
}

/* Chap pastki */
.invert-4::before {
  border-radius: 0 0 0 25px;
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  box-shadow: 0 0 0 50px #111;
  pointer-events: none;
}

/* O‘ng pastki */
.invert-6::before {
  border-radius: 0 25px 25px 0;
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  box-shadow: 0 0 0 50px #111;
  pointer-events: none;
}

.label {
  position: absolute;
  top: 0;
  right: 20px;
  background: #111;
  color: orange;
  font-weight: bold;
  font-size: 12px;
  padding: 4px 12px;
  font-style: italic;
}
.inverted-radius {
  --r: 20px; /* radius */
  --s: 30px; /* ichki radius */
  --x: 20px; /* gorizontal offset */
  --y: 10px; /* vertikal offset */
  --border: 3px; /* border qalinligi */
  --border-color: #f97316; /* border rangi (orange) */
  --bg: #3fb8af; /* ichki fon rangi */

  position: relative;
  width: 250px;
  aspect-ratio: 1;
}

/* Border layer */
.inverted-radius::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--border-color);
  border-radius: var(--r);
}

/* Content layer with mask */
.inverted-radius::after {
  content: '';
  position: absolute;
  inset: var(--border);
  background: var(--bg);
  border-radius: calc(var(--r) - var(--border));

  --_m: /calc(2 * var(--r)) calc(2 * var(--r)) radial-gradient(#000 70%, #0000 72%);
  --_g: conic-gradient(at calc(100% - var(--r)) var(--r), #0000 25%, #000 0);
  --_d: (var(--s) + var(--r));
  mask:
    calc(100% - var(--_d) - var(--x)) 0 var(--_m),
    100% calc(var(--_d) + var(--y)) var(--_m),
    radial-gradient(var(--s) at 100% 0, #0000 99%, #000 calc(100% + 1px))
      calc(-1 * var(--r) - var(--x)) calc(var(--r) + var(--y)),
    var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
    var(--_g) 0 calc(var(--_d) + var(--y));
  mask-repeat: no-repeat;
}

.recommended-label {
  position: absolute;
  top: -1px;
  right: 12px;
  /* background: black; */
  padding: 4px 12px;
  font-style: italic;
  font-weight: 600;
  color: white;

  border-bottom: none;
  border-radius: 8px 8px 0 0;
  @media (max-width: 1279px) {
    right: 44px;
    top: -2px;
  }
  @media (max-width: 930px) {
    right: 14px;
    top: -2px;
  }
  @media (max-width: 400px) {
    right: 4px;
    top: -3px;
  }
}

/* Optional: curved cut look */
.recommended-box::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  height: 32px;
  border-top: 2px solid #f97316;
  border-right: 2px solid #f97316;
  border-top-right-radius: 16px;
}
</style>
