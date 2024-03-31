import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Pytorch',
      description: {
        en: 'I create modern and advanced AI algorithms using Pytorch, the Python framework.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
      },
      icon: 'logo-vue',
      image: null,
    }]
})
