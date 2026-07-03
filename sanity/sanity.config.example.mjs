import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes/index.js';

export default defineConfig({
  name: 'cwmpWebsiteStudio',
  title: 'The Pavilion Website CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'replace-with-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes }
});
