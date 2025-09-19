<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuModal from './MenuModal.vue'
import ByModal from './ByModal.vue'
import SearchModal from './SearchModal.vue'
const _search = ref()
const modalRef = ref(null)
const buyerRef = ref(null)
const searchRef = ref(null)
const openModal = () => {
  modalRef.value.open()
}
const menuItems = [
  'Pistols',
  'Mid-tier',
  'Rifles',
  'Knives',
  'Gloves',
  'Cases',
  'Collections',
  'Tournaments',
  'Other',
]

const activeItem = ref('Pistols')

// Submenu elementlari faqat "Other" uchun
const otherItems = [
  'CZ75-Auto',
  'Desert Eagle',
  'Dual Berettas',
  'Five-SeveN',
  'Glock-18',
  'P2000',
  'P250',
  'R8 Revolver',
  'Tec-9',
  'USP-S',
  'Zeus x27',
]

const showOther = ref(false)
const showOtherInModal = ref(false)

const router = useRouter()
const route = useRoute()

// Aktiv button holatini ref orqali saqlaymiz
const mode = ref(route.query.mode || 'buy') // default BUY

function handleItem(item) {
   mode.value = item
   router.push({ query: { ...route.query, mode: item } })
}

</script>

<template>
  <div class="!bg-black-700">
    <header class="flex items-center container !py-5 justify-between">
      <!-- Logo -->
      <img class="max-xl:h-4.5" src="@/assets/img/logo.svg" alt="" />

      <!-- Navigation (desktop) -->
      <nav class="flex max-[970px]:hidden gap-6 max-xl:gap-4 relative">
        <div
          v-for="item in menuItems"
          :key="item"
          class="relative"
          @mouseenter="item === 'Other' && (showOther = true)"
          @mouseleave="item === 'Other' && (showOther = false)"
        >
          <!-- Asosiy item -->
          <button
            @click="activeItem = item"
            class="relative flex items-center gap-1 max-xl:text-xs text-sm text-gray-400 hover:text-white transition-colors duration-300 pb-1 group"
            :class="activeItem === item && 'text-white'"
          >
            {{ item }}

            <!-- faqat Other uchun icon -->
            <svg
              v-if="item === 'Other'"
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 transition-transform duration-300"
              :class="showOther ? 'rotate-180' : 'rotate-0'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>

            <!-- underline -->
            <span
              class="absolute left-1/2 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 transform -translate-x-1/2"
              :class="activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </button>

          <!-- Submenu faqat Other uchun -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="item === 'Other' && showOther"
              class="absolute w-44 top-full left-0 mt-2 bg-black-800 shadow-lg rounded-lg p-3 flex flex-col gap-2 z-50"
              @mouseenter="showOther = true"
              @mouseleave="showOther = false"
            >
              <button
                v-for="sub in otherItems"
                :key="sub"
                @click="activeItem = sub"
                class="relative inline-flex w-fit text-gray-300 hover:text-white transition-colors duration-300 text-sm pb-1 group"
                :class="activeItem === sub && 'text-white'"
              >
                {{ sub }}
                <!-- underline faqat text uzunligicha -->
                <span
                  class="absolute left-1/2 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 transform -translate-x-1/2"
                  :class="activeItem === sub ? 'w-full' : 'w-0 group-hover:w-full'"
                ></span>
              </button>
            </div>
          </transition>
        </div>
      </nav>

      <!-- Right side -->
      <div class="flex gap-1.5">
        <button
          v-if="mode === 'buy'"
          @click="handleItem('sell')"
          :class="[
            'px-4 py-2 rounded-2xl text-white bg-green-500 italic cursor-pointer max-xl:text-xs max-xl:py-[5px] max-xl:px-[15px]',
          ]"
        >
          BUY
        </button>

        <!-- SELL button -->
        <button
          v-else
          @click="handleItem('buy')"
          :class="[
            'px-4 py-2 rounded-2xl bg-red-500 text-white italic cursor-pointer max-xl:text-xs max-xl:py-[5px] max-xl:px-[15px]',
          ]"
        >
          SELL
        </button>
        <button
          @click="openModal"
          class="max-xl:w-8 cursor-pointer max-xl:h-6.5 bg-black-800 rounded-full hidden max-[970px]:flex justify-center items-center"
        >
          <img src="@/assets/img/category.svg" alt="" />
        </button>
        <div
          @click="buyerRef.open()"
          class="w-10 cursor-pointer max-[970px]:hidden h-10 max-xl:w-8 max-xl:h-6.5 max-xl:p-1 bg-black-800 p-2 rounded-full"
        >
          <img class="w-full h-full" src="@/assets/img/candle.svg" alt="" />
        </div>
        <div
          class="w-41 max-[970px]:hidden max-[1400px]:w-24 h-10 max-xl:h-6.5 flex justify-between bg-black-800 p-2 px-4 max-[1400px]:px-3.5 max-[1400px]:py-1 rounded-full"
        >
          <input
            class="text-white w-26 max-xl:text-xs max-[1400px]:w-14 outline-0 border-0"
            placeholder="Search"
            v-model="_search"
            type="text"
          />
          <img class="h-full" src="@/assets/img/search.svg" alt="" />
        </div>
      </div>
    </header>

    <!-- Menu Modal (mobile) -->
    <MenuModal ref="modalRef">
      <nav class="flex flex-col gap-2 items-start mt-6 max-xl:gap-2">
        <div v-for="item in menuItems" :key="item" class="inline-block">
          <button
            @click="item !== 'Other' && (activeItem = item)"
            class="relative flex items-center justify-between text-sm w-full text-gray-400 hover:text-white transition-colors duration-300 pb-1 group"
            :class="activeItem === item && 'text-white'"
            @click.stop="item === 'Other' && (showOtherInModal = !showOtherInModal)"
          >
            <div class="flex gap-3 items-center">
              <span>{{ item }}</span>

              <!-- icon faqat Other uchun -->
              <svg
                v-if="item === 'Other'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 transition-transform duration-300"
                :class="showOtherInModal ? 'rotate-180' : 'rotate-0'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <!-- underline -->
            <span
              class="absolute left-1/2 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 transform -translate-x-1/2"
              :class="activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </button>

          <!-- Submenu in Modal -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="item === 'Other' && showOtherInModal" class="pl-4 mt-2 flex flex-col gap-2">
              <button
                v-for="sub in otherItems"
                :key="sub"
                @click="activeItem = sub"
                class="relative inline-flex w-fit font-montserrat-300 text-gray-400 hover:text-white transition-colors duration-300 text-sm pb-1 group"
                :class="activeItem === sub && 'text-white'"
              >
                {{ sub }}
                <span
                  class="absolute left-1/2 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 transform -translate-x-1/2"
                  :class="activeItem === sub ? 'w-full' : 'w-0 group-hover:w-full'"
                ></span>
              </button>
            </div>
          </transition>
        </div>
      </nav>

      <div
        class="gap-4 border-t border-gray-400 pt-4 flex justify-end max-sm:justify-start pr-1 mt-3"
      >
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/ins.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/soc.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/x.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/youtube.svg"
          alt=""
        />
        <img
          class="h-6.5 opacity-80 hover:opacity-100 duration-200"
          src="@/assets/img/stem.svg"
          alt=""
        />
      </div>
    </MenuModal>
    <ByModal ref="buyerRef" />
    <SearchModal ref="searchRef" />
  </div>
</template>
