<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  label: string;
  isActive: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:isActive', isActive: boolean): void;
}>();

const toggleActive = () => {
  emit('update:isActive', !props.isActive);
};
</script>

<template>
  <button :class="['filter-tag', { 'active': isActive }]" @click="toggleActive"
    class="flex items-center gap-2 bg-bg-button px-4 py-2 text-base rounded-3xl max-w-800:text-sm">
    {{ props.label }}

    <template v-if="!isActive">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 6.83334H6.83332V11C6.83332 11.221 6.74553 11.433 6.58925 11.5893C6.43296 11.7455 6.221 11.8333 5.99999 11.8333C5.77898 11.8333 5.56701 11.7455 5.41073 11.5893C5.25445 11.433 5.16666 11.221 5.16666 11V6.83334H0.99999C0.778976 6.83334 0.567015 6.74555 0.410734 6.58927C0.254454 6.43299 0.166656 6.22102 0.166656 6.00001C0.166656 5.779 0.254454 5.56704 0.410734 5.41075C0.567015 5.25447 0.778976 5.16668 0.99999 5.16668H5.16666V1.00001C5.16666 0.778996 5.25445 0.567035 5.41073 0.410754C5.56701 0.254474 5.77898 0.166677 5.99999 0.166677C6.221 0.166677 6.43296 0.254474 6.58925 0.410754C6.74553 0.567035 6.83332 0.778996 6.83332 1.00001V5.16668H11C11.221 5.16668 11.433 5.25447 11.5892 5.41075C11.7455 5.56704 11.8333 5.779 11.8333 6.00001C11.8333 6.22102 11.7455 6.43299 11.5892 6.58927C11.433 6.74555 11.221 6.83334 11 6.83334Z"
          fill="#2884EF" />
      </svg>
    </template>

    <template v-else>
      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.3667 0.541674L4.80001 6.10834L1.56668 2.87501C1.41054 2.7198 1.19933 2.63268 0.97918 2.63268C0.759025 2.63268 0.547815 2.7198 0.39168 2.87501C0.236471 3.03114 0.149353 3.24235 0.149353 3.46251C0.149353 3.68266 0.236471 3.89387 0.39168 4.05001L4.21668 7.87501C4.37282 8.03022 4.58402 8.11733 4.80418 8.11733C5.02433 8.11733 5.23555 8.03022 5.39168 7.87501L11.5417 1.72501C11.6198 1.64754 11.6818 1.55537 11.7241 1.45382C11.7664 1.35227 11.7882 1.24335 11.7882 1.13334C11.7882 1.02333 11.7664 0.91441 11.7241 0.81286C11.6818 0.711311 11.6198 0.619143 11.5417 0.541674C11.3855 0.386465 11.1743 0.299347 10.9542 0.299347C10.734 0.299347 10.5228 0.386465 10.3667 0.541674Z"
          fill="white" />
      </svg>
    </template>
  </button>
</template>

<style scoped>
.filter-tag {
  background-color: #f0f4ff;
  color: #007bff;
  transition: background-color 0.3s, color 0.3s;
}

.filter-tag:hover {
  background-color: #cce0ff;
  color: #007bff;
}

.filter-tag.active {
  background-color: #007bff;
  color: #ffffff;
}

.filter-tag.active:hover {
  background-color: #25364b;
  color: #2884EF;
}

.filter-tag.active svg path {
  transition: fill 0.3s;
}

.filter-tag.active:hover svg path {
  fill: #2884EF;
}
</style>
