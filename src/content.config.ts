import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Cada proyecto es un archivo .md en src/content/projects/.
 * Los archivos que empiezan con "_" se ignoran (úsalos como plantilla).
 */
const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary_en: z.string(),
    summary_es: z.string(),
    stack: z.array(z.string()),
    repo: z.url().optional(),
    demo: z.url().optional(),
    date: z.coerce.date(),
    status: z.enum(['live', 'in-progress', 'archived']).default('in-progress'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
