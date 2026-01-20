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
  CheckCircle,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const process = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We start by understanding your vision, goals, and requirements through in-depth consultations.',
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
      'Our team develops a comprehensive event strategy, including venue recommendations and creative concepts.',
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
      'We present a detailed proposal outlining every aspect of your event for collaborative refinement.',
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
      'With meticulous attention to detail, we bring your event to life ensuring a seamless experience.',
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
      'We conduct a thorough review to measure success and provide insights for future events.',
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
      'We assign a dedicated team to your account, ensuring consistent communication and deep understanding.',
    icon: HeartHandshake,
  },
  {
    title: 'Transparent Communication',
    description:
      'Regular updates, clear timelines, and open dialogue keep you informed at every stage.',
    icon: MessageSquare,
  },
  {
    title: 'Flexible Approach',
    description:
      'We adapt to your needs, whether you need full-service management or support for specific aspects.',
    icon: Lightbulb,
  },
];

export default function HowWeWorkPage() {
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
                Our Process
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display text-charcoal mb-6"
              >
                A proven approach to{' '}
                <span className="text-[#415371]">unforgettable events</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body-lg"
              >
                From initial concept to flawless execution, our structured
                process ensures every detail is meticulously planned and
                delivered with excellence.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="space-y-16 lg:space-y-24">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl lg:text-6xl font-semibold text-[#415371]">
                        {item.step}
                      </span>
                      <div className="icon-box-light">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h2 className="heading-md mb-4">{item.title}</h2>
                    <p className="text-body mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#415371] flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] rounded-2xl bg-[#f2ece8] flex items-center justify-center">
                      <item.icon className="h-20 w-20 text-[#715441]/30" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-label text-[#415371] mb-3"
              >
                Why We&apos;re Different
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-lg mb-4"
              >
                The REACH difference
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body max-w-2xl mx-auto"
              >
                What sets us apart is our commitment to building lasting
                partnerships and delivering exceptional experiences.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-white card-hover h-full"
                >
                  <div className="icon-box-light mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-slate text-center py-16 lg:py-20"
            >
              <h2 className="heading-lg text-white mb-4">
                Ready to start planning?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your next event and create something
                unforgettable together.
              </p>
              <Link href="/contact" className="btn-white">
                Schedule a Consultation
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
