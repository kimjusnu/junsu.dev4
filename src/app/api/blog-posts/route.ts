type BlogPost = {
  title: string;
  date: string;
  category: string;
  href: string;
  image: string;
};

const BLOG_URL = "https://dietisdie.tistory.com/";

const fallbackPosts: BlogPost[] = [
  {
    title: "딥러닝 뜯어보기 (1) : ChatGPT는 어떻게 답변을 생성할까?",
    date: "2026.04.15",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/%EB%94%A5%EB%9F%AC%EB%8B%9D-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0-1-ChatGPT%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8B%B5%EB%B3%80%EC%9D%84-%EC%83%9D%EC%84%B1%ED%95%A0%EA%B9%8C",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcAVEDe%2FdJMcaiQtnNR%2FAAAAAAAAAAAAAAAAAAAAAG9JHKsAh0qpDYBtO8IJ7CFvse1KFLwVeSQPS3TgwNE8%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DAzxZw0UGFsnz%252Bg0nR%252Fk3e%252BoqTYY%253D",
  },
  {
    title: "Working with AI: Measuring the Applicability of Generative AI to Occupations 논문 읽어봤습니다",
    date: "2025.12.23",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/Working-with-AI-Measuring-the-Applicability-of-Generative-AI-to-Occupations-%EB%85%BC%EB%AC%B8-%EC%9D%BD%EC%96%B4%EB%B4%A4%EC%8A%B5%EB%8B%88%EB%8B%A4",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FoBvYD%2FdJMcabiu7X4%2FAAAAAAAAAAAAAAAAAAAAAGcHJjzeoReEe6E9sIdYLhmbvwwAq7MA4-P4AByQludR%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DxUv%252BxwfQwQedth6q3qb6lfceq94%253D",
  },
  {
    title: "Jinja2는 모든 주석을 다 파싱해버림",
    date: "2025.12.19",
    category: "DevLog",
    href: "https://dietisdie.tistory.com/entry/Jinja2%EB%8A%94-%EB%AA%A8%EB%93%A0-%EC%A3%BC%EC%84%9D%EC%9D%84-%EB%8B%A4-%ED%8C%8C%EC%8B%B1%ED%95%B4%EB%B2%84%EB%A6%BC",
    image:
      "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcZQhBG%2FdJMcac2HM1h%2FAAAAAAAAAAAAAAAAAAAAAPm4guOFf-znt1UmOIAocj_rnQbuGwkGAiv3wB3xZ6ip%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DHUX%252BQs2SXpqKb2GURIpIeeZdwKs%253D",
  },
];

function decodeHtml(value: string) {
  return value
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/<[^>]*>/g, "")
    .trim();
}

function parsePosts(html: string): BlogPost[] {
  const posts: BlogPost[] = [];
  const regex =
    /<li class="post flex justify-between">[\s\S]*?<a class="link text-sm" href="([^"]+)">([\s\S]*?)<\/a>[\s\S]*?<div class="date mt-1 text-xs">([^<]+)<\/div>[\s\S]*?<img class="thumb lazyload[\s\S]*?data-src="([^"]+)"/g;

  for (const match of html.matchAll(regex)) {
    const href = match[1]?.startsWith("http") ? match[1] : `${BLOG_URL.replace(/\/$/, "")}${match[1]}`;
    const title = decodeHtml(match[2] ?? "");
    const date = decodeHtml(match[3] ?? "");
    const image = match[4] ?? "";

    if (!title || !href || posts.some((post) => post.href === href)) {
      continue;
    }

    posts.push({
      title,
      date,
      category: "DevLog",
      href,
      image,
    });

    if (posts.length === 5) {
      break;
    }
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
}

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(BLOG_URL, {
      next: { revalidate },
      headers: {
        "user-agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return Response.json({ posts: fallbackPosts });
    }

    const html = await response.text();
    const posts = parsePosts(html);

    return Response.json({ posts: posts.length > 0 ? posts : fallbackPosts });
  } catch {
    return Response.json({ posts: fallbackPosts });
  }
}
