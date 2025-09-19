<template>
  <div class="text-white font-montserrat-300">
    <!-- Title -->
    <h2 class="uppercase font-montserrat-500 text-2xl max-lg:text-base italic">INSPECT SKIN</h2>
    <div class="bg-black-700 rounded-2xl">
      <!-- Top Controls -->
      <div class="p-4 pb-0 flex justify-between flex-wrap gap-y-2">
        <div class="flex flex-wrap gap-3 max-xl:gap-1">
          <div
            class="flex items-center gap-5 justify-between w-50 max-xl:w-33 max-sm:w-22 bg-black border border-gray-700 px-3 py-2 rounded-2xl"
          >
            <span class="text-white-400 text-xs">Seed:</span>
            <input v-model="seed" class="bg-transparent outline-none w-10 max-xl:w-8 text-xs" />
          </div>

          <div
            class="flex items-center gap-5 justify-between w-50 max-xl:w-33 max-sm:w-28 bg-black border border-gray-700 px-3 py-2 rounded-2xl"
          >
            <span class="text-white-400 text-xs">Wear:</span>
            <input v-model="wear" step="0.01" class="bg-transparent outline-none w-10 max-xl:w-8 text-xs" />
          </div>
        </div>
        <div class="flex gap-2 max-xl:gap-1">
          <button
            class="bg-black flex gap-2 max-sm:gap-1 border border-gray-700 px-7 py-2 text-xs rounded-2xl hover:bg-neutral-700 max-xl:px-3 max-sm:px-2"
          >
            <p>In game</p>
            <img class="w-3" src="@/assets/img/received.svg" alt="" />
          </button>
          <button
            class="bg-black flex gap-2 max-sm:gap-1 border border-gray-700 px-7 py-2 text-xs rounded-2xl hover:bg-neutral-700 max-xl:px-3 max-sm:px-2"
          >
            <p>In server</p>
            <img class="w-3" src="@/assets/img/received.svg" alt="" />
          </button>
          <button
            class="bg-black gap-2 max-sm:gap-1 flex border border-gray-700 px-7 py-2 text-xs rounded-2xl hover:bg-neutral-700 max-xl:px-3 max-sm:px-2"
          >
            <p class="">Custom</p>
            <img class="w-3 h-3 leading-0" src="@/assets/img/received.svg" alt="" />
          </button>
        </div>
      </div>
      <!-- Skin Preview -->
      <div class="px-6 max-sm:px-4 rounded-2xl relative overflow-hidden justify-center flex flex-col items-center">
        <img src="@/assets/img/hand.svg" alt="Gloves" class="h-[454px] max-sm:h-[412px] -mb-6 max-sm:-my-10 object-cover" />

        <!-- Wear Progress -->
        <div class="absolute bottom-4 left-0 right-0 px-6">
          <div class="flex justify-between text-xs text-gray-400">
            <span>Wear</span>
            <span>{{ wearValue.toFixed(8) }}</span>
          </div>
          <div class="w-full h-2 rounded-full overflow-hidden mt-1 flex">
            <div class="bg-blue-600" :style="{ width: wearSegment(0.07) }"></div>
            <div class="bg-green-600" :style="{ width: wearSegment(0.15) }"></div>
            <div class="bg-yellow-500" :style="{ width: wearSegment(0.38) }"></div>
            <div class="bg-orange-600" :style="{ width: wearSegment(0.45) }"></div>
            <div class="bg-red-600" :style="{ width: wearSegment(0.95) }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const seed = ref(0)
const wear = ref(0.02)

const wearValue = computed(() => wear.value)

const wearSegment = (value) => {
  return `${value * 100}%`
}
</script>
