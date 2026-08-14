import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    // Who wrote this essay: drives the voice color and marker
    voice: z.enum(['tian', 'claude', 'duet']),
    // Optional margin note from the *other* author
    margin: z
      .object({
        by: z.enum(['tian', 'claude', 'both']),
        text: z.string(),
      })
      .optional(),
    minutes: z.number().optional(),
    // Estimated share of the finished prose that originated in AI-written text (0–100).
    ai: z.number().min(0).max(100).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays };
