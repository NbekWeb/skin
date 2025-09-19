<script setup>
import PriceChart from './PriceChart.vue'
import Inpect from './Inpect.vue'
const stats = [
  { label: 'Category', value: 'Skin' },
  { label: 'Type', value: 'Gloves' },
  { label: 'Weapon', value: 'Sport gloves' },
  { label: 'Finish', value: 'Big game' },
  { label: 'Finish catalog', value: '10074' },
  { label: 'Pattern variants', value: 'Yes' },
  { label: 'Model version', value: 'CS2' },
  { label: 'Popularity', value: '95%' },
  { label: 'Designer', value: 'Valve' },
  { label: 'Realeased', value: 'December 3rd, 2020' },
  { label: 'Update', value: 'Operation Broken Fang' },
]
</script>

<template>
   <div>
      <div class="grid grid-cols-3 gap-4 my-3 max-md:flex max-md:flex-col-reverse">
        <div class="">
          <p class="uppercase font-montserrat-500 text-2xl max-lg:text-base italic">Summary</p>
          <div class="my-1.5 rounded-2xl bg-black-700 py-3 px-4">
            <div
              v-for="(item, index) in stats"
              :key="index"
              class="flex justify-between border-b py-2 border-gray-500"
              :class="index == stats.length - 1 && ' !border-0'"
            >
              <p class="font-montserrat-300 text-xs">{{ item.label }}</p>
              <p class="font-montserrat-300 text-xs text-gray-400">{{ item.value }}</p>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <PriceChart />
        </div>
      </div>
      <Inpect />
   </div>
</template>
