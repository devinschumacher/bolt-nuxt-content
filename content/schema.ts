import { z } from 'zod'
import { defineCollection } from '@nuxt/content'

export const collections = {
  'case-studies': defineCollection({
    schema: z.object({
      title: z.string().describe('The title of the case study'),
      description: z.string().describe('Short description of the project'),
      image: z.string().describe('Featured image path').optional(),
      client: z.string().describe('Client name'),
      date: z.date().describe('Project completion date'),
      tags: z.array(z.string()).describe('Project tags/categories')
    })
  })
}