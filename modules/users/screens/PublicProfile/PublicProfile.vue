<script setup lang="ts"> 
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue';
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue';
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue';
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue';
import GistsCardGroup from '@/modules/gists/components/Card/Group/Group.vue';
import GistsCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue';
import GistsCardItem from '@/modules/gists/components/Card/Item/Item.vue';
import { routerKey } from 'vue-router';

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params

  router.push(`/${username}/gists/${id}`)
}
</script>

<template>
  <PublicHeadline />

  <WidgetGroup>
    <WidgetGroupLoader :loading="true" :amount="3">
      <WidgetCondensed :value="10" label="Gists no total" />
      <WidgetCondensed :value="5" label="Gists gratuitos" />
      <WidgetCondensed :value="5" label="Gists pagos" />
    </WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os gists">
    <GistsCardGroup>
      <GistsCardGroupLoader :loading="true">
        <GistsCardItem 
          @tap="handleNavigateToDetail"
          v-for="n in 5"
          :key="n"
          id="123"
          title="useCurrentUses.ts
          description="Hook para controlar a store do usuario"
          :price="10"
          lang="typescript"
        />
      </GistsCardGroupLoader>
    </GistsCardGroup>
  </WidgetDefault>
</template>