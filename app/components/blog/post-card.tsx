export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
        {post.category}
      </span>
      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        {post.title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {post.date}
      </div>
    </div>
  );
}
