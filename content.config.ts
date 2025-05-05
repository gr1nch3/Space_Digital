import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/**.json',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        client: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        date: z.object({
          day: z.number(),
          month: z.string(),
          year: z.number()
        }),
        headerImage: z.string(),
        images: z.array(z.string()),
        challenge: z.string(),
        solution: z.string()
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**.md',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.object({
          day: z.number(),
          month: z.string(),
          year: z.number()
        }),
        publishedDate: z.date(),
        updatedDate: z.date(),
        tags: z.array(z.string()),
      })
    }),

  }
})

