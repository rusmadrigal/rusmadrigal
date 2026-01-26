// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rusmadrigalAdmin',

  projectId: '7p4g0sah',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
