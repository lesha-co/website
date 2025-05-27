import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Welcome to My Blog
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Exploring web development, programming concepts, and the latest in
        technology. Join me on this journey of continuous learning and
        discovery.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        View All Posts
        <svg
          className="ml-2 w-4 h-4"
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
    </section>
  );
}
