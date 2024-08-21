<script setup lang="ts">
import { ref } from 'vue';
import FilterTag from '@/components/FilterTag.vue';

const filters = ref([
  { label: 'Город', isActive: false },
  { label: 'Природа', isActive: true },
  { label: 'Люди', isActive: false },
  { label: 'Животные', isActive: false },
  { label: 'Еда', isActive: false },
  { label: 'Напитки', isActive: false },
  { label: 'Архитектура', isActive: false },
  { label: 'Искусство', isActive: false },
]);

const clearFilters = () => {
  filters.value.forEach(filter => filter.isActive = false);
};
</script>

<template>
  <div class="max-w-blog-w mx-auto">
    <div class="flex flex-wrap gap-2 mb-4">
      <FilterTag v-for="filter in filters" :key="filter.label" :label="filter.label"
        v-model:isActive="filter.isActive" />
    </div>

    <button v-if="filters.some(filter => filter.isActive)" @click="clearFilters" class="text-red-600">
      Очистить
    </button>
  </div>
</template>

<style scoped></style>
