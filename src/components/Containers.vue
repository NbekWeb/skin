<script setup>
const stats = [
  { label: 'Current Price', value: '$1,392.35' },
  { label: '24h Price Change', value: '$0.00 (0.00%)' },
  { label: '24h Trading Volume', value: '$0.00' },
  { label: 'Market Cap', value: '$44,555.20' },
  { label: 'Volume / Market Cap', value: '0.0000' },
  { label: '7 Day Low', value: '$1,277.13' },
  { label: '30 Day Low', value: '$1,392.35' },
  { label: '30 Day High', value: '$1,458.52' },
  { label: '52 Week Low', value: '$893.91' },
  { label: '52 Week High', value: '$893.91' },
  { label: 'All Time Low', value: 'Operation Broken Fang' },
  { label: 'All Time High', value: '$3,828.91' },
]
</script>
<template>
  <div class="mt-6">
    <p class="uppercase font-montserrat-500 italic">Containers</p>
    <div class="grid grid-cols-3">
      <img src="@/assets/img/item.svg" alt="" />
      <img src="@/assets/img/item.svg" alt="" />
      <img src="@/assets/img/item.svg" alt="" />
    </div>
  </div>
  <div class="mt-6">
    <p class="uppercase font-montserrat-500 italic">Community rating</p>
    <div class="flex gap-4 my-1.5">
      <p class="font-montserrat-300 text-xs">2,2 rating</p>
      <p class="font-montserrat-300 text-xs text-gray-400">72k reviews</p>
    </div>
    <div class="flex gap-0.5 text-orange-400 text-xs mt-1">
      <span v-for="i in 5" :key="i">
        <i v-if="i <= 2" class="fas fa-star"></i>
        <i v-else class="fas fa-star text-gray-400"></i>
      </span>
    </div>
  </div>
  <div class="mt-5">
    <p class="uppercase font-montserrat-500 italic">Price statistics</p>
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
</template>

<style></style>
