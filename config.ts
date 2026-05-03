import { defineCollection, z } from 'astro:content';

const legacy = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    content: z.string(),
    featuredImage: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    featuredImage: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { legacy, posts, pages };
