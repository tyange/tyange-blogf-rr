import PostCard from "./post-card";

export default function RecentPost({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Recent Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
