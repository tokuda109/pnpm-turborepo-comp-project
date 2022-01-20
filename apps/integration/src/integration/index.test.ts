import { mount } from '@cypress/vue';
import MountainList from '@/components/mountain-list.vue';

describe('index', () => {
  it('returns page', () => {
    mount(MountainList, {
      propsData: {
        mountains: []
      }
    });

    cy.get('.MountainList');
  });
});
