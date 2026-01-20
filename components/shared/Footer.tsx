'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/config/site.settings';
import { springs } from '@/lib/animations';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: siteConfig.instagram,
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: siteConfig.facebook,
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-warm-50 overflow-hidden">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-secondary-500 to-gold opacity-60" />

      {/* Subtle background decorations */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary-100/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-gold/10 blur-3xl" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={springs.snappy}
              >
                <Image
                  src="/logo.png"
                  alt="REACH Meetings & Events"
                  width={160}
                  height={40}
                  className="h-9 w-auto"
                />
              </motion.div>
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-sm">
              Full-service event management expertise. When you bring people
              together, you can change the world.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors group"
                whileHover={{ x: 4 }}
                transition={springs.snappy}
              >
                <div className="p-1.5 rounded-lg bg-white/80 group-hover:bg-primary-50 transition-colors shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>
                {siteConfig.email}
              </motion.a>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <div className="p-1.5 rounded-lg bg-white/80 shadow-sm mt-0.5">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                </div>
                <span>3736 Bee Cave Rd, Suite 1174, West Lake Hills, TX 78746</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
                  Services
                </h3>
                <ul className="space-y-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center gap-1 group"
                      >
                        <span className="h-1 w-1 rounded-full bg-gray-300 group-hover:bg-primary-500 transition-colors" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center gap-1 group"
                      >
                        <span className="h-1 w-1 rounded-full bg-gray-300 group-hover:bg-primary-500 transition-colors" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social & Accreditations */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">
                  Connect
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map(
                    (item) =>
                      item.href && (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white/80 text-gray-500 hover:text-primary-600 hover:bg-white hover:shadow-glow-primary transition-all border border-gray-100/50"
                          aria-label={item.name}
                          whileHover={{ y: -2, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={springs.snappy}
                        >
                          <item.icon className="h-5 w-5" />
                        </motion.a>
                      )
                  )}
                </div>

                {/* Accreditations */}
                <div className="mt-6">
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-gold" />
                    Accredited by:
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://www.iatan.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/80 text-xs font-medium text-gray-600 hover:text-primary-600 hover:bg-white transition-all border border-gray-100/50"
                      whileHover={{ scale: 1.05 }}
                      transition={springs.snappy}
                    >
                      IATAN
                    </motion.a>
                    <motion.a
                      href="https://www.asta.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/80 text-xs font-medium text-gray-600 hover:text-primary-600 hover:bg-white transition-all border border-gray-100/50"
                      whileHover={{ scale: 1.05 }}
                      transition={springs.snappy}
                    >
                      ASTA
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200/50">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 flex items-center gap-1">
              &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
              rights reserved.{' '}
              <span className="hidden sm:inline-flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> in Texas.
              </span>
            </p>
            <div className="flex gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
