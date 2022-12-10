<template>
  <section :id="id" class="px-4 mx-auto max-w-6xl" :class="{ 'py-16 lg:py-20': padding }">
    <slot />
  </section>
</template>
<script lang="ts" setup>
  type Props = {
    id?: string
    padding?: boolean
  }

  withDefaults(defineProps<Props>(), { padding: true })
</script>
