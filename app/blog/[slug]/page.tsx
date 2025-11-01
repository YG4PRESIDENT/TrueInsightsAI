import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import BlogPostContent from "@/components/blog/BlogPostContent";

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
