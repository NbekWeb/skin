<script setup>
import { ref, defineExpose } from 'vue'
import SearchModal from './SearchModal.vue'
import ByModal from './ByModal.vue'
const isOpen = ref(false)
const buyerRef = ref(null)

// modalni boshqarish methodlari
const open = () => {
  isOpen.value = true
}
const close = () => {
  isOpen.value = false
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <!-- Overlay -->
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-auto !bg-black" @click.self="close">
      <!-- Modal content -->
      <transition name="scale">
        <div v-if="isOpen" class="rounded-2xl bg-black-900 text-white p-4 shadow-2xl">
          <div class="flex justify-between items-start">
            <div class="flex gap-2.5 items-center">
              <button
                class="max-xl:w-8 max-xl:h-6.5 bg-black-800 rounded-full hidden max-[970px]:flex justify-center items-center"
              >
                <img src="@/assets/img/category1.svg" alt="" />
              </button>
              <div
                @click="buyerRef.open()"
                class="w-10 h-10 cursor-pointer max-xl:w-8 max-xl:h-6.5 max-xl:p-1 bg-black-800 p-2 rounded-full"
              >
                <img class="w-full h-full" src="@/assets/img/candle.svg" alt="" />
              </div>
              <p
                class="font-montserrat-500 uppercase proportional-nums text-xl max-sm:text-base text-white-900 italic"
              >
                MENU
              </p>
            </div>
            <div
              class="max-xl:w-6.5 max-xl:h-6.5 flex justify-center items-center bg-black-800 rounded-full"
            >
              <img @click="close" class="cursor-pointer" src="@/assets/img/close.svg" alt="" />
            </div>
          </div>
          <!-- slot orqali ichidagi kontent tashlanadi -->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
   <ByModal ref="buyerRef" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s ease;
}
.scale-enter-from {
  transform: scale(0.8);
}
.scale-leave-to {
  transform: scale(0.8);
}
</style>
