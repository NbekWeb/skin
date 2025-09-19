<template>
  <div class="bg-black text-white py-4 w-full">
    <h2 class="italic font-montserrat-500 mb-3">WEAR RANGE</h2>
    <div class="relative w-full h-1 bg-red-500 rounded">
      <!-- Yashil oraliq -->
      <div
        class="absolute top-0 h-1 bg-green-500"
        :style="{ left: startPercent + '%', width: rangeWidth + '%' }"
      ></div>

      <!-- Belgilar -->
      <div
        class="absolute -top-2 text-xs text-center"
        :style="{ left: startPercent + '%', transform: 'translateX(-50%)' }"
      >
        ▲
        <div>0.06 FN</div>
      </div>
      <div
        class="absolute -top-2 text-xs text-center"
        :style="{ left: endPercent + '%', transform: 'translateX(-50%)' }"
      >
        ▲
        <div>0.80 BS</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const min = 0.0
const max = 1.0
const start = 0.06
const end = 0.80

// Foizga o'tkazamiz
const startPercent = ((start - min) / (max - min)) * 100
const endPercent = ((end - min) / (max - min)) * 100
const rangeWidth = endPercent - startPercent
</script>

<style scoped>
</style>
