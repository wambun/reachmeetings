'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  Lightbulb,
  ClipboardCheck,
  Rocket,
  Users,
  HeartHandshake,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { FloatingShapes } from '@/components/shared/ui/FloatingShapes';
import { PremiumButton, ArrowIcon } from '@/components/shared/ui/PremiumButton';
import {
  AnimatedSection,
  AnimatedItem,
} from '@/components/shared/ui/AnimatedSection';
import { cardHover, springs, heroTextReveal, staggerContainer, fadeInUp } from '@/lib/animations';

const process = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We start by understanding your vision, goals, and requirements through in-depth consultations. This helps us align our approach with your specific needs.',
    icon: MessageSquare,
    details: [
      'Initial consultation call',
      'Goals and objectives assessment',
      'Budget and timeline discussion',
      'Stakeholder identification',
    ],
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description:
      'Our team develops a comprehensive event strategy, including venue recommendations, logistics planning, and creative concepts tailored to your objectives.',
    icon: Lightbulb,
    details: [
      'Venue research and selection',
      'Budget planning and optimization',
      'Creative concept development',
      'Risk assessment and mitigation',
    ],
  },
  {
    step: '03',
    title: 'Proposal & Approval',
    description:
      'We present a detailed proposal outlining every aspect of your event. We work collaboratively with you to refine the plan until it perfectly matches your vision.',
    icon: ClipboardCheck,
    details: [
      'Comprehensive event proposal',
      'Vendor recommendations',
      'Detailed timeline and milestones',
      'Contract negotiations',
    ],
  },
  {
    step: '04',
    title: 'Execution & Delivery',
    description:
      'With meticulous attention to detail, we bring your event to life. Our team manages every element, ensuring a seamless and memorable experience.',
    icon: Rocket,
    details: [
      'On-site event management',
      'Vendor coordination',
      'Real-time problem solving',
      'Guest experience management',
    ],
  },
  {
    step: '05',
    title: 'Post-Event Analysis',
    description:
      'After your event, we conduct a thorough review to measure success, gather feedback, and provide insights for future events.',
    icon: Users,
    details: [
      'Event success metrics',
      'Attendee feedback analysis',
      'Budget reconciliation',
      'Recommendations for improvement',
    ],
  },
];

const differentiators = [
  {
    title: 'Dedicated Partnership',
    description:
      'We assign a dedicated team to your account, ensuring consistent communication and deep understanding of your brand.',
    icon: HeartHandshake,
  },
  {
    title: 'Transparent Communication',
    description:
      'Regular updates, clear timelines, and open dialogue keep you informed at every stage of the planning process.',
    icon: MessageSquare,
  },
  {
    title: 'Flexible Approach',
    description:
      'We adapt to your needs, whether you need full-service management or support for specific aspects of your event.',
    icon: Lightbulb,
  },
];

export default function HowWeWorkPage() {
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
                  Our Process
                </span>
              </motion.div>

              <motion.h1
                variants={heroTextReveal}
                className="heading-xl mb-6"
              >
                A proven approach to{' '}
                <span className="gradient-text-premium">unforgettable events</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-body-lg max-w-2xl"
              >
                From initial concept to flawless execution, our structured
                process ensures every detail is meticulously planned and
                delivered with excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="space-y-20 lg:space-y-32">
              {process.map((item, index) => (
                <AnimatedSection
                  key={item.step}
                  animation={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl lg:text-7xl font-bold gradient-text-gold">
                          {item.step}
                        </span>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-600 shadow-sm">
                          <item.icon className="h-8 w-8" />
                        </div>
                      </div>
                      <h2 className="heading-md mb-4">
                        {item.title}
                      </h2>
                      <p className="text-body text-gray-600 mb-6">
                        {item.description}
                      </p>
                      <ul className="space-y-3">
                        {item.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <div className="p-0.5 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`${
                        index % 2 === 1 ? 'lg:order-1' : ''
                      } relative`}
                    >
                      <motion.div
                        className="aspect-[4/3] rounded-3xl glass border border-white/30 shadow-premium flex items-center justify-center overflow-hidden"
                        variants={cardHover}
                        initial="initial"
                        whileHover="hover"
                        transition={springs.snappy}
                      >
                        {/* Decorative gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/50 to-secondary-50/50" />
                        <motion.div
                          className="relative"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 2, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <item.icon className="h-24 w-24 text-primary-300" />
                        </motion.div>
                      </motion.div>
                      {/* Connecting line */}
                      {index < process.length - 1 && (
                        <div className="hidden lg:block absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                          <div className="h-20 w-1 bg-gradient-to-b from-gold via-gold-light to-transparent rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <FloatingShapes variant="subtle" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="text-center mb-16">
              <p className="text-label text-primary-600 mb-2">
                Why We&apos;re Different
              </p>
              <h2 className="heading-lg mb-4">
                The <span className="gradient-text-gold">REACH</span> difference
              </h2>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                What sets us apart is our commitment to building lasting
                partnerships and delivering exceptional experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="normal" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item) => (
                <AnimatedItem key={item.title} animation="up">
                  <motion.div
                    className="p-8 rounded-2xl glass border border-white/30 h-full hover:shadow-premium-lg transition-all duration-300"
                    variants={cardHover}
                    initial="initial"
                    whileHover="hover"
                    transition={springs.snappy}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-600 w-fit mb-6 group-hover:shadow-glow-primary transition-shadow duration-300">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
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
                    <span className="text-sm font-medium text-white/90">Start Your Journey</span>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-tight">
                    Ready to start{' '}
                    <span className="text-gold-light">planning</span>?
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Let&apos;s discuss your next event and create something
                    unforgettable together.
                  </p>
                  <Link href="/contact">
                    <PremiumButton variant="gold" size="lg" icon={<ArrowIcon />}>
                      Schedule a Consultation
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
