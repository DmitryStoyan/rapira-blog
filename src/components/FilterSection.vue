<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
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

const emit = defineEmits(['check-active-filters', 'update-active-tags']);

watch(filters, () => {
  const activeFilters = filters.value.filter(filter => filter.isActive).map(filter => filter.label);
  emit('check-active-filters', activeFilters.length > 0);
  emit('update-active-tags', activeFilters);
}, { deep: true });

onMounted(() => {
  const activeFilters = filters.value.filter(filter => filter.isActive).map(filter => filter.label);
  emit('check-active-filters', activeFilters.length > 0);
  emit('update-active-tags', activeFilters);
});

const clearFilters = () => {
  filters.value.forEach(filter => filter.isActive = false);
};

</script>

<template>
  <div class="max-w-blog-w mx-auto">
    <div class="flex flex-wrap gap-2 mb-4 py-5">
      <FilterTag v-for="filter in filters" :key="filter.label" :label="filter.label"
        v-model:isActive="filter.isActive" />
    </div>
  </div>
</template>

<style scoped></style>
