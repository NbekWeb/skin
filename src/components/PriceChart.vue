<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const priceChange = ref(-10.09)
const offersChange = ref(9)
const offersSold = ref(0)

const series = ref([
  {
    name: 'Price',
    data: [850, 830, 740, 850, 830, 600], // qiymatlar
  },
])

const chartOptions = ref({
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: '#fff',
  },
  stroke: {
    curve: 'straight',
    width: 2,
    colors: ['#ff7300'],
  },
  markers: {
    size: 6,
    colors: ['#ff7300'],
    strokeColors: '#111',
    strokeWidth: 2,
  },
  grid: {
    borderColor: '#333',
    strokeDashArray: 3,
  },
  xaxis: {
    categories: ['Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 20'],
  },
  yaxis: {
    min: 0,
    max: 1000,
    tickAmount: 5,
  },
})
</script>

<template>
  <div class="bg-blackrounded-xl">
    <!-- Title -->
    <h2 class="uppercase font-montserrat-500 text-2xl max-lg:text-base italic">PRICE HISTORY</h2>

    <!-- Stats cards -->
    <div class="grid grid-cols-3 gap-4 my-1.5">
      <div class="bg-[#111] rounded-lg p-4 max-sm:pb-6">
        <p class="text-gray-400 font-montserrat-300 text-sm max-sm:text-xs">Price change</p>
        <div class="flex gap-1 mt-2">
          <p class="text-lg max-sm:text-sm font-montserrat-300">{{ priceChange }}$</p>
          <p
            class="text-xs max-sm:text-[10px] text-red-400"
            :class="priceChange < 0 ? 'text-red-400' : 'text-green-400'"
          >
            ▼0.72%
          </p>
        </div>
      </div>

      <div class="bg-[#111] rounded-lg p-4 pb-6 max-sm:pb-6">
        <p class="text-gray-400 font-montserrat-300 max-sm:text-xs">Offers change</p>
        <div class="flex gap-1 mt-2">
          <p class="text-lg max-sm:text-sm font-montserrat-300">+{{ offersChange }}</p>
          <p
            class="text-xs max-sm:text-[10px] text-green-400"
            :class="offersChange > 0 ? 'text-green-400' : 'text-red-400'"
          >
            ▲39%
          </p>
        </div>
      </div>

      <div class="bg-[#111] rounded-lg p-4 max-sm:pb-6">
        <p class="text-gray-400 font-montserrat-300  max-sm:text-xs">Offers sold</p>
        <p class="text-lg max-sm:text-sm font-montserrat-300">{{ offersSold }}</p>
      </div>
    </div>
    <div class="bg-black-700 p-4 pr-2 pb-0 text-black rounded-2xl">
      <!-- Tabs -->
      <div class="flex space-x-4 border-b border-gray-400 pb-1 text-sm text-gray-400 mb-4">
        <span class="text-orange-500 cursor-pointer">7d</span>
        <span class="text-orange-500 cursor-pointer font-montserrat-300 border-b border-orange-500"
          >1m</span
        >
        <span class="cursor-pointer">3m</span>
        <span class="cursor-pointer">6m</span>
        <span class="cursor-pointer">1y</span>
        <span class="cursor-pointer">YTD</span>
        <span class="cursor-pointer">All</span>
      </div>

      <!-- Chart -->
      <VueApexCharts
        class="-mx-4"
        type="line"
        height="210"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<style scoped>
.bg-black {
  background-color: #000;
}
</style>
