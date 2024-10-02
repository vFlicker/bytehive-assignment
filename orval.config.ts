import { defineConfig } from 'orval';

export default defineConfig({
  interviewAPI: {
    output: {
      mode: 'single',
      target: 'src/shared/api',
      schemas: 'src/shared/api/models',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/shared/api/client.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: 'https://interview-api-8icc.onrender.com/api-docs-config',
      validation: false,
    },
    hooks: {
      afterAllFilesWrite: 'eslint --fix',
    },
  },
});
