<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const dropdownOpen = ref(false)
const selectedCurrency = ref({ label: '$ USD', value: 'USD' })

const currencies = [
  { label: '$ USD', value: 'USD' },
  { label: '€ EUR', value: 'EUR' },
  { label: '£ GBP', value: 'GBP' },
  { label: '¥ JPY', value: 'JPY' },
]

const open = () => (isOpen.value = true)
const close = () => {
  isOpen.value = false
  dropdownOpen.value = false
}

const selectCurrency = (currency) => {
  selectedCurrency.value = currency
  dropdownOpen.value = false
}

defineExpose({ open, close })
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black-700"
      @click.self="close"
    >
      <transition name="scale">
        <div v-if="isOpen" class="rounded-3xl max-sm:!mx-5 w-[420px] bg-black text-white p-6 shadow-2xl">
          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <div class="flex gap-2.5 items-center">
              <button class="w-9 h-9 max-lg:w-4 max-lg:h-4 rounded-full flex justify-center items-center">
                <img src="@/assets/img/setting.svg" alt="" />
              </button>
              <p class="font-montserrat-500 uppercase max-lg:text-base text-2xl italic">Currency</p>
            </div>
            <div
              @click="close"
              class="cursor-pointer w-9 h-9  max-lg:w-8 max-lg:h-8 flex justify-center items-center bg-black-800 rounded-full"
            >
              <img class="w-5 max-lg:w-4" src="@/assets/img/close.svg" alt="close" />
            </div>
          </div>

          <!-- Custom Select -->
          <div class="relative mb-8">
            <!-- Selected -->
            <div
              @click="dropdownOpen = !dropdownOpen"
              class="flex items-center justify-between w-full h-12 max-lg:h-10 px-4 rounded-full bg-black-800 cursor-pointer border border-transparent hover:border-white/30 transition"
            >
              <span>{{ selectedCurrency.label }}</span>
              <svg
                class="w-4 h-4 transition-transform"
                :class="dropdownOpen ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <!-- Options -->
            <transition name="dropdown">
              <div
                v-if="dropdownOpen"
                class="absolute top-14 left-0 w-full bg-black-800 rounded-2xl shadow-lg border border-white/20 overflow-hidden z-50"
              >
                <div
                  v-for="c in currencies"
                  :key="c.value"
                  @click="selectCurrency(c)"
                  class="px-4 py-2 cursor-pointer hover:bg-white/10 transition"
                >
                  {{ c.label }}
                </div>
              </div>
            </transition>
          </div>

          <!-- Buttons -->
          <div class="flex gap-4 justify-between">
            <!-- Cancel -->
            <button
              @click="close"
              class="flex-1 h-12 max-lg:h-10 max-lg:text-sm rounded-full cursor-pointer  bg-black-800 text-white/90 hover:text-white hover:bg-black-700 transition-colors duration-300 ease-in-out"
            >
              Cancel
            </button>

            <!-- Save -->
            <button
              @click="close"
              class="flex-1 h-12 max-lg:h-10 rounded-full relative text-white overflow-hidden group transform transition-all duration-300"
            >
              <!-- Gradient border -->
              <span
                class="absolute inset-0 rounded-full p-[1px] bg-[length:200%_200%] bg-gradient-to-r from-red-500 via-orange-400 to-red-500 group-hover:animate-gradient-move"
              ></span>

              <!-- Inner background -->
              <span
                class="absolute inset-0 rounded-full m-[1px] bg-black max-lg:bg-transparent group-hover:bg-transparent cursor-pointer  transition-colors duration-300 ease-in-out"
              ></span>

              <!-- Label -->
              <span class="relative max-lg:text-sm z-10">Save</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.animate-gradient-move {
  animation: gradient-move 2s linear infinite;
}

/* Modal animations */
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

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}
.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
