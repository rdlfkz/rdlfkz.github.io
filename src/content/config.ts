import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  url: z.string().optional(),
  img: z.string().optional(),
  tracks: z.array(z.string()).optional(),
  tunecore: z.string().optional(),
  apple: z.string().optional(),
  spotify: z.string().optional(),
  lines: z.array(z.string()).optional(),
});

export const collections = {
  news: defineCollection({ schema: postSchema }),
  release: defineCollection({ schema: postSchema }),
  videos: defineCollection({ schema: postSchema }),
  lyrics: defineCollection({ schema: postSchema }),
  profile: defineCollection({
    schema: z.object({
      name: z.string(),
      about: z.string(),
    }),
  }),
};
