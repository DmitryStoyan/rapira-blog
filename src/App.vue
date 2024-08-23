<script setup lang="ts">
import Header from './components/Header.vue'
import BlogHeader from './components/BlogHeader.vue';
import FilterSection from './components/FilterSection.vue';
import Blog from './components/Blog.vue';
</script>

<template>
  <div>
    <Header />
    <BlogHeader />
    <div class="bg-main-bg pt-5 pb-7">
      <Blog />
    </div>
  </div>
</template>
