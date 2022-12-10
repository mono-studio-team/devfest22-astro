<template>
  <div class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 mb-2 py-0.5 px-2">
    <span>{{ tag }}</span>
  </div>
</template>
<script lang="ts" setup>
  type Props = {
    tag: string
  }

  defineProps<Props>()
</script>
