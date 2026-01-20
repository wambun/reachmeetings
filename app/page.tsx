'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Globe,
  CheckCircle,
  Quote,
  Zap,
  Crown,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FloatingShapes from '@/components/shared/FloatingShapes';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { services } from '@/data/services';
import { team } from '@/data/team';
import {
  heroTextReveal,
  staggerContainer,
  fadeInUp,
  scaleIn,
} from '@/lib/animations';

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Events Managed' },
  { value: '50+', label: 'Global Destinations' },
  { value: '100%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    quote:
      'REACH transformed our annual conference into an unforgettable experience. Their attention to detail and professionalism is unmatched.',
    author: 'Sarah Johnson',
    role: 'VP of Operations',
    company: 'Fortune 500 Company',
  },
  {
    quote:
      'From venue sourcing to on-site execution, REACH handled every aspect flawlessly. Our executive retreat was a complete success.',
    author: 'Michael Chen',
    role: 'CEO',
    company: 'Tech Startup',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section - Premium with floating shapes */}
        <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-off-white overflow-hidden">
          {/* Floating decorative shapes */}
          <FloatingShapes variant="hero" />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              {/* Badge with fade in */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-white border border-gray-200/60 shadow-sm"
              >
                <span className="text-base font-semibold text-[#415371]">
                  Event Management Experts
                </span>
              </motion.div>

              {/* Hero headline with premium reveal animation */}
              <motion.h1
                variants={heroTextReveal}
                className="heading-display text-charcoal mb-8"
              >
                Bring people together.{' '}
                <span className="gradient-text-slate">Change the world.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeInUp}
                className="text-body-lg max-w-2xl mb-10"
              >
                Full-service event management expertise with venue sourcing,
                meeting management, incentive programs, executive retreats, and
                a fully licensed travel agency.
              </motion.p>

              {/* CTA Buttons with shimmer effect */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary btn-shimmer btn-glow">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section with animated counters */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const cardStyles = [
                  'card-light',
                  'card-white border border-gray-100',
                  'card-slate',
                  'card-beige',
                ];
                const isSlate = index === 2;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`${cardStyles[index]} flex flex-col justify-between min-h-[160px] card-hover`}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      className={`text-5xl lg:text-6xl font-medium tracking-tight ${isSlate ? 'text-white' : 'text-charcoal'}`}
                      duration={2000 + index * 200}
                    />
                    <p className={`text-base font-medium ${isSlate ? 'text-white/90' : 'text-gray-600'}`}>
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section with premium cards */}
        <section className="relative py-12 lg:py-16 bg-off-white overflow-hidden">
          <FloatingShapes variant="minimal" />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-label text-[#415371] mb-3"
              >
                What We Do
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-lg mb-4"
              >
                Everything your event needs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body"
              >
                We take the friction out of event planning — no spreadsheets, no
                confusion, no busywork.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className="group card-premium p-6 lg:p-8 h-full"
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <motion.div
                        className="icon-box-light mb-4 group-hover:bg-[#415371] group-hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-medium text-charcoal mb-2 group-hover:text-[#415371] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#415371] text-base font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Learn more
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Link href="/services" className="btn-secondary btn-shimmer">
                View all services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-label text-[#415371] mb-3"
                >
                  Why Choose REACH
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="heading-lg mb-6"
                >
                  Built for real-world event success
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-body mb-8"
                >
                  Founded in 2020 by a Fortune 500 consulting and training
                  expert and a meetings industry veteran with deep experience in
                  global meetings management.
                </motion.p>

                <div className="space-y-4 mb-8">
                  {[
                    'Consultative, collaborative approach',
                    'Global network of trusted partners',
                    'Fully licensed travel agency',
                    'White-glove service for every client',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="flex items-center gap-3 group"
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-[#415371] flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                      >
                        <CheckCircle className="h-4 w-4 text-white" />
                      </motion.div>
                      <span className="text-lg text-gray-700 font-medium group-hover:text-[#415371] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/about" className="btn-primary btn-shimmer">
                    Learn More About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>

              {/* Vectura-style feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    description: 'Seasoned professionals dedicated to your success',
                    style: 'card-light',
                  },
                  {
                    icon: Globe,
                    description: 'Partners on several continents worldwide',
                    style: 'card-white border border-gray-100',
                  },
                  {
                    icon: Crown,
                    description: 'IATAN and ASTA certified agency',
                    style: 'card-slate',
                  },
                  {
                    icon: Zap,
                    description: 'End-to-end event management',
                    style: 'card-beige',
                  },
                ].map((item, index) => {
                  const isSlate = index === 2;
                  return (
                    <motion.div
                      key={item.description}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className={`${item.style} flex flex-col min-h-[180px] cursor-default`}
                    >
                      <motion.div
                        className={`icon-box mb-auto ${isSlate ? 'bg-white text-[#415371]' : 'bg-white text-charcoal shadow-sm'}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <p className={`text-base font-medium leading-relaxed ${isSlate ? 'text-white' : 'text-gray-700'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview Section - Enhanced */}
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-label text-[#415371] mb-3"
              >
                Our Team
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-lg mb-4"
              >
                Meet the experts behind REACH
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body max-w-2xl mx-auto"
              >
                A team grounded in expertise, passion, and dedication to
                creating unforgettable events.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {team.slice(0, 6).map((member, index) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="text-center group"
                >
                  <motion.div
                    className="aspect-square rounded-2xl bg-[#f2ece8] mb-3 flex items-center justify-center relative overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <span className="text-5xl font-medium text-[#715441]/30 transition-transform duration-300 group-hover:scale-110">
                      {member.name.charAt(0)}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-[#415371] flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white text-base font-semibold">View Profile</span>
                    </motion.div>
                  </motion.div>
                  <h3 className="text-base font-medium text-charcoal group-hover:text-[#415371] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Link href="/about#team" className="btn-secondary btn-shimmer">
                Meet the full team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Premium */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-label text-[#415371] mb-3"
              >
                Testimonials
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-lg"
              >
                What our clients say
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{ y: -4 }}
                  className="card-light relative card-hover"
                >
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0.2, scale: 1 }}
                    whileHover={{ opacity: 0.4, scale: 1.1 }}
                  >
                    <Quote className="h-10 w-10 text-[#415371]" />
                  </motion.div>
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 pr-12 font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-[#415371] flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xl font-medium text-white">
                        {testimonial.author.charAt(0)}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-lg text-charcoal font-medium">
                        {testimonial.author}
                      </p>
                      <p className="text-base text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="card-slate text-center py-12 lg:py-16 relative overflow-hidden"
            >
              {/* Decorative gradient orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <h2 className="heading-lg text-white mb-4">
                  Ready to create something unforgettable?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                  Let&apos;s discuss how REACH can help you plan and execute your
                  next event with excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-white btn-shimmer">
                    Get in Touch
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white text-base font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all hover:scale-[1.02]"
                  >
                    See How We Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
