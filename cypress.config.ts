import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '4mwuse',

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: ['**/*.spec.ts', '**/*.cy.ts'],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
