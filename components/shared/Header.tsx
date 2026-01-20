'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { springs } from '@/lib/animations';

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
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm'
          : 'bg-white/70 backdrop-blur-lg'
      )}
    >
      {/* Gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-secondary-500 to-gold opacity-80" />

      <nav className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={springs.snappy}
            >
              <Image
                src="/logo.png"
                alt="REACH Meetings & Events"
                width={180}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </motion.div>
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
                  <motion.button
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-xl',
                      activeDropdown === item.name
                        ? 'text-primary-600 bg-primary-50/80'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                    )}
                    whileHover={{ y: -1 }}
                    transition={springs.snappy}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        activeDropdown === item.name ? 'rotate-180' : ''
                      )}
                    />
                  </motion.button>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-xl transition-colors group"
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      transition={springs.snappy}
                      className="relative z-10"
                    >
                      {item.name}
                    </motion.span>
                    <span className="absolute inset-0 rounded-xl bg-gray-50/0 group-hover:bg-gray-50/80 transition-colors" />
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.items && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={springs.snappy}
                      className="absolute left-0 top-full pt-2 w-80"
                    >
                      <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-100/50 shadow-premium overflow-hidden">
                        <div className="p-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex flex-col gap-1 px-4 py-3 rounded-xl hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-secondary-50/30 transition-all group"
                            >
                              <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors tracking-tight">
                                {subItem.name}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
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
            <Link href="/contact">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springs.snappy}
              >
                <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-gold-dark via-gold to-amber-500 rounded-xl transition-all shadow-[0_4px_20px_-4px_rgba(212,175,55,0.5)] group-hover:shadow-[0_8px_30px_-4px_rgba(212,175,55,0.6)]">
                  <Sparkles className="h-4 w-4" />
                  Get in Touch
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="lg:hidden p-2 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50"
          >
            <div className="px-6 py-4 space-y-2">
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
                        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
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
                                className="block px-4 py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
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
                      className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
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
                  className="flex w-full items-center justify-center gap-2 text-center px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gold-dark via-gold to-amber-500 rounded-xl transition-all shadow-[0_4px_20px_-4px_rgba(212,175,55,0.5)]"
                >
                  <Sparkles className="h-4 w-4" />
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
