import { allPosts } from '@/.content-collections/generated';
import type { MetadataRoute } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const BASE_URL = isDev
  ? 'http://localhost:3000'
  : (process.env.NEXT_PUBLIC_BASE_URL ?? 'https://ascentwealth.in');

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts;

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...(posts.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.createdAt),
      changeFrequency: 'weekly',
      priority: 0.5,
      images: [post.image],
    })) as MetadataRoute.Sitemap),
  ];
}
