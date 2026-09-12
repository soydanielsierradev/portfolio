import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

// The sitemap always advertises the canonical production URL, regardless of the
// deployment it is generated on, so search engines index the real domain.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: DATA.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const posts: MetadataRoute.Sitemap = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    return {
      url: `${DATA.url}/blog/${slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...routes, ...posts];
}
