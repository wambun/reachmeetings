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
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

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
              <p className="text-sm font-medium text-primary-600 mb-4 tracking-wide uppercase">
                Our Process
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                A proven approach to unforgettable events
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed">
                From initial concept to flawless execution, our structured
                process ensures every detail is meticulously planned and
                delivered with excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="relative py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="space-y-16 lg:space-y-24">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl lg:text-7xl font-bold text-primary-100">
                        {item.step}
                      </span>
                      <div className="p-3 rounded-xl bg-primary-50 text-primary-600">
                        <item.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    } relative`}
                  >
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-gray-100 shadow-sm flex items-center justify-center">
                      <item.icon className="h-24 w-24 text-primary-200" />
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-24 left-1/2 transform -translate-x-1/2 h-24 w-px bg-gradient-to-b from-primary-300 to-transparent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="relative py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-primary-600 mb-2 tracking-wide uppercase">
                Why We&apos;re Different
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The REACH difference
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                What sets us apart is our commitment to building lasting
                partnerships and delivering exceptional experiences.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary-50 text-primary-600 w-fit mb-6">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 p-12 lg:p-16 text-center"
            >
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready to start planning?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Let&apos;s discuss your next event and create something
                  unforgettable together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-primary-600 bg-white hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Schedule a Consultation
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
