'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { services } from '@/data/services';
import { FloatingShapes } from '@/components/shared/ui/FloatingShapes';
import { PremiumButton, ArrowIcon } from '@/components/shared/ui/PremiumButton';
import {
  AnimatedSection,
  AnimatedItem,
} from '@/components/shared/ui/AnimatedSection';
import { cardHover, springs, heroTextReveal, staggerContainer, fadeInUp } from '@/lib/animations';

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient" />
          <FloatingShapes variant="hero" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gray-700 tracking-wide">
                  What We Do
                </span>
              </motion.div>

              <motion.h1
                variants={heroTextReveal}
                className="heading-xl mb-6"
              >
                Everything your event needs —{' '}
                <span className="gradient-text-premium">concept to execution</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-body-lg max-w-2xl"
              >
                Full-service event management expertise with services including
                venue sourcing, meeting management, training and incentive
                programs, executive retreats, event staffing, and a fully
                licensed travel agency.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection stagger staggerSpeed="normal" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <AnimatedItem key={service.slug} animation="up">
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className="group block h-full p-8 rounded-2xl glass border border-white/30 hover:shadow-premium-lg transition-all duration-300"
                      variants={cardHover}
                      initial="initial"
                      whileHover="hover"
                      transition={springs.snappy}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-600 w-fit group-hover:from-primary-100 group-hover:to-secondary-100 transition-all duration-300 group-hover:shadow-glow-primary mb-6">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 group-hover:text-primary-500 transition-colors">
                        Learn more
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.div>
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="scale">
              <div className="relative overflow-hidden rounded-3xl p-12 lg:p-16 text-center">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 animate-gradient-shift" />

                {/* Decorative orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={springs.gentle}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <Sparkles className="h-4 w-4 text-gold-light" />
                    <span className="text-sm font-medium text-white/90">Need Guidance?</span>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-tight">
                    Not sure which service is{' '}
                    <span className="text-gold-light">right for you</span>?
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Let&apos;s talk about your event goals and we&apos;ll
                    recommend the perfect combination of services.
                  </p>
                  <Link href="/contact">
                    <PremiumButton variant="gold" size="lg" icon={<ArrowIcon />}>
                      Get in Touch
                    </PremiumButton>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
