import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default async function RecentPosts() {
  const recentPosts = await getAllPosts().then((posts) => posts.slice(0, 3));

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                {post.category}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Read more
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
      {recentPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          <p className="text-gray-400">Check back soon for new content!</p>
        </div>
      )}
    </section>
  );
}
