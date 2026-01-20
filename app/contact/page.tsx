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
                Get in Touch
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Let&apos;s create something unforgettable together
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Whether you&apos;re planning a corporate meeting, an incentive
                trip, or a special event, we&apos;re here to help bring your
                vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="relative py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ve received your message and will get back to you
                      within 1-2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-600 mb-2"
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
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-600 mb-2"
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
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-600 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-600 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="eventType"
                          className="block text-sm font-medium text-gray-600 mb-2"
                        >
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formState.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                          className="block text-sm font-medium text-gray-600 mb-2"
                        >
                          Expected Attendees
                        </label>
                        <input
                          type="text"
                          id="attendees"
                          name="attendees"
                          value={formState.attendees}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="e.g., 50-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-600 mb-2"
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
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Share details about your event, including dates, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 disabled:bg-primary-600/50 disabled:cursor-not-allowed rounded-lg transition-colors w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                      >
                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-gray-900 hover:text-primary-600 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-900">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary-600" />
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                      >
                        <p className="font-medium text-gray-900 mb-1">
                          {office.city}
                        </p>
                        <p className="text-sm text-gray-600">{office.address}</p>
                        <p className="text-sm text-gray-600">
                          {office.address2}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Quick Response
                  </h3>
                  <p className="text-sm text-gray-600">
                    We typically respond to inquiries within 1-2 business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="relative py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Based in Texas, serving worldwide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With headquarters in Austin and Dallas, we manage events across
                the globe for clients of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 shadow-sm flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  Interactive map coming soon
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
