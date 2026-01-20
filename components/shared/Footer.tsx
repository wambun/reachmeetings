'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/config/site.settings';

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
    <footer className="bg-off-white border-t border-gray-200/50">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="REACH Meetings & Events"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-sm">
              Full-service event management expertise. When you bring people
              together, you can change the world.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#415371] transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>3736 Bee Cave Rd, Suite 1174, West Lake Hills, TX 78746</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-4">
                  Services
                </h3>
                <ul className="space-y-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-[#415371] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-[#415371] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social & Accreditations */}
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-4">
                  Connect
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map(
                    (item) =>
                      item.href && (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-white text-gray-500 hover:text-[#415371] hover:bg-gray-50 transition-colors border border-gray-200/60"
                          aria-label={item.name}
                        >
                          <item.icon className="h-4 w-4" />
                        </a>
                      )
                  )}
                </div>

                {/* Accreditations */}
                <div className="mt-6">
                  <p className="text-xs text-gray-500 mb-3">
                    Accredited by:
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.iatan.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white text-xs font-medium text-gray-600 hover:text-[#415371] transition-colors border border-gray-200/60"
                    >
                      IATAN
                    </a>
                    <a
                      href="https://www.asta.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white text-xs font-medium text-gray-600 hover:text-[#415371] transition-colors border border-gray-200/60"
                    >
                      ASTA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-[#415371] transition-colors"
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
