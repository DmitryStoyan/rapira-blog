<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import BlogHeader from './components/BlogHeader.vue';
import Blog from './components/Blog.vue';

const searchQuery = ref('');
const activeTags = ref<string[]>([]);



const updateSearchQuery = (query) => {
  searchQuery.value = query;
};

const updateActiveTags = (tags: string[]) => {
  activeTags.value = tags;
};

</script>

<template>
  <div>
    <Header />
    <BlogHeader @update-search="updateSearchQuery" @update-active-tags="updateActiveTags" />
    <div class="bg-main-bg pt-5 pb-7">
      <Blog :searchQuery="searchQuery" :activeTags="activeTags" />
    </div>
  </div>
</template>
