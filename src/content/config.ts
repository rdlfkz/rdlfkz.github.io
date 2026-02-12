import { defineCollection, z } from "astro:content";

export const collections = {
  news: defineCollection({ schema: z.object({
    title: z.string(),
    date: z.date(),
  }) }),
  release: defineCollection({ schema: z.object({
    title: z.string(),
    type: z.string(),
    date: z.date(),
    img: z.string(),
    tracks: z.array(z.string()),
    tunecore: z.string().default(""),
    apple: z.string().default(""),
    spotify: z.string().default(""),
   }) }),
  videos: defineCollection({ schema: z.object({
    title: z.string(),
    index: z.number(),
    url: z.string(),
  }) }),
  lyrics: defineCollection({ schema: z.object({
    title: z.string(),
    lyrics: z.string(),
    index: z.number(),
    withChord: z.boolean().default(false),
  }) }),
  profile: defineCollection({
    schema: z.object({
      name: z.string(),
      about: z.string(),
      capo: z.number().default(0),
    }),
  }),
};
