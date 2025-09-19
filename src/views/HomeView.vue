<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>

<template>
  <main class="bg-black flex-col justify-between min-h-screen">
    <BaseHeader />
    <div class="!my-12 container max-lg:!my-9 max-sm:!my-6">

       <RouterView />
    </div>
    <BaseFooter />
  </main>
</template>
