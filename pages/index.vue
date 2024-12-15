<script setup>
import { useI18n } from 'vue-i18n'

useHead({})

onMounted(() => {})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const testimonials = []

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const services = [
  {
    id: 1,
    title: 'Pytorch',
    description: {
      en: 'Unleashing the power of Pytorch, I create cutting-edge AI solutions that redefine the boundaries of what\'s possible.',
    },
    icon: '/images/logo-pytorch.svg',
    image: null,
  },
  {
    id: 2,
    title: 'Tensorflow',
    description: {
      en: 'Harnessing Tensorflow, I make groundbreaking AI algorithms tailored for the dynamic needs of corporate tech.',
    },
    icon: '/images/logo-tensorflow.svg',
    image: null,
  }]
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        I love working with artificial intelligence, especially in understanding language (Natural Language Processing) and helping computers 'see' (Computer Vision).
      </p>

      <p>
        Over the years, I've worked with different companies, helping them use AI to solve interesting and challenging problems using their unique data.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        What i'm doing?
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- testimonials -->

<!--    <section class="testimonials">-->
<!--      <h3 class="h3 testimonials-title">-->
<!--        Testimonials-->
<!--      </h3>-->

<!--      <ul class="testimonials-list has-scrollbar">-->
<!--        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">-->
<!--          <div class="content-card">-->
<!--            <figure class="testimonials-avatar-box">-->
<!--              <img :src="testimonial.image" alt="Daniel lewis" width="60">-->
<!--            </figure>-->

<!--            <h4 class="h4 testimonials-item-title">-->
<!--              {{ testimonial.title }}-->
<!--            </h4>-->

<!--            <div class="testimonials-text">-->
<!--              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.tr }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </section>-->

    <!-- testimonials modal -->

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.tr" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>

    <!-- clients -->

    <section class="clients">
      <h3 class="h3 clients-title">
        Companies
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="/images/kadaster-processed.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/trendata-processed.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/beekman-processed.png" alt="client logo">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
