<template>
  <section :id="id" class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
    <slot />
  </section>
</template>
<script lang="ts" setup>
  type Props = {
    id?: string
  }

  defineProps<Props>()
</script>
