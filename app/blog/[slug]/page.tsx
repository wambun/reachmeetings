'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/50 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {post.title}
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.authorRole}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-4 gap-16">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 prose prose-lg max-w-none"
              >
                <div
                  className="text-gray-600 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-4">$1</h2>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                      .replace(/- (.*)/g, '<li class="text-gray-600">$1</li>')
                      .replace(/\n\n/g, '</p><p class="text-gray-600 leading-relaxed">')
                  }}
                />
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1 space-y-8"
              >
                {/* Tags */}
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary-600" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <p className="text-sm text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {relatedPost.readTime}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Need help with your event?
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Let&apos;s discuss how we can bring your vision to life.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="relative py-16 bg-gray-50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors max-w-sm"
                >
                  <ArrowLeft className="h-5 w-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Previous</p>
                    <p className="font-medium line-clamp-1">{prevPost.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors text-right max-w-sm"
                >
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Next</p>
                    <p className="font-medium line-clamp-1">{nextPost.title}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 p-12 lg:p-16 text-center"
            >
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to start planning?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Let our team of experts help you create an unforgettable event
                  experience.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-primary-600 bg-white hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
