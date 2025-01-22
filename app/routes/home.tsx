import { Menu, Search, Sun, Moon } from "lucide-react";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <button className="rounded-md p-2 text-gray-600 dark:text-gray-300">
                <Menu size={24} />
              </button>
              <div className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                My Tech Blog
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-md p-2 text-gray-600 dark:text-gray-300">
                <Search size={24} />
              </button>
              <button className="rounded-md p-2 text-gray-600 dark:text-gray-300">
                <Sun size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Featured Post
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              {featuredPost.category}
            </span>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              {featuredPost.title}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {featuredPost.excerpt}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {featuredPost.date}
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
              >
                <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {post.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
