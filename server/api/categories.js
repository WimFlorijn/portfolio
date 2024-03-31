import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Chatbot',
      },
    },
    {
      id: 2,
      title: {
        en: 'Big Data Analysis',
      },
    },
    {
      id: 3,
      title: {
        en: 'Computer Vision',
      },
    },
  ]
})
