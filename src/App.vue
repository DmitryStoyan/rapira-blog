<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import BlogHeader from './components/BlogHeader.vue';
import Blog from './components/Blog.vue';

const searchQuery = ref('');

const updateSearchQuery = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <div>
    <Header />
    <BlogHeader @update-search="updateSearchQuery" />
    <div class="bg-main-bg pt-5 pb-7">
      <Blog :searchQuery="searchQuery" />
    </div>
  </div>
</template>
