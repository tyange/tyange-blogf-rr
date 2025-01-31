export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Featured Post
      </h2>
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          {post.category}
        </span>
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {post.title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {post.date}
        </div>
      </div>
    </div>
  );
}
