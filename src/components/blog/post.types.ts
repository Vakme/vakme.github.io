import { z } from 'astro:content';

export const postSchema = z.object({
    type_of: z.string(),
    id: z.number(),
    title: z.string(),
    description: z.string().nullable(),
    slug: z.string().nullable(),
    path: z.string().nullable(),
    url: z.string().nullable(),
    language: z.string().nullable(),
    cover_image: z.string().nullable(),
    social_image: z.string().nullable(),
    canonical_url: z.string().nullable(),
    published_at: z.string().nullable(),
    reading_time_minutes: z.number().nullable(),
    tag_list: z.array(z.string()),
    user: z.object({
        name: z.string(),
        username: z.string(),
        github_username: z.string().nullable(),
        user_id: z.number(),
        website_url: z.string().nullable(),
        profile_image: z.string().nullable(),
        profile_image_90: z.string().nullable()
    })
}).transform(postSchema => ({...postSchema, source: 'devto'}));

export const postListSchema = z.array(postSchema);

export type TPost = z.infer<typeof postSchema>;