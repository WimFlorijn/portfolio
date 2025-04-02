<script setup>
import {useI18n} from 'vue-i18n'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'

useHead({
  title: 'Portfolio',
})

const {locale} = useI18n({useScope: 'global'})
const projects = [
  {
    id: 1,
    title: 'Loki',
    category: {
      id: 2,
      title: {
        en: 'Chatbot',
      },
    },
    content: {
      en: 'Welcome to Loki, the chatbot from Kadaster. Loki answers simple questions using information from the open datasets managed by Kadaster and other geographic information. You can ask your question in your own words. Loki will have a conversation with you to ensure you get the answer you\'re looking for. By enabling questions to be asked in \'natural language\' digitally, Kadaster aims to make geographic information even more accessible to everyone.',
    },
    date: '14 June, 2023',
    url: 'https://labs.kadaster.nl/cases/lokiv3',
    image: '/images/loki-logo.jpg',
  },
  {
    id: 2,
    title: 'Trendata Insights',
    category: {
      id: 3,
      title: {
        en: 'Big Data Analysis',
      },
    },
    content: {
      en: 'Trendata turns market mystery into business mastery with a market intelligence platform that gives you a complete understanding of your market.',
    },
    date: '25 September, 2023',
    url: 'https://trendata.io/',
    image: '/images/trendata-insights.png',
  },
  {
    id: 3,
    title: 'Device Finder',
    category: {
      id: 1,
      title: {
        en: 'Computer Vision',
      },
    },
    content: {
      en: 'A cutting-edge web application designed to revolutionize the way you identify devices from images. With the power of advanced AI technology, beekman can recognize various devices captured in photos, pinpointing their specific models and types.',
    },
    date: '2 March, 2024',
    url: 'https://wimflorijn.nl/scanner',
    image: '/images/typekaart-scanner.png',
  },
  {
    id: 4,
    title: 'Kadastrale Kaart Next.',
    category: {
      id: 1,
      title: {
        en: 'Computer Vision',
      },
    },
    content: {
      en: 'For processing cadastral sketches, we use the power of artificial intelligence. Take, for instance, the interpretation of handwritten measurement data. By automating this, we\'re not just cutting-edge – we\'re slashing costs and saving time.',
    },
    date: '19 June, 2022',
    url: 'https://www.kadaster.nl/over-ons/beleid/algoritmeregister/kadastrale-kaart-next',
    image: '/images/kkn-banner.png',
  },
  {
    id: 5,
    title: 'Trendata Chat',
    category: {
      id: 2,
      title: {
        en: 'Chatbot',
      },
    },
    content: {
      en: 'Trendata develops a smart chatbot for the dutch municipalities which help inhabitants with debts to get help.',
    },
    date: '5 December, 2023',
    url: 'https://chat.trendata.io/',
    image: '/images/trendata-chat.png',
  },
  {
    id: 6,
    title: "Technical Drawings",
    category: {
      id: 1,
      title: {
        "en": "Computer Vision"
      }
    },
    content: {
      en: "An innovative web application that automates the extraction of information from technical drawings. Leveraging state-of-the-art AI, this tool accurately captures and classifies technical specifications and details, facilitating efficient data management and analysis."
    },
    date: '12 May, 2024',
    url: "https://wimflorijn.nl/scanner/views",
    image: "/images/views-scanner.png"
  }
]
const categories = [
  {
    id: 1,
    title: {
      en: 'Computer Vision',
    },
  },
  {
    id: 2,
    title: {
      en: 'Chatbot',
    },
  },
  {
    id: 3,
    title: {
      en: 'Big Data Analysis',
    },
  },
]

const projectList = [...projects]
const activeCategory = ref(0)
const filterMenu = ref(false)
const activeCategoryName = ref('')

function changeFilter(id) {
  activeCategory.value = id
  if (id !== 0)
    activeCategoryName.value = categories.value.find(item => item.id === id).title

  filterMenu.value = !filterMenu.value
}

const activeItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showItem(id) {
  activeItem.value = projects.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeItem() {
  activeItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
</script>

<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.portfolio') }}
      </h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button :class="{ active: activeCategory === 0 }" @click="changeFilter(0)">
            All
          </button>
        </li>

        <li v-for="category in categories" :key="category.id" class="filter-item" @click="changeFilter(category.id)">
          <button :class="{ active: activeCategory === category.id }">
            {{ locale === 'en' ? category.title?.en : category.title?.tr }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button :class="{ active: filterMenu }" class="filter-select" @click="filterMenu = !filterMenu">
          <div class="select-value">
            {{
              activeCategory !== 0 ? (locale === 'en' ? activeCategoryName?.en : activeCategoryName?.tr) : 'Select Category'
            }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down"/>
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">
              All
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="select-item">
            <button @click="changeFilter(category.id)">
              {{ locale === 'en' ? category.title?.en : category.title?.tr }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="project-list">
        <li v-for="project in projectList" :key="project.id"
            :class="{ active: activeCategory === project.category.id || activeCategory === 0 }" class="project-item">
          <a class="cursor-pointer" @click="showItem(project.id)">

            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"/>
              </div>

              <img :src="project.image" :alt="project.title" loading="lazy">
            </figure>

            <h3 class="project-title">{{ project.title }}</h3>

            <p class="project-category">{{
                locale === 'en' ? project.category.title?.en : project.category.title?.tr
              }}</p>

          </a>
        </li>
      </ul>

      <div class="modal-container" :class="{ active: activeModal }">
        <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }"/>

        <section class="testimonials-modal block">
          <button class="modal-close-btn" @click="closeItem">
            <ion-icon name="close-outline"/>
          </button>

          <div>
            <figure>
              <img :src="activeItem.image" class="rounded-lg" :alt="activeItem.title">
            </figure>
          </div>

          <div class="modal-content space-y-3 mt-4">
            <h4 class="h3 modal-title">
              <a :href="activeItem.url">{{ activeItem.title }}</a>
            </h4>

            <small class="flex items-center justify-start gap-2 text-gray-500">
              <span>{{ activeItem.date }}</span> |
              <span>{{ locale === 'en' ? activeItem.category?.title?.en : activeItem.category?.title?.tr }}</span> | <a
                :href="activeItem.url">View Project</a>
            </small>

            <p class="text-justify" v-html="locale === 'en' ? activeItem.content?.en : activeItem.content?.tr"/>
          </div>
        </section>
      </div>
    </section>
  </article>
</template>
