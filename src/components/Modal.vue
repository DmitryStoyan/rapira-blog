<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import Comments from '@/components/Comments.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'update-comments', 'comment-added']);


const localComments = ref([...props.post.commentsData]);

const updateCommentsCount = (newComments) => {
  localComments.value = newComments;
  emit('update-comments', newComments);
};


watch(
  () => props.post.commentsData,
  (newCommentsData) => {
    localComments.value = [...newCommentsData];
  },
  { immediate: true }
);

const getCommentWord = computed(() => {
  const count = localComments.value.length;
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'комментарий';
  } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
    return 'комментария';
  } else {
    return 'комментариев';
  }
});

const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close');
  }
};

const handleEscKey = (event) => {
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
    <div class="bg-white rounded-lg max-w-lg w-full p-4 relative">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="$emit('close')">
        &times;
      </button>
      <h2 class="text-lg font-bold">{{ post.title }}</h2>
      <p class="text-sm text-gray-500 mb-4">
        {{ post.date }} • {{ post.timeToRead }} • {{ localComments.length }} {{ getCommentWord }}
      </p>
      <img :src="post.imageUrl" alt="" class="w-full rounded-md mb-4 object-cover">
      <p class="text-gray-700">{{ post.fullDescription }}</p>
      <div class="flex gap-2 mt-3 mb-4">
        <span v-for="tag in post.tags" :key="tag"
          class="text-blue-600 bg-blue-100 px-14px py-6px rounded-tag text-sm text-tag-text">
          {{ tag }}
        </span>
      </div>
      <Comments :comments="localComments" @comment-added="updateCommentsCount" />
    </div>
  </div>
</template>
