<template>
  <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
    <p
      v-if="tagline"
      class="text-base text-primary-600 dark:text-primary-200 font-semibold tracking-wide uppercase"
    >
      {{ tagline }}
    </p>
    <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
      {{ title }}
    </h2>
    <p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
      {{ paragraph }}
    </p>
  </div>
</template>

<script lang="ts" setup>
  type Props = {
    tagline?: string
    title: string
    paragraph: string
  }

  defineProps<Props>()
</script>
