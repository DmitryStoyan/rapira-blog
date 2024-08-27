<script setup lang="ts">
import { ref, computed } from 'vue';

// Define types for comments
interface Comment {
  id: number;
  author: string;
  avatarUrl: string;
  content: string;
  date: string;
}

// Define the props type
const props = defineProps<{
  comments: Comment[];
}>();

// Define the emits type
const emit = defineEmits<{
  (event: 'comment-added', comments: Comment[]): void;
}>();

const newComment = ref<string>('');
const isTextareaFocused = ref<boolean>(false);
const characterCount = computed<number>(() => newComment.value.length);
const commentsCount = computed<number>(() => props.comments.length);

const addComment = () => {
  if (newComment.value.trim() !== '' && characterCount.value <= 250) {
    const newCommentObj: Comment = {
      id: Date.now(),
      author: 'Current User',
      avatarUrl: 'https://media.gqmagazine.fr/photos/6495afcfa35e700534eda2fc/16:9/w_2560%2Cc_limit/avatar-1.jpg',
      content: newComment.value,
      date: new Date().toLocaleString()
    };

    emit('comment-added', [...props.comments, newCommentObj]);

    newComment.value = '';
    isTextareaFocused.value = false;
  }
};

const handleCancel = () => {
  newComment.value = '';
  isTextareaFocused.value = false;
};

const handleFocus = () => {
  isTextareaFocused.value = true;
};

const handleBlur = () => {
  if (newComment.value.trim() === '') {
    isTextareaFocused.value = false;
  }
};

defineExpose({ commentsCount });
</script>

<template>
  <div class="mt-4">
    <h3 class="text-lg font-bold">Комментариев {{ commentsCount }}</h3>
    <div v-if="props.comments.length" class="mt-4">
      <textarea v-model="newComment" @focus="handleFocus" @blur="handleBlur"
        class="w-full p-2 border-2 rounded-md outline-none" :class="{
          'border-red-500': characterCount > 250,
          'border-blue-500': isTextareaFocused && characterCount <= 250
        }" placeholder="Введите комментарий"></textarea>

      <div v-if="isTextareaFocused" class="mt-1">
        <p>
          <span :class="{ 'text-red-500': characterCount > 250 }">
            {{ characterCount }}
          </span>
          из 250 символов
        </p>
      </div>

      <div v-if="isTextareaFocused" class="flex gap-10px justify-end">
        <button @click="handleCancel" class="mt-2 bg-blue-100 text-tag-text px-4 py-2 rounded-md">
          Отмена
        </button>
        <button @click="addComment" :disabled="characterCount > 250" :class="{
          'mt-2 px-4 py-2 rounded': true,
          'bg-blue-600 text-white': characterCount <= 250,
          'bg-gray-300 text-gray-500 cursor-not-allowed': characterCount > 250
        }">
          Опубликовать
        </button>
      </div>
    </div>

    <ul>
      <li v-for="comment in comments" :key="comment.id" class="mt-2 flex items-start gap-4">
        <img :src="comment.avatarUrl" alt="avatar" class="w-10 h-10 rounded-full">
        <div class="">
          <h4>{{ comment.author }}</h4>
          <p>{{ comment.content }}</p>
          <p>{{ comment.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
