<script setup>
import { ref } from "vue"

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: String,
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Any",
  },
})

const emit = defineEmits(["update:modelValue"])

const open = ref(false)

const selectOption = (opt) => {
  emit("update:modelValue", opt)
  open.value = false
}
</script>

<template>
  <div class="relative w-full">
    <!-- Label -->
    <label v-if="placeholder" class="text-sm text-white/70 mb-1 block">
      {{ placeholder }}
    </label>

    <!-- Trigger -->
    <div
      tabindex="0"
      @click="open = !open"
      @blur="open = false"
      class="flex items-center justify-between w-full h-12 max-lg:h-10 px-4 rounded-xl bg-black-800 border transition cursor-pointer 
             border-transparent hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500"
      :class="open ? 'border-white/40 ring-2 ring-orange-500' : ''"
    >
      <span v-if="modelValue" class="truncate">
        {{ modelValue  }}
      </span>
       <span v-else class="truncate text-gray-400">
        {{ placeholder  }}
      </span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="open ? 'rotate-180' : ''"
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
        v-if="open"
        class="absolute top-19 left-0 w-full bg-black-800 border border-white/20 rounded-xl shadow-lg z-50 overflow-hidden"
      >
        <div
          v-for="opt in options"
          :key="opt"
          @click="selectOption(opt)"
          class="px-4 py-2 hover:bg-white/10 cursor-pointer transition"
        >
          {{ opt }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
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
