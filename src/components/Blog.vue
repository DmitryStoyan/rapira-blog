<script setup lang="ts">
import { ref, computed } from 'vue';
import BlogCard from '@/components/BlogCard.vue'
import Plug from '@/components/Plug.vue'

interface Comment {
  id: number;
  author: string;
  avatarUrl: string;
  content: string;
  date: string;
}

interface Post {
  id: number;
  title: string;
  date: string;
  timeToRead: string;
  comments: string;
  description: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  commentsData: Comment[];
}

const props = defineProps<{
  activeTags: string[];
  searchQuery: string;
}>();

const posts: Post[] = [
  {
    id: 1,
    title: 'Вдохновение в каждом шаге',
    date: '9 Апр',
    timeToRead: '2 мин',
    comments: '1',
    description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
    fullDescription: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: ['Природа', 'Люди'],
    imageUrl: new URL('../assets/images/cards/img1.jpg', import.meta.url).href,
    commentsData: [
      {
        id: 1,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }
    ]
  },
  {
    id: 2,
    title: 'Моменты тишины и покоя',
    date: '6 Апр',
    timeToRead: '3 мин',
    comments: '5',
    description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
    fullDescription: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: ['Природа', 'Животные'],
    imageUrl: new URL('../assets/images/cards/img2.jpg', import.meta.url).href,
    commentsData: [
      {
        id: 2,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      },
      {
        id: 2,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }, {
        id: 2,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }
    ]
  },
  {
    id: 3,
    title: 'Цвета природы в наших руках',
    date: '5 Апр',
    timeToRead: '3 мин',
    comments: '10',
    description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
    fullDescription: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: ['Природа', 'Искусство'],
    imageUrl: new URL('../assets/images/cards/img3.jpg', import.meta.url).href,
    commentsData: [
      {
        id: 3,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }
    ]
  },
  {
    id: 4,
    title: 'Семейные узы в дикой природе',
    date: '4 Апр',
    timeToRead: '15 мин',
    comments: '6',
    description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
    fullDescription: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: ['Природа', 'Животные'],
    imageUrl: new URL('../assets/images/cards/img4.jpg', import.meta.url).href,
    commentsData: [
      {
        id: 4,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }
    ]
  },
  {
    id: 5,
    title: 'Гармония городских и природных пейзажей ',
    date: '3 Апр',
    timeToRead: '2 мин',
    comments: '2',
    description: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
    fullDescription: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: ['Природа', 'Искусство'],
    imageUrl: new URL('../assets/images/cards/img5.jpg', import.meta.url).href,
    commentsData: [
      {
        id: 5,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }
    ]
  },
  {
    id: 6,
    title: 'Моменты, которые остаются в сердце ',
    date: '1 Апр',
    timeToRead: '4 мин',
    comments: '0',
    description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
    fullDescription: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
    tags: ['Природа', 'Люди', 'Животные'],
    imageUrl: new URL('../assets/images/cards/img6.jpg', import.meta.url).href,
    commentsData: [
      {
        id: 6,
        author: 'Мира Гусева',
        avatarUrl: new URL('../assets/images/users-photo/photo.jpg', import.meta.url).href,
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        date: '9.04.2024 в 14:54'
      }
    ]
  },
]

const activeTags = ref<string[]>([]);

const handleUpdateActiveTags = (tags: string[]) => {
  activeTags.value = tags;
};

const filteredPosts = computed(() => {
  return posts.filter(post => {
    const matchesTags = props.activeTags.length === 0 || post.tags.some(tag => props.activeTags.includes(tag));
    const matchesTitle = post.title.toLowerCase().includes(props.searchQuery.toLowerCase());
    return matchesTags && matchesTitle;
  });
});

</script>

<template>
  <div class="max-w-cards-w mx-auto bg-white p-7 rounded-xl max-w-1100:p-3">
    <div v-if="filteredPosts.length > 0"
      class="grid grid-cols-3 gap-x-5 gap-y-10 max-w-1100:gap-x-3 max-w-1100:gap-y-5 max-w-900:grid-cols-2 max-w-600:grid-cols-1">
      <BlogCard v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
    <div v-else>
      <Plug />
    </div>
  </div>
</template>
