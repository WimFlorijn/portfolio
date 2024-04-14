<script setup>
import emailjs from '@emailjs/browser'
import {useNotification} from '@kyvg/vue3-notification'

useHead({
  title: 'Contact',
})

const {notify} = useNotification()
const form = ref(null)
const name = ref('')
const email = ref('')
const message = ref('')

async function submitForm() {
  name.value = ''
  email.value = ''
  message.value = ''

  notify({
    type: 'success',
    title: 'Success',
    text: 'Your message has been sent!',
  })
  await emailjs.sendForm('service_ceiuds3', 'template_8uo5z3g', form.value, {publicKey: 'P-W7S2Z7ORBfSZdOo'})
}
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.contact') }}
      </h2>
    </header>

    <section class="contact-form">
      <h3 class="h3 form-title">
        Contact Form
      </h3>

      <form ref="form" class="form" data-form @submit.prevent="submitForm">
        <div class="input-wrapper">
          <input v-model="name" type="text" name="name" class="form-input" placeholder="Full name" required
                 data-form-input>

          <input v-model="email" type="email" name="email" class="form-input" placeholder="Email address" required
                 data-form-input>
        </div>

        <textarea v-model="message" name="message" class="form-input" placeholder="Your Message" required
                  data-form-input/>

        <button class="form-btn">
          <ion-icon name="paper-plane"/>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>
