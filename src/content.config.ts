// https://docs.astro.build/guides/content-collections/

import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        // slug: The slug that will be representing this article. This should be unique for each articles, even for articles with same titles in different languages.
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),

        // Incomplete: A incomplete logo will be shown at the archive page, and also in the article
        // Pin: A pin logo will be shown at the archive page, and also in the article. Moreover, pinned articles will be put at the top.
        incomplete: z.boolean().default(false),
        pin: z.boolean().default(false),
        sequence: z.number().optional(),


        // heroImage: A link to the heroImage.
        heroImage: z.coerce.string().optional(),
        
        // You may put more than 1 tags, but there must be 1 categories only. You can leave all of them as none.
        category: z.string().optional(),
        tags: z.string().array().optional(),

        // deleted: Will not compile and thus will not be able to be reached through any means
        // hidden: Will be compiled, but will not be shown in the archive page. Access through link is still possible
        deleted: z.boolean().default(false),
        hidden: z.boolean().default(false),

        // password: You may optionally string that will be used as password. 
        password: z.string().optional(),
        
        // hideComments: Only available to those who set the Comments to be available. 
        // showToc: Whether to show table of contents. Default is true.
        hideComments: z.boolean().default(false),
        showToc: z.boolean().default(true),
    }),
});

export const collections = { blog };
