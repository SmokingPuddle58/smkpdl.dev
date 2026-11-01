// https://docs.astro.build/guides/content-collections/

import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
