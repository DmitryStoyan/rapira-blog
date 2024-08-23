<script setup lang="ts">
import BlogHeader from '@/components/BlogHeader.vue';
import BlogCard from '@/components/BlogCard.vue'

const posts = [
  {
    id: 1,
    title: 'Вдохновение в каждом шаге',
    date: '9 Апреля',
    timeToRead: '2 мин',
    comments: '1',
    description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
    tags: ['Природа', 'Люди'],
    imageUrl: new URL('../assets/images/cards/img1.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: 'Моменты тишины и покоя',
    date: '6 Апреля',
    timeToRead: '3 мин',
    comments: '5',
    description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    tags: ['Природа', 'Животные'],
    imageUrl: new URL('../assets/images/cards/img2.jpg', import.meta.url).href
  },
  {
    id: 3,
    title: 'Цвета природы в наших руках',
    date: '5 Апреля',
    timeToRead: '3 мин',
    comments: '10',
    description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
    tags: ['Природа', 'Искусство'],
    imageUrl: new URL('../assets/images/cards/img3.jpg', import.meta.url).href
  },
  {
    id: 4,
    title: 'Семейные узы в дикой природе',
    date: '4 Апреля',
    timeToRead: '15 мин',
    comments: '6',
    description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
    tags: ['Природа', 'Животные'],
    imageUrl: new URL('../assets/images/cards/img4.jpg', import.meta.url).href
  },
  {
    id: 5,
    title: 'Гармония городских и природных пейзажей ',
    date: '3 Апреля',
    timeToRead: '2 мин',
    comments: '2',
    description: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
    tags: ['Природа', 'Искусство'],
    imageUrl: new URL('../assets/images/cards/img5.jpg', import.meta.url).href
  },
  {
    id: 6,
    title: 'Моменты, которые остаются в сердце ',
    date: '1 Апреля',
    timeToRead: '4 мин',
    comments: '0',
    description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
    tags: ['Природа', 'Люди', 'Животные'],
    imageUrl: new URL('../assets/images/cards/img6.jpg', import.meta.url).href
  },

]
</script>

<template>
  <div class="max-w-cards-w mx-auto bg-white p-7 rounded-xl">
    <div class="grid grid-cols-3 gap-x-5 gap-y-10">
      <BlogCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
