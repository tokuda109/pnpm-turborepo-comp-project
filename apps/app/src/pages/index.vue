<template>
  <div>
    <MountainList :mountains="mountains" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MountainList from '~/components/mountain-list.vue';

export default Vue.extend({
  components: { MountainList },
  async asyncData({ app }): Promise<{ mountains: Mountain[] }> {
    const mountains = await app.$http.$get('https://api.nuxtjs.dev/mountains');

    return { mountains };
  }
});
</script>
