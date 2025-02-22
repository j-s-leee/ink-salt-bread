// config.ts
export const config = {
  blogId: "ink_salt_bread", // 여기에 네이버 블로그 아이디를 넣으세요.
  rssFeedUrl: (blogId: string) => `https://rss.blog.naver.com/${blogId}.xml`, // RSS 피드 URL을 반환하는 함수
};
