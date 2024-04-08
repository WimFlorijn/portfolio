<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            VWO - Bilingual
          </h4>

          <span>2007 — 2013</span>

          <p class="timeline-text">
            In high school, I thrived in a program where I studied both science and technology while learning in two languages. It was an exciting and demanding setting that deepened my interest in scientific studies and improved my language skills. This experience made my educational journey very fulfilling and enjoyable.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            University of Twente - Bachelor
          </h4>

          <span>2013 — 2016</span>

          <p class="timeline-text">
            I earned my bachelor's degree in mathematics and machine learning at the University of Twente, where I sharpened my abilities to apply these areas in tackling real-world issues, preparing myself for a future in data-centric innovation.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            University of Twente - Master
          </h4>

          <span>2017 — 2019</span>

          <p class="timeline-text">
            I completed my master's in machine learning at the University of Twente with a 9/10 grade. My thesis improved ways to segment and classify search queries, showing my ability to convert data into useful insights at Trendata.
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Machine Learning Engineer
          </h4>

          <span>2019 — Present</span>

          <p class="timeline-text">
            Expanded on my master's research by developing an AI-driven application for real-time big-data analysis, utilized by users with support from LLMs, POS tagging, and embedding models. This system integrates a machine learning API, Django backend, and Vue frontend.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Consultant / Machine Learning Engineer
          </h4>

          <span>2019 — Present</span>

          <p class="timeline-text">
            Working on AI models to vectorize cadastral field sketches, offering chatbot access to cadastral data and enhancing planning tools with accurate forecasts. These models, built with PyTorch and TensorFlow, are deployed using Flask/FastAPI backends.
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        My skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Python
            </h5>
            <data value="95">95%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 95%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Tensorflow
            </h5>
            <data value="85">85%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Consulting
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vue
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
