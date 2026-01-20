'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Sparkles, Heart, Users, Lightbulb, Target } from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { team } from '@/data/team';
import { FloatingShapes } from '@/components/shared/ui/FloatingShapes';
import { PremiumButton, ArrowIcon } from '@/components/shared/ui/PremiumButton';
import {
  AnimatedSection,
  AnimatedItem,
  AnimatedCounter,
} from '@/components/shared/ui/AnimatedSection';
import { cardHover, springs, heroTextReveal, staggerContainer, fadeInUp } from '@/lib/animations';

const stats = [
  { value: 2020, label: 'Founded', prefix: '' },
  { value: 11, label: 'Team Members', prefix: '' },
  { value: 20, label: 'Years Experience', suffix: '+' },
  { value: 500, label: 'Events Delivered', suffix: '+' },
];

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
                  Who We Are
                </span>
              </motion.div>

              <motion.h1
                variants={heroTextReveal}
                className="heading-xl mb-6"
              >
                Our success starts with{' '}
                <span className="gradient-text-premium">our people</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-body-lg max-w-2xl"
              >
                At REACH, we&apos;ve built a culture grounded in expertise,
                passion, and dedication — empowering our team to create
                unforgettable experiences for our clients.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="left">
                <h2 className="heading-lg mb-6">
                  When you bring people together, you can{' '}
                  <span className="gradient-text-gold">change the world</span>.
                </h2>
                <div className="space-y-4 text-body text-gray-600">
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
              </AnimatedSection>

              <AnimatedSection stagger staggerSpeed="fast" className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <AnimatedItem key={stat.label} animation="scale">
                    <motion.div
                      className="p-6 rounded-2xl glass text-center hover:shadow-premium transition-all duration-300"
                      variants={cardHover}
                      initial="initial"
                      whileHover="hover"
                      transition={springs.snappy}
                    >
                      <p className="text-3xl sm:text-4xl font-bold text-primary-600">
                        {stat.prefix}
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </p>
                      <div className="w-10 h-0.5 mx-auto mt-3 mb-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full" />
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <FloatingShapes variant="subtle" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="max-w-2xl mb-16">
              <p className="text-label text-primary-600 mb-2">
                Our Values
              </p>
              <h2 className="heading-lg mb-4">
                What <span className="gradient-text-premium">drives us</span> every day
              </h2>
              <p className="text-body text-gray-600">
                Our values define who we are and how we approach every event we
                manage.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="normal" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <AnimatedItem key={value.title} animation="up">
                  <motion.div
                    className="p-6 rounded-2xl glass group hover:shadow-premium-lg transition-all duration-300 h-full"
                    variants={cardHover}
                    initial="initial"
                    whileHover="hover"
                    transition={springs.snappy}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 w-fit mb-4 group-hover:shadow-glow-primary transition-shadow duration-300">
                      <value.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="text-center mb-16">
              <p className="text-label text-primary-600 mb-2">
                Our Team
              </p>
              <h2 className="heading-lg mb-4">
                Meet the <span className="gradient-text-gold">experts</span> behind REACH
              </h2>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                Our team of seasoned professionals brings decades of combined
                experience to every event we manage.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="fast" className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member) => (
                <AnimatedItem key={member.slug} animation="scale">
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={springs.snappy}
                  >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 mb-4 overflow-hidden relative shadow-premium group-hover:shadow-premium-lg transition-shadow duration-300">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-7xl font-bold gradient-text-premium opacity-30 group-hover:opacity-50 transition-opacity">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/90 via-primary-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <div className="text-center">
                          <p className="text-white text-sm font-medium">View Profile</p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <FloatingShapes variant="subtle" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="max-w-3xl mx-auto text-center">
              <p className="text-label text-primary-600 mb-2">
                Our Clients
              </p>
              <h2 className="heading-lg mb-6">
                Trusted by <span className="gradient-text-premium">leaders</span> across industries
              </h2>
              <p className="text-body text-gray-600 leading-relaxed">
                For over 20 years, we have served corporate clientele around the
                world. Today, our customer base is comprised mainly of Executive
                teams, Association leaders, Boards of Directors from various
                sectors as well as Sales organizations. In our leisure business,
                we serve discerning clientele requiring white glove or group
                travel services.
              </p>
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
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-tight">
                    Ready to work with us?
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Let&apos;s discuss how REACH can help you create an
                    unforgettable event.
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
