'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-label text-[#415371] mb-3"
              >
                What We Do
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display text-charcoal mb-6"
              >
                Everything your event needs —{' '}
                <span className="text-[#415371]">concept to execution</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body-lg"
              >
                Full-service event management expertise with services including
                venue sourcing, meeting management, training and incentive
                programs, executive retreats, event staffing, and a fully
                licensed travel agency.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="group card-white h-full card-hover">
                      <div className="icon-box-light mb-4 group-hover:bg-[#415371] group-hover:text-white transition-colors duration-300">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium text-charcoal mb-2 group-hover:text-[#415371] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[#415371] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-slate text-center py-16 lg:py-20"
            >
              <h2 className="heading-lg text-white mb-4">
                Not sure which service is right for you?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let&apos;s talk about your event goals and we&apos;ll
                recommend the perfect combination of services.
              </p>
              <Link href="/contact" className="btn-white">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
