import { fetchRSS } from "@/lib/fetchRSS";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { items: posts } = await fetchRSS();
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: "https://ink-salt-bread.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
  posts.map((post) => {
    sitemap.push({
      url: post.link!,
      lastModified: post.pubDate!,
      changeFrequency: "daily",
      priority: 0.7,
    });
  });

  return sitemap;
}
