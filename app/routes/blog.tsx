import { Outlet } from "react-router";
import { getContentList } from "~/content/content";
import type { Route } from "./+types/blog";
import FeaturedPost from "~/components/blog/featured-post";
import RecentPost from "~/components/blog/recent-post";

const featuredPost = {
  title: "블로그를 시작하며",
  excerpt:
    "새로운 블로그를 시작하게 된 계기와 앞으로의 방향성에 대한 이야기를 나누고자 합니다...",
  date: "2024-01-21",
  category: "일상",
};

const recentPosts = [
  {
    title: "React 상태관리의 모든 것",
    excerpt: "Redux부터 Recoil까지, 다양한 상태관리 라이브러리를 비교해봅니다.",
    date: "2024-01-20",
    category: "개발",
  },
  {
    title: "2024년 개발자 로드맵",
    excerpt: "올해 주목해야 할 기술 스택과 학습 방향을 정리했습니다.",
    date: "2024-01-19",
    category: "커리어",
  },
  {
    title: "효율적인 코드 리뷰 방법",
    excerpt: "팀의 생산성을 높이는 코드 리뷰 문화를 만드는 방법",
    date: "2024-01-18",
    category: "개발문화",
  },
];

export async function loader() {
  return await getContentList();
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <FeaturedPost post={featuredPost} />
      <RecentPost posts={recentPosts} />
    </>
  );
}
