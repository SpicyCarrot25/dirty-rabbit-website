import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
    lang: z.enum(['es', 'en', 'ca']).optional().default('es'),
  }),
});

export const collections = {
  news: newsCollection,
};
