<script setup lang="ts">
import Comments from '@/components/Comments.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg max-w-lg w-full p-4 relative">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800" @click="$emit('close')">
        &times;
      </button>
      <img :src="post.imageUrl" alt="" class="w-full rounded-md mb-4 object-cover">
      <h2 class="text-lg font-bold">{{ post.title }}</h2>
      <p class="text-sm text-gray-500 mb-4">{{ post.date }} • {{ post.timeToRead }}</p>
      <p class="text-gray-700">{{ post.fullDescription }}</p>
      <div class="flex gap-2 mt-3 mb-4">
        <span v-for="tag in post.tags" :key="tag"
          class="text-blue-600 bg-blue-100 px-14px py-6px rounded-tag text-sm text-tag-text">
          {{ tag }}
        </span>
      </div>
      <Comments :comments="post.commentsData" />
    </div>
  </div>
</template>
