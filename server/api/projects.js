import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Loki',
      category: {
        id: 1,
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
      title: 'Trendata Chat',
      category: {
        id: 1,
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
      id: 3,
      title: 'Trendata Insights',
      category: {
        id: 2,
        title: {
          en: 'Big Data Analysis',
        },
      },
      content: {
        en: 'Trendata turns market mystery into business mastery with a market intelligence platform that gives you a complete understanding of your market.',
      },
      url: 'https://trendata.io/',
      image: '/images/trendata-insights.png',
    },
    {
      id: 4,
      title: 'Typekaart Scanner.',
      category: {
        id: 3,
        title: {
          en: 'Computer Vision',
        },
      },
      content: {
        en: 'A cutting-edge web application designed to revolutionize the way you identify devices from images. With the power of advanced AI technology, beekman can recognize various devices captured in photos, pinpointing their specific models and types.',
      },
      url: 'https://www.wimflorijn.nl/scanner',
      image: '/images/typekaart-scanner.webp',
    },
  ]
})
