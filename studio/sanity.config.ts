import { projectId, dataset } from './sanity-env';
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'alea-website',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
