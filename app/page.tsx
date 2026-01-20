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
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { services } from '@/data/services';
import { team } from '@/data/team';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeInUp}
                className="text-sm font-medium text-primary-400 mb-4 tracking-wide uppercase"
              >
                Event Management Experts
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                Bring people together.{' '}
                <span className="text-gray-400">Change the world.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
              >
                Full-service event management expertise with venue sourcing,
                meeting management, incentive programs, executive retreats, and
                a fully licensed travel agency.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 lg:py-24 bg-gray-900/50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-medium text-primary-400 mb-2 tracking-wide uppercase">
                Trusted by Leaders
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Industry-leading expertise
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl sm:text-5xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-16"
            >
              <p className="text-sm font-medium text-primary-400 mb-2 tracking-wide uppercase">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Everything your event needs — from concept to execution
              </h2>
              <p className="text-gray-400">
                We take the friction out of event planning — no spreadsheets, no
                confusion, no busywork. Manage every detail in partnership with
                experts who care.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary-600/10 text-primary-400 group-hover:bg-primary-600/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24 lg:py-32 bg-gray-900/50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-medium text-primary-400 mb-2 tracking-wide uppercase">
                  Why Choose REACH
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Built for real-world event success
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Founded in 2020 by a Fortune 500 consulting and training
                  expert and a meetings industry veteran with deep experience in
                  global meetings management. We bring decades of expertise to
                  every event.
                </p>

                <ul className="space-y-4">
                  {[
                    'Consultative, collaborative approach',
                    'Global network of trusted partners',
                    'Fully licensed travel agency',
                    'White-glove service for every client',
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
                  >
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Seasoned professionals dedicated to your success',
                  },
                  {
                    icon: Globe,
                    title: 'Global Reach',
                    description: 'Partners on several continents worldwide',
                  },
                  {
                    icon: Award,
                    title: 'Accredited',
                    description: 'IATAN and ASTA certified agency',
                  },
                  {
                    icon: Calendar,
                    title: 'Full Service',
                    description: 'End-to-end event management',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/5"
                  >
                    <item.icon className="h-8 w-8 text-primary-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-primary-400 mb-2 tracking-wide uppercase">
                Our Team
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Meet the experts behind REACH
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our success starts with our people — a team grounded in
                expertise, passion, and dedication to creating unforgettable
                events.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.slice(0, 6).map((member, index) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="aspect-square rounded-xl bg-gray-800 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Link
                href="/about#team"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                Meet the full team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 lg:py-32 bg-gray-900/50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-primary-400 mb-2 tracking-wide uppercase">
                Testimonials
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What our clients say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/5"
                >
                  <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
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
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 p-12 lg:p-16 text-center"
            >
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Ready to create something unforgettable?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Let&apos;s discuss how REACH can help you plan and execute
                  your next event with excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-primary-600 bg-white hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
                  >
                    See How We Work
                  </Link>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
