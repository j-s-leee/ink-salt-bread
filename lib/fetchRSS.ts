import { config } from "@/config";
import Parser from "rss-parser";

const parser = new Parser();

export async function fetchRSS() {
  const feed = await parser.parseURL(config.rssFeedUrl(config.blogId));

  return {
    title: feed.title,
    description: feed.description,
    imageUrl: feed.image?.url, // 이미지 URL이 있을 경우만 반환
    items: feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
    })),
  };
}
