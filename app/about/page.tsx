'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { team } from '@/data/team';

const stats = [
  { value: '2020', label: 'Founded' },
  { value: '11', label: 'Team Members' },
  { value: '20+', label: 'Years Experience' },
  { value: '500+', label: 'Events Delivered' },
];

const values = [
  {
    title: 'Consultative Approach',
    description:
      'We listen first, then craft solutions tailored to your unique needs and objectives.',
  },
  {
    title: 'Collaborative Partnership',
    description:
      'We work alongside your team as true partners, not just vendors.',
  },
  {
    title: 'Creative Excellence',
    description:
      'We bring fresh ideas and innovative solutions to every event we manage.',
  },
  {
    title: 'Unwavering Commitment',
    description:
      'We are dedicated to delivering unforgettable experiences, every time.',
  },
];

export default function AboutPage() {
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
                Who We Are
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Our success starts with our people
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                At REACH, we&apos;ve built a culture grounded in expertise,
                passion, and dedication — empowering our team to create
                unforgettable experiences for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="relative py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  When you bring people together, you can change the world.
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    REACH Meetings & Events subscribes to the notion that when
                    you bring people together you can change the world.
                  </p>
                  <p>
                    We formed REACH Meetings & Events because we saw the
                    opportunity to offer a unique level of service through our
                    consultative, collaborative, and creative approaches.
                  </p>
                  <p>
                    Our goal is always to manage unforgettable events so that
                    our clients have the opportunity to fully harness the
                    richness of the event&apos;s outcome.
                  </p>
                  <p>
                    REACH was founded in 2020 by a Fortune 500 consulting and
                    training expert and a meetings industry veteran with deep
                    experience in global meetings management. REACH is
                    headquartered in Austin and Dallas, TX.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center"
                  >
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-16"
            >
              <p className="text-sm font-medium text-primary-600 mb-2 tracking-wide uppercase">
                Our Values
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What drives us every day
              </h2>
              <p className="text-gray-600">
                Our values define who we are and how we approach every event we
                manage.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <CheckCircle className="h-8 w-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="relative py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-primary-600 mb-2 tracking-wide uppercase">
                Our Team
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meet the experts behind REACH
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team of seasoned professionals brings decades of combined
                experience to every event we manage.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="aspect-square rounded-xl bg-gray-100 mb-4 overflow-hidden shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center group-hover:from-primary-200 group-hover:to-secondary-200 transition-all">
                      <span className="text-6xl font-bold text-gray-300">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="relative py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-sm font-medium text-primary-600 mb-2 tracking-wide uppercase">
                Our Clients
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted by leaders across industries
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For over 20 years, we have served corporate clientele around the
                world. Today, our customer base is comprised mainly of Executive
                teams, Association leaders, Boards of Directors from various
                sectors as well as Sales organizations. In our leisure business,
                we serve discerning clientele requiring white glove or group
                travel services.
              </p>
            </motion.div>
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
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to work with us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how REACH can help you create an
                unforgettable event.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors shadow-sm"
              >
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
