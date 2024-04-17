<script setup>
let isOpen = ref(true)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/my-profile-picture.png" alt="Wim Florijn">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Wim Florijn">
          Wim Florijn
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">ML Engineer</span>
          <span>Data Scientist</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"/>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"/>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"/>
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:wimflorijn@hotmail.com" class="contact-link">wimflorijn@hotmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github"/>
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/WimFlorijn" class="contact-link" target="_blank">WimFlorijn</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin"/>
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/wim-florijn-592733115/" class="contact-link" target="_blank">Wim
              Florijn</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"/>
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Apeldoorn, Netherlands</address>
          </div>
        </li>
      </ul>

      <div class="separator"/>

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://www.instagram.com" class="social-link" target="_blank">
            <ion-icon name="logo-instagram"/>
          </NuxtLink>
        </li>
        <li class="social-item">
          <NuxtLink to="https://www.twitter.com" class="social-link" target="_blank">
            <ion-icon src="/images/logo-x.svg"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
