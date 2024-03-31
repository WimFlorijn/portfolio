<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

onMounted(() => {
})

function changeLang() {
  if (locale.value === 'tr') {
    locale.value = 'en'
  } else {
    locale.value = 'tr'
  }
}
</script>

<template>
  <div class="cursor-pointer transition-all fade" @click="changeLang()">
    <img :src="`/flags/${locale}.png`" class="h-6">
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>
