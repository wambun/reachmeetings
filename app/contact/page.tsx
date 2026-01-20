'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Building,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { FloatingShapes } from '@/components/shared/ui/FloatingShapes';
import { PremiumButton } from '@/components/shared/ui/PremiumButton';
import {
  AnimatedSection,
  AnimatedItem,
} from '@/components/shared/ui/AnimatedSection';
import { cardHover, springs, heroTextReveal, staggerContainer, fadeInUp } from '@/lib/animations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@reachmeetings.com',
    href: 'mailto:info@reachmeetings.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(512) 555-0123',
    href: 'tel:+15125550123',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Austin & Dallas, TX',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Fri: 9am - 6pm CT',
    href: null,
  },
];

const offices = [
  {
    city: 'Austin',
    address: '3736 Bee Cave Rd, Suite 1174',
    address2: 'West Lake Hills, TX 78746',
  },
  {
    city: 'Dallas',
    address: 'Dallas, TX',
    address2: 'By Appointment',
  },
];

const eventTypes = [
  'Corporate Meeting',
  'Conference',
  'Incentive Travel',
  'Executive Retreat',
  'Training Event',
  'Team Building',
  'Special Event',
  'Other',
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    eventType: '',
    attendees: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                  Get in Touch
                </span>
              </motion.div>

              <motion.h1
                variants={heroTextReveal}
                className="heading-xl mb-6"
              >
                Let&apos;s create something{' '}
                <span className="gradient-text-premium">unforgettable</span> together
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-body-lg max-w-2xl"
              >
                Whether you&apos;re planning a corporate meeting, an incentive
                trip, or a special event, we&apos;re here to help bring your
                vision to life.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="relative py-24 lg:py-32 bg-warm-50 overflow-hidden">
          <FloatingShapes variant="section" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Form */}
              <AnimatedSection animation="left" className="lg:col-span-3">
                <h2 className="heading-md mb-6">
                  Send us a <span className="gradient-text-premium">message</span>
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-3xl glass border border-white/30 shadow-premium text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={springs.bouncy}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 text-green-600 mb-6"
                    >
                      <CheckCircle className="h-10 w-10" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ve received your message and will get back to you
                      within 1-2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="p-8 rounded-3xl glass border border-white/30 shadow-premium space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all shadow-sm"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all shadow-sm"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all shadow-sm"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all shadow-sm"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="eventType"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Event Type
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formState.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all shadow-sm"
                          >
                            <option value="" className="bg-white">
                              Select event type
                            </option>
                            {eventTypes.map((type) => (
                              <option
                                key={type}
                                value={type}
                                className="bg-white"
                              >
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="attendees"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Expected Attendees
                          </label>
                          <input
                            type="text"
                            id="attendees"
                            name="attendees"
                            value={formState.attendees}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all shadow-sm"
                            placeholder="e.g., 50-100"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Tell us about your event *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all resize-none shadow-sm"
                          placeholder="Share details about your event, including dates, goals, and any specific requirements..."
                        />
                      </div>

                      <PremiumButton
                        type="submit"
                        variant="gold"
                        size="lg"
                        loading={isSubmitting}
                        fullWidth
                        icon={<Send className="h-4 w-4" />}
                        iconPosition="right"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </PremiumButton>
                    </div>
                  </form>
                )}
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="right" className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="heading-md mb-6">
                    Contact <span className="gradient-text-gold">Information</span>
                  </h2>
                  <AnimatedSection stagger staggerSpeed="fast" className="space-y-4">
                    {contactInfo.map((item) => (
                      <AnimatedItem key={item.label} animation="right">
                        <motion.div
                          className="flex items-start gap-4 p-4 rounded-2xl glass border border-white/30 hover:shadow-premium transition-all duration-300"
                          variants={cardHover}
                          initial="initial"
                          whileHover="hover"
                          transition={springs.snappy}
                        >
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-600 shadow-sm">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-gray-900 hover:text-primary-600 transition-colors font-medium"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-gray-900 font-medium">{item.value}</p>
                            )}
                          </div>
                        </motion.div>
                      </AnimatedItem>
                    ))}
                  </AnimatedSection>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 tracking-tight">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50">
                      <Building className="h-5 w-5 text-primary-600" />
                    </div>
                    Our Offices
                  </h3>
                  <AnimatedSection stagger staggerSpeed="fast" className="space-y-4">
                    {offices.map((office) => (
                      <AnimatedItem key={office.city} animation="right">
                        <motion.div
                          className="p-4 rounded-2xl glass border border-white/30 hover:shadow-premium transition-all duration-300"
                          variants={cardHover}
                          initial="initial"
                          whileHover="hover"
                          transition={springs.snappy}
                        >
                          <p className="font-semibold text-gray-900 mb-1 tracking-tight">
                            {office.city}
                          </p>
                          <p className="text-sm text-gray-600">{office.address}</p>
                          <p className="text-sm text-gray-600">
                            {office.address2}
                          </p>
                        </motion.div>
                      </AnimatedItem>
                    ))}
                  </AnimatedSection>
                </div>

                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 via-secondary-50/50 to-gold/10 border border-white/30 shadow-premium"
                  variants={cardHover}
                  initial="initial"
                  whileHover="hover"
                  transition={springs.snappy}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-5 w-5 text-gold" />
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    We typically respond to inquiries within 1-2 business days.
                    For urgent matters, please call us directly.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
          <FloatingShapes variant="subtle" />

          <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="up" className="text-center mb-12">
              <h2 className="heading-lg mb-4">
                Based in <span className="gradient-text-gold">Texas</span>, serving worldwide
              </h2>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                With headquarters in Austin and Dallas, we manage events across
                the globe for clients of all sizes.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale">
              <motion.div
                className="aspect-[21/9] rounded-3xl glass border border-white/30 shadow-premium flex items-center justify-center overflow-hidden"
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                transition={springs.snappy}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white/50 to-secondary-50/30" />
                <div className="relative text-center">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 shadow-glow-primary mx-auto w-fit mb-4">
                      <MapPin className="h-12 w-12 text-primary-500" />
                    </div>
                  </motion.div>
                  <p className="text-gray-500 font-medium">
                    Interactive map coming soon
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
