import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Thoughts, tutorials, and insights on web development
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 pb-8 last:border-b-0"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                {post.category}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
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

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts found.</p>
        </div>
      )}
    </div>
  );
}