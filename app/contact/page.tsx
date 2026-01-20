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
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

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
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-label text-[#415371] mb-3"
              >
                Get in Touch
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-display text-charcoal mb-6"
              >
                Let&apos;s create something{' '}
                <span className="text-[#415371]">unforgettable</span> together
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-body-lg"
              >
                Whether you&apos;re planning a corporate meeting, an incentive
                trip, or a special event, we&apos;re here to help bring your
                vision to life.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <h2 className="heading-md mb-6">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-beige text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#415371] text-white mb-6"
                    >
                      <CheckCircle className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-xl font-medium text-charcoal mb-2">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ve received your message and will get back to you
                      within 1-2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="card-light space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-charcoal mb-2"
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
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-charcoal mb-2"
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
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="eventType"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Event Type
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formState.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all"
                          >
                            <option value="">
                              Select event type
                            </option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="attendees"
                            className="block text-sm font-medium text-charcoal mb-2"
                          >
                            Expected Attendees
                          </label>
                          <input
                            type="text"
                            id="attendees"
                            name="attendees"
                            value={formState.attendees}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all"
                            placeholder="e.g., 50-100"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-charcoal mb-2"
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
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#415371]/20 focus:border-[#415371] transition-all resize-none"
                          placeholder="Share details about your event, including dates, goals, and any specific requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="heading-md mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 card-white card-hover"
                      >
                        <div className="icon-box-light">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-charcoal hover:text-[#415371] transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-charcoal font-medium">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-charcoal mb-4 flex items-center gap-3">
                    <div className="icon-box-light">
                      <Building className="h-5 w-5" />
                    </div>
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <motion.div
                        key={office.city}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card-white card-hover"
                      >
                        <p className="font-medium text-charcoal mb-1">
                          {office.city}
                        </p>
                        <p className="text-sm text-gray-600">{office.address}</p>
                        <p className="text-sm text-gray-600">
                          {office.address2}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-beige"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-[#715441]" />
                    <h3 className="text-lg font-medium text-charcoal">
                      Quick Response
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    We typically respond to inquiries within 1-2 business days.
                    For urgent matters, please call us directly.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 lg:py-16 bg-off-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-lg mb-4">
                Based in <span className="text-[#415371]">Texas</span>, serving worldwide
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                With headquarters in Austin and Dallas, we manage events across
                the globe for clients of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.8799612177507!2d-97.8088889!3d30.2891667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4a8e0e7b6b0d%3A0x8a7d0b0c0e0e0e0e!2s3736%20Bee%20Cave%20Rd%2C%20West%20Lake%20Hills%2C%20TX%2078746!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="REACH Meetings & Events Office Location"
                className="w-full h-full"
              />
            </motion.div>
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
                Prefer to talk directly?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Schedule a consultation call with our team and let&apos;s discuss
                your event goals in detail.
              </p>
              <a href="tel:+15125550123" className="btn-white">
                Call Us Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
