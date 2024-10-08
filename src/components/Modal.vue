<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { getCommentWord } from '@/utils/comments';
import Comments from '@/components/Comments.vue';

const props = defineProps<{
  post: {
    title: string;
    date: string;
    timeToRead: string;
    commentsData: Array<any>;
    imageUrl: string;
    fullDescription: string;
    tags: string[];
  }
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'update-comments', newComments: any[]): void;
  (e: 'comment-added'): void;
}>();

const localComments = ref([...props.post.commentsData]);

const updateCommentsCount = (newComments: any[]) => {
  localComments.value = newComments;
  emit('update-comments', newComments);
};

watch(
  () => props.post.commentsData,
  (newCommentsData) => {
    localComments.value = [...newCommentsData];
  },
  { immediate: true, deep: true }
);

const commentWord = computed(() => getCommentWord(localComments.value.length));

const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close');
  }
};

const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscKey);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey);
});
</script>

<template>
  <div @click="handleOverlayClick" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg max-w-lg w-full p-4 relative modal-content max-h-99vh overflow-y-auto min-w-375px">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="$emit('close')">
        &times;
      </button>
      <h2 class="text-lg font-bold">{{ post.title }}</h2>
      <p class="text-sm text-gray-500 mb-4">
        {{ post.date }} • {{ post.timeToRead }} • {{ localComments.length }} {{ commentWord }}
      </p>

      <img :src="post.imageUrl" alt="Post image" class="w-full rounded-md mb-4 object-cover">
      <p class="text-gray-700 text-base">{{ post.fullDescription }}</p>
      <div class="flex gap-2 mt-3 mb-4">
        <span v-for="tag in post.tags" :key="tag"
          class="text-blue-600 bg-blue-100 px-4 py-1 rounded-tag text-sm text-tag-text">
          {{ tag }}
        </span>
      </div>
      <Comments :comments="localComments" @comment-added="updateCommentsCount" />
    </div>
  </div>
</template>
