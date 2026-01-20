'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-subtle'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="REACH Meetings & Events"
              width={320}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                      activeDropdown === item.name
                        ? 'text-[#415371] bg-gray-50'
                        : 'text-gray-600 hover:text-charcoal hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        activeDropdown === item.name ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-charcoal rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.items && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-2 w-72"
                    >
                      <div className="rounded-xl bg-white border border-gray-200/60 shadow-elevated overflow-hidden">
                        <div className="p-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex flex-col gap-1 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <span className="text-sm font-medium text-charcoal group-hover:text-[#415371] transition-colors">
                                {subItem.name}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-gray-500">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link href="/contact" className="btn-primary text-sm">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-charcoal rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200/50"
          >
            <div className="px-6 py-4 space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-600 hover:text-charcoal rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 transition-transform duration-200',
                            activeDropdown === item.name ? 'rotate-180' : ''
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2.5 text-sm text-gray-500 hover:text-[#415371] transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-charcoal rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
