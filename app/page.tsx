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
  Sparkles,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { services } from '@/data/services';
import { team } from '@/data/team';
import { FloatingShapes } from '@/components/shared/ui/FloatingShapes';
import { PremiumButton, ArrowIcon } from '@/components/shared/ui/PremiumButton';
import {
  AnimatedSection,
  AnimatedItem,
  AnimatedCounter,
} from '@/components/shared/ui/AnimatedSection';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  heroTextReveal,
  staggerContainer,
  staggerContainerFast,
  cardHover,
  springs,
} from '@/lib/animations';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Events Managed' },
  { value: 50, suffix: '+', label: 'Global Destinations' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
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
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Premium mesh gradient background */}
          <div className="absolute inset-0 bg-mesh-gradient" />

          {/* Floating animated shapes */}
          <FloatingShapes variant="hero" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              {/* Leading pill */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-gray-700 tracking-wide">
                  Event Management Experts
                </span>
              </motion.div>

              <motion.h1
                variants={heroTextReveal}
                className="heading-xl mb-6"
              >
                Bring people together.{' '}
                <span className="gradient-text-premium">Change the world.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-body-lg max-w-2xl"
              >
                Full-service event management expertise with venue sourcing,
                meeting management, incentive programs, executive retreats, and
                a fully licensed travel agency.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <PremiumButton variant="gold" size="lg" icon={<ArrowIcon />}>
                    Get Started
                  </PremiumButton>
                </Link>
                <Link href="/services">
                  <PremiumButton variant="outline" size="lg">
                    Explore Services
                  </PremiumButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 lg:py-32 bg-warm-50">
          <FloatingShapes variant="subtle" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="text-center mb-16">
              <p className="text-label text-primary-600 mb-2">
                Trusted by Leaders
              </p>
              <h2 className="heading-lg">
                Industry-leading{' '}
                <span className="gradient-text-gold">expertise</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="fast" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <AnimatedItem key={stat.label} animation="scale">
                  <div className="text-center p-6 rounded-2xl glass hover:shadow-premium transition-all duration-300">
                    <p className="text-4xl sm:text-5xl font-bold text-primary-600">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <div className="w-12 h-0.5 mx-auto mt-3 mb-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full" />
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="max-w-2xl mb-16">
              <p className="text-label text-primary-600 mb-2">
                What We Do
              </p>
              <h2 className="heading-lg mb-4">
                Everything your event needs —{' '}
                <span className="gradient-text-premium">concept to execution</span>
              </h2>
              <p className="text-body text-gray-600">
                We take the friction out of event planning — no spreadsheets, no
                confusion, no busywork. Manage every detail in partnership with
                experts who care.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="normal" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service) => (
                <AnimatedItem key={service.slug} animation="up">
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className="group card-premium p-6"
                      variants={cardHover}
                      initial="initial"
                      whileHover="hover"
                      transition={springs.snappy}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300 group-hover:shadow-glow-primary">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold tracking-tight text-gray-900 group-hover:text-primary-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedSection>

            <AnimatedSection animation="up" className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
              >
                View all services
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="left">
                <p className="text-label text-primary-600 mb-2">
                  Why Choose REACH
                </p>
                <h2 className="heading-lg mb-6">
                  Built for real-world{' '}
                  <span className="gradient-text-gold">event success</span>
                </h2>
                <p className="text-body text-gray-600 mb-8">
                  Founded in 2020 by a Fortune 500 consulting and training
                  expert and a meetings industry veteran with deep experience in
                  global meetings management. We bring decades of expertise to
                  every event.
                </p>

                <AnimatedSection stagger staggerSpeed="fast" className="space-y-4">
                  {[
                    'Consultative, collaborative approach',
                    'Global network of trusted partners',
                    'Fully licensed travel agency',
                    'White-glove service for every client',
                  ].map((item) => (
                    <AnimatedItem key={item} animation="left">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-1 rounded-full bg-gradient-to-br from-primary-100 to-primary-200">
                          <CheckCircle className="h-5 w-5 text-primary-600" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    </AnimatedItem>
                  ))}
                </AnimatedSection>

                <div className="mt-10">
                  <Link href="/about">
                    <PremiumButton variant="primary" size="lg" icon={<ArrowIcon />}>
                      Learn More About Us
                    </PremiumButton>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection stagger staggerSpeed="normal" className="grid grid-cols-2 gap-4">
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
                ].map((item) => (
                  <AnimatedItem key={item.title} animation="scale">
                    <motion.div
                      className="p-6 rounded-2xl glass group hover:shadow-premium-lg transition-all duration-300"
                      variants={cardHover}
                      initial="initial"
                      whileHover="hover"
                      transition={springs.snappy}
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 w-fit mb-4 group-hover:shadow-glow-primary transition-shadow duration-300">
                        <item.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <FloatingShapes variant="subtle" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="text-center mb-16">
              <p className="text-label text-primary-600 mb-2">
                Our Team
              </p>
              <h2 className="heading-lg mb-4">
                Meet the <span className="gradient-text-premium">experts</span> behind REACH
              </h2>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                Our success starts with our people — a team grounded in
                expertise, passion, and dedication to creating unforgettable
                events.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="fast" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.slice(0, 6).map((member) => (
                <AnimatedItem key={member.slug} animation="scale">
                  <motion.div
                    className="text-center group cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={springs.snappy}
                  >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 mb-4 overflow-hidden relative group-hover:shadow-premium transition-shadow duration-300">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl font-bold gradient-text-premium opacity-30 group-hover:opacity-50 transition-opacity">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium">View Profile</span>
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedSection>

            <AnimatedSection animation="up" className="mt-12 text-center">
              <Link
                href="/about#team"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
              >
                Meet the full team
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="text-center mb-16">
              <p className="text-label text-primary-600 mb-2">
                Testimonials
              </p>
              <h2 className="heading-lg">
                What our <span className="gradient-text-gold">clients</span> say
              </h2>
            </AnimatedSection>

            <AnimatedSection stagger staggerSpeed="normal" className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <AnimatedItem key={testimonial.author} animation="up">
                  <motion.div
                    className="relative p-8 rounded-3xl glass group hover:shadow-premium-lg transition-all duration-300"
                    variants={cardHover}
                    initial="initial"
                    whileHover="hover"
                    transition={springs.snappy}
                  >
                    {/* Gold quote icon */}
                    <div className="absolute -top-3 -left-3 p-2 rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light shadow-glow-gold">
                      <Quote className="h-5 w-5 text-white" />
                    </div>

                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-600">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold tracking-tight">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
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

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={springs.gentle}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <Sparkles className="h-4 w-4 text-gold-light" />
                    <span className="text-sm font-medium text-white/90">Let&apos;s Create Together</span>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-tight">
                    Ready to create something{' '}
                    <span className="text-gold-light">unforgettable</span>?
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Let&apos;s discuss how REACH can help you plan and execute
                    your next event with excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <PremiumButton variant="gold" size="lg" icon={<ArrowIcon />}>
                        Get in Touch
                      </PremiumButton>
                    </Link>
                    <Link href="/how-we-work">
                      <PremiumButton
                        variant="ghost"
                        size="lg"
                        className="text-white hover:bg-white/10 border border-white/20"
                      >
                        See How We Work
                      </PremiumButton>
                    </Link>
                  </div>
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
