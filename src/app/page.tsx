import { headers } from "next/headers";
import type { BlogPost } from "@/lib/types";
import { fallbackBlogPosts } from "@/content/fallbackPosts";
import { Portfolio } from "@/components/Portfolio";

async function getBlogPosts(): Promise<readonly BlogPost[]> {
  try {
    const headerList = await headers();
    const host = headerList.get("host");
    const protocol = headerList.get("x-forwarded-proto") ?? "http";
    if (!host) {
      return fallbackBlogPosts;
    }

    const response = await fetch(`${protocol}://${host}/api/blog-posts`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return fallbackBlogPosts;
    }

    const data = (await response.json()) as { posts?: BlogPost[] };
    if (data.posts && data.posts.length > 0) {
      return data.posts;
    }
  } catch {
    // fall through to fallback
  }
  return fallbackBlogPosts;
}

export default async function Home() {
  const posts = await getBlogPosts();
  return <Portfolio posts={posts} />;
}
