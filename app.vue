<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

locale.value = 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {

})
</script>

<template>
  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
