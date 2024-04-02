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
});
