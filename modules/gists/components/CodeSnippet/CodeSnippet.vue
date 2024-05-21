<script setup lang="ts">
import '@wooorm/starry-night/style/light'
import { common, createStarryNight } from '@wooorm/starry-night'
import { toHtml } from 'hast-util-to-html'
import Loader from './Loader.vue';

const DEFAULT_CODE_SNIPPET = `
  const message: string = 'Você precisa pagar para ter acesso a este gist.'
  console.log(message)
`

const props = withDefaults(defineProps<{
  isPaid: boolean
  loading: boolean
  code: string
  lang: string
}>(), {
  isPaid: false,
  loading: false,
  code: DEFAULT_CODE_SNIPPET,
  lang: 'typescript'
})

const loading = ref<boolean>(true)
const htmlcode = ref<string>('')

const registerSyntaxHighlight = async () => {
  loading.value = true

  const starryNight = await createStarryNight(common)
  const scope = starryNight.flagToScope(props.lang)
  const tree = starryNight.highlight(props.code, scope!)

  htmlcode.value = toHtml(tree)

  loading.value = false  
}

onMounted(() => {
  registerSyntaxHighlight()
})
</script>

<template>
  <Loader :loading="props.loading || loading">
    <div class="w-full relative" v-if="props.isPaid">
      <span class="absolute top=[43%] left-[50%] z-[999]">
        <i class="pi pi-lock text-3xl text-gray-700"</i>
      </span>

      <pre 
        :class="{ 'blur-sm': props.isPaid}" 
        class="w-full select-none rounded bg-gray-200 p-5 overflow-x-hidden"
        v-html="htmlcode"
      >
      </pre>
    </div>

    <pre 
      v-if="!props.isPaid"
      class="w-full rounded bg-gray-200 p-5 overflow-x-scroll"
      v-html="htmlcode"
    >
    </pre>
  </Loader>
</template>