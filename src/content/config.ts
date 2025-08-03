import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// Define the blog post schema
const blogSchema = z.object({
  publishDate: z.union([z.string(), z.date()]).transform(val => new Date(val)),
  updateDate: z.union([z.string(), z.date()]).optional().transform(val => val ? new Date(val) : undefined),
  draft: z.boolean().default(false),
  title: z.string(),
  excerpt: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  author: z.string().optional(),
  metadata: metadataDefinition(),
});

// Define the post collection
const postCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = {
  post: postCollection,
};
