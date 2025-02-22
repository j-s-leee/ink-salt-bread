import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchRSS } from "@/lib/fetchRSS";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { title, description, imageUrl, items: posts } = await fetchRSS();

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 backdrop-blur-sm">
        <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">
          <Image src={imageUrl!} alt={title!} width={40} height={40} /> {title}
          의 최신 블로그 글
        </h1>
      </nav>
      <p className="text-center">{description}</p>
      <main className="max-w-2xl md:max-w-3xl lg:max-w-full mx-auto p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post?.link || "https://m.blog.naver.com/ink_salt_bread"}
              target="_blank"
              passHref
            >
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {new Date(post.pubDate!).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>{post.description}</CardContent>
                <CardFooter className="justify-end">
                  포스트 보러가기 &rarr;
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
