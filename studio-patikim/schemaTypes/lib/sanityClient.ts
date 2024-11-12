import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'g3hdq2b7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
