<script setup lang="ts">
import Comments from '@/components/Comments.vue';
import { ref, computed, watch } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const commentsCount = ref(props.post.commentsData?.length || 0);

const updateCommentsCount = (newComments) => {
  props.post.commentsData = newComments;
  commentsCount.value = newComments.length;
};


watch(() => props.post.commentsData, (newCommentsData) => {
  commentsCount.value = newCommentsData?.length || 0;
});

const getCommentWord = computed(() => {
  const count = commentsCount.value;
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
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg max-w-lg w-full p-4 relative">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="$emit('close')">
        &times;
      </button>
      <h2 class="text-lg font-bold">{{ post.title }}</h2>
      <p class="text-sm text-gray-500 mb-4">
        {{ post.date }} • {{ post.timeToRead }} • {{ commentsCount }} {{ getCommentWord }}
      </p>
      <img :src="post.imageUrl" alt="" class="w-full rounded-md mb-4 object-cover">
      <p class="text-gray-700">{{ post.fullDescription }}</p>
      <div class="flex gap-2 mt-3 mb-4">
        <span v-for="tag in post.tags" :key="tag"
          class="text-blue-600 bg-blue-100 px-14px py-6px rounded-tag text-sm text-tag-text">
          {{ tag }}
        </span>
      </div>
      <Comments :comments="post.commentsData" @comment-added="updateCommentsCount" />
    </div>
  </div>
</template>
