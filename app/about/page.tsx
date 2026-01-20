'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Lightbulb, Target } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { team } from '@/data/team';

const values = [
  {
    icon: Heart,
    title: 'Consultative Approach',
    description:
      'We listen first, then craft solutions tailored to your unique needs and objectives.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description:
      'We work alongside your team as true partners, not just vendors.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    description:
      'We bring fresh ideas and innovative solutions to every event we manage.',
  },
  {
    icon: Target,
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
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-label text-[#415371] mb-3"
              >
                Who We Are
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display text-charcoal mb-6"
              >
                Our success starts with{' '}
                <span className="text-[#415371]">our people</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body-lg"
              >
                At REACH, we&apos;ve built a culture grounded in expertise,
                passion, and dedication — empowering our team to create
                unforgettable experiences for our clients.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-lg mb-6"
                >
                  When you bring people together, you can change the world.
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4 text-body"
                >
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
                    experience in global meetings management.
                  </p>
                </motion.div>
              </div>

              {/* Stats - Vectura 4-card style */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2020', label: 'Founded', style: 'card-light' },
                  { value: '11', label: 'Team Members', style: 'card-white border border-gray-100' },
                  { value: '20+', label: 'Years Experience', style: 'card-slate' },
                  { value: '500+', label: 'Events Delivered', style: 'card-beige' },
                ].map((stat, index) => {
                  const isSlate = index === 2;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`${stat.style} flex flex-col justify-between min-h-[160px]`}
                    >
                      <p className={`text-4xl font-semibold tracking-tight ${isSlate ? 'text-white' : 'text-charcoal'}`}>
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
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-label text-[#415371] mb-3"
              >
                Our Values
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-lg mb-4"
              >
                What drives us every day
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body"
              >
                Our values define who we are and how we approach every event we
                manage.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-white card-hover h-full"
                >
                  <div className="icon-box-light mb-4">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 lg:py-28 bg-white scroll-mt-24">
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
                Our team of seasoned professionals brings decades of combined
                experience to every event we manage.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-square rounded-2xl bg-[#f2ece8] mb-4 flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl font-semibold text-[#715441]/30">
                      {member.name.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-[#415371] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Profile</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20 lg:py-28 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-label text-[#415371] mb-3"
              >
                Our Clients
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-lg mb-6"
              >
                Trusted by leaders across industries
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body"
              >
                For over 20 years, we have served corporate clientele around the
                world. Today, our customer base is comprised mainly of Executive
                teams, Association leaders, Boards of Directors from various
                sectors as well as Sales organizations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-slate text-center py-16 lg:py-20"
            >
              <h2 className="heading-lg text-white mb-4">
                Ready to work with us?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how REACH can help you create an
                unforgettable event.
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
