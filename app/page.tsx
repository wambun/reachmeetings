'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Globe,
  Award,
  Calendar,
  CheckCircle,
  Quote,
  Zap,
  Building2,
  Crown,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { services } from '@/data/services';
import { team } from '@/data/team';

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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 bg-off-white">
          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-gray-200/60"
              >
                <span className="text-sm font-medium text-gray-600">
                  Event Management Experts
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="heading-display text-charcoal mb-6"
              >
                Bring people together.{' '}
                <span className="text-[#415371]">Change the world.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-lg max-w-2xl"
              >
                Full-service event management expertise with venue sourcing,
                meeting management, incentive programs, executive retreats, and
                a fully licensed travel agency.
              </motion.p>

              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section - Vectura 4-card style */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${cardStyles[index]} flex flex-col justify-between min-h-[180px]`}
                  >
                    <p className={`text-4xl lg:text-5xl font-semibold tracking-tight ${isSlate ? 'text-white' : 'text-charcoal'}`}>
                      {stat.value}
                    </p>
                    <p className={`text-sm ${isSlate ? 'text-white/80' : 'text-gray-600'}`}>
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-16">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {services.slice(0, 6).map((service, index) => (
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
                      <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-[#415371] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-[#415371] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#415371] hover:text-[#334159] font-medium transition-colors"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section - Vectura style */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
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

                <div className="space-y-4">
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
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#415371] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mt-10"
                >
                  <Link href="/about" className="btn-primary">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Vectura-style feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Seasoned professionals dedicated to your success',
                    style: 'card-light',
                  },
                  {
                    icon: Globe,
                    title: 'Global Reach',
                    description: 'Partners on several continents worldwide',
                    style: 'card-white border border-gray-100',
                  },
                  {
                    icon: Crown,
                    title: 'Accredited',
                    description: 'IATAN and ASTA certified agency',
                    style: 'card-slate',
                  },
                  {
                    icon: Zap,
                    title: 'Full Service',
                    description: 'End-to-end event management',
                    style: 'card-beige',
                  },
                ].map((item, index) => {
                  const isSlate = index === 2;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className={`${item.style} flex flex-col min-h-[200px]`}
                    >
                      <div className={`icon-box mb-auto ${isSlate ? 'bg-white text-[#415371]' : 'bg-white text-charcoal shadow-soft'}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <p className={`text-sm leading-relaxed ${isSlate ? 'text-white/90' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {team.slice(0, 6).map((member, index) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="aspect-square rounded-2xl bg-[#f2ece8] mb-4 flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl font-semibold text-[#715441]/30">
                      {member.name.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-[#415371] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">View Profile</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/about#team"
                className="inline-flex items-center gap-2 text-[#415371] hover:text-[#334159] font-medium transition-colors"
              >
                Meet the full team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
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

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card-light relative"
                >
                  <div className="absolute top-6 right-6">
                    <Quote className="h-8 w-8 text-[#415371]/20" />
                  </div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 pr-12">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#415371] flex items-center justify-center">
                      <span className="text-lg font-semibold text-white">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-charcoal font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Slate blue instead of gradient */}
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-slate text-center py-16 lg:py-20"
            >
              <h2 className="heading-lg text-white mb-4">
                Ready to create something unforgettable?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how REACH can help you plan and execute your
                next event with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-white">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                >
                  See How We Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
