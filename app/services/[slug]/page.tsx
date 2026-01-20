'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { services, getServiceBySlug } from '@/data/services';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>

              <div className="p-4 rounded-xl bg-primary-600/10 text-primary-400 w-fit mb-6">
                <service.icon className="h-10 w-10" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 lg:py-32 bg-gray-900/50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                What&apos;s included
              </h2>
              <p className="text-gray-400">
                Our {service.title.toLowerCase()} service includes everything
                you need for success.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle className="h-6 w-6 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how our {service.title.toLowerCase()} service
                can help you achieve your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-white/10">
              {prevService ? (
                <Link
                  href={`/services/${prevService.slug}`}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-500">Previous</p>
                    <p className="font-medium">{prevService.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextService && (
                <Link
                  href={`/services/${nextService.slug}`}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-gray-500">Next</p>
                    <p className="font-medium">{nextService.title}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
