<template>
  <ul class="MountainList">
    <li
      class="MountainList__Item"
      v-for="mountain in mountains"
      :key="mountain.id"
    >
      <NuxtLink :to="`/mountains/${mountain.slug}`">
        {{ mountain.updatedAt | datetime }}: {{ mountain.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { format } from '~/utils/datetime';

export default Vue.extend({
  props: {
    mountains: {
      type: Array as () => Mountain[],
      default: []
    }
  },
  filters: {
    datetime: (v: string) => {
      return format(v);
    }
  }
});
</script>

<style scoped>
.MountainList {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

.MountainList__Item {
  margin-bottom: 4px;
}

.MountainList__Item:last-child {
  margin-bottom: 0;
}

.MountainList__Item > a {
  display: inline-block;
}
</style>
