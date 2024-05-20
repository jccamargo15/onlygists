<script setup lang="ts">
  const { render } = useMarkdown();

  const props = withDefaults(defineProps<{
    title: string
    lang: string
    description: string
    author: string
  }>(), {
    title: 'currency_format.py',
    lang: 'python',
    description: 'funç˜ao em python para formatar valores monetários',
    author: 'jccamargo'
  })

  const description = computed(() => render(props.description))
</script>

<template>
  <div class="w-full flex flex-col justify-center gap-2 py-5">
    <div class="flex flex-wrap items-center gap-2">
      <h1 class="font-[Inter] text-gray-700 font-bold">{{ props.title }}</h1>

      <Chip class="text-sm" :label="props.lang" icon="pi pi-bolt" />
    </div>

    <div v-html="description" class="font-[Inter] text-gray-700 md:text-xl"></div>

    <p class="font-[Inter] text-gray-500 text-sm ">
      <i class="pi pi-star"></i>
      by
      <NuxtLink class="text-primary-500" :to="`/$props.author`">

      @{{ props.author }}</NuxtLink>
    </p>

  </div>
</template>