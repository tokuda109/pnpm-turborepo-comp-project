import Vue from 'vue';
import MountainList from '~/components/mountain-list.vue';

export default {
  title: 'components/MountainList',
  component: MountainList,
  argTypes: {
  },
};

export const Default = () => {
  Vue.extend({
    components: { MountainList },
    computed: {
      mountains() {
        return [];
      },
    },
    template: `
      <MountainList mountains="mountains" />
    `
  });
};
