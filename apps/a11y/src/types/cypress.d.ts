import type { Options } from 'cypress-axe';

declare global {
  namespace Cypress {
    interface Chainable {
      assertA11y(options?: Options): Chainable;
    }
  }
}
