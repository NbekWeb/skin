<script setup>
import { ref, defineExpose } from 'vue'
import BaseSelect from './BaseSelect.vue'
const isOpen = ref(false)

// form fields
const search = ref('')
const minPrice = ref('')
const maxPrice = ref('')
const weapon = ref('')
const color = ref('')
const film = ref('')
const association = ref('')
const rarity = ref('')
const type = ref('')
const exterior = ref('')
const extra = ref('')
const tournament = ref('')
const team = ref('')
const orderBy = ref('Popularity')
const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)

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
        <div
          v-if="isOpen"
          class="rounded-3xl w-[750px] max-lg:w-151 max-sm:mx-5 max-h-[90vh] overflow-y-auto bg-black text-white p-6 max-lg:p-4 shadow-2xl"
        >
          <h2 class="text-xl font-montserrat-500  uppercase proportional-nums  text-white-900 italic mb-4">Advanced Search</h2>

          <div class="flex flex-col gap-4">
            <label class="flex flex-col gap-1">
              <span class="text-sm text-white/70">Search</span>
              <input
                v-model="search"
                type="text"
                placeholder="Search"
                class="h-12 max-lg:h-10  px-4 rounded-xl bg-black-800 border border-transparent focus:border-white/30 outline-none"
              />
            </label>

            <!-- Price -->
            <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <label class="flex flex-col gap-1">
                <span class="text-sm text-white/70">Minimum price</span>
                <input
                  v-model="minPrice"
                  placeholder="Minimum price"
                  class="h-12 max-lg:h-10  px-4 rounded-xl bg-black-800 border border-transparent focus:border-white/30 outline-none"
                />
              </label>
              <label class="flex flex-col gap-1">
                <span class="text-sm text-white/70">Maximum price</span>
                <input
                  v-model="maxPrice"
                  placeholder="Maximum price"
                  class="h-12 max-lg:h-10  px-4 rounded-xl bg-black-800 border border-transparent focus:border-white/30 outline-none"
                />
              </label>
            </div>

            <!-- Select fields -->
            <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <BaseSelect
                v-model="weapon"
                :options="['AK-47', 'M4A1-S', 'AWP']"
                placeholder="Weapon"
              />
              <BaseSelect v-model="color" :options="['Red', 'Blue', 'Green']" placeholder="Color" />
              <BaseSelect v-model="film" :options="['Any', 'Yes', 'No']" placeholder="Film" />
              <BaseSelect
                v-model="association"
                :options="['Alpha', 'Beta', 'Gamma']"
                placeholder="Association"
              />
              <BaseSelect
                v-model="rarity"
                :options="['Common', 'Rare', 'Legendary']"
                placeholder="Rarity"
              />
              <BaseSelect
                v-model="type"
                :options="['Rifle', 'Pistol', 'Knife']"
                placeholder="Type"
              />
              <BaseSelect
                v-model="exterior"
                :options="['Factory New', 'Minimal Wear']"
                placeholder="Exterior"
              />
              <BaseSelect v-model="extra" :options="['StatTrak', 'Souvenir']" placeholder="Extra" />
              <BaseSelect
                v-model="tournament"
                :options="['Major', 'Minor']"
                placeholder="Tournament"
              />
              <BaseSelect v-model="team" :options="['Team A', 'Team B']" placeholder="Team" />
            </div>

            <BaseSelect
              v-model="orderBy"
              :options="['Popularity', 'Price ↑', 'Price ↓']"
              placeholder="Order by"
            />
          </div>

          <!-- Buttons -->
          <div class="flex gap-4 justify-between mt-6">
            <button
              @click="close"
              class="flex-1 h-12 rounded-full bg-black-800 text-white/90 hover:text-white hover:bg-black-700 transition"
            >
              Cancel
            </button>
            <button
              @click="close"
              class="flex-1 h-12 rounded-full relative text-white overflow-hidden group"
            >
              <!-- Gradient border -->
              <span
                class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-red-500 to-orange-400"
              ></span>

              <!-- Inner background -->
              <span
                class="absolute inset-0 rounded-full m-[1px] bg-bg-transparent group-hover:bg-black transition-colors duration-300 ease-in-out"
              ></span>

              <!-- Label -->
              <span class="relative z-10">Save</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
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
