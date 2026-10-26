import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { href: '#about', label: 'Tentang' },
  { href: '#experience', label: 'Pengalaman' },
  { href: '#projects', label: 'Proyek' },
  { href: '#certificates', label: 'Sertifikat' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Handle escape key to close mobile menu for keyboard accessibility
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border-zinc-200/80 dark:border-zinc-800/80 shadow-sm'
            : 'bg-white/95 dark:bg-zinc-950/90 backdrop-blur-sm border-zinc-200/60 dark:border-zinc-800/60'
        }`}
      >
        <div className="container-max h-16 sm:h-20 flex items-center justify-between">
          <a
            href="#"
            className="group flex flex-col focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-1"
            aria-label="Kembali ke atas"
          >
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-brand dark:group-hover:text-brand-light transition-colors">
              Fikri Hidayat
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              Portofolio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Menu navigasi utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors py-2 px-1 focus-visible:ring-2 focus-visible:ring-brand rounded-md"
              >
                {link.label}
              </a>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
              className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition flex items-center justify-center focus-visible:ring-2 focus-visible:ring-brand"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600 animate-in -spin-in-90 duration-200" />
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-brand dark:hover:bg-blue-600 text-white text-sm font-medium transition shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-300 dark:text-white/80" />
            </a>
          </nav>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition focus-visible:ring-2 focus-visible:ring-brand"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-600" />
              )}
            </button>

            <button
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition focus-visible:ring-2 focus-visible:ring-brand"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-lg"
            >
              <div className="container-max py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="min-h-[44px] flex items-center px-3.5 py-2.5 text-base font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 rounded-xl transition focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 mt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="min-h-[44px] flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-brand dark:hover:bg-blue-600 text-white font-medium text-sm transition shadow-sm"
                  >
                    Hubungi Saya
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to prevent content jump underneath fixed navbar */}
      <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />
    </>
  )
}
