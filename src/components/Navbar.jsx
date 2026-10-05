import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

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
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-zinc-200/80 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-zinc-100'
      }`}
    >
      <div className="container-max h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#"
          className="group flex flex-col focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-1"
          aria-label="Kembali ke atas"
        >
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-900 group-hover:text-brand transition-colors">
            Fikri Hidayat
          </span>
          <span className="text-xs text-zinc-500 font-medium">
            Portofolio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Menu navigasi utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors py-2 px-1 focus-visible:ring-2 focus-visible:ring-brand rounded-md"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button (minimum 44x44 touch target) */}
        <button
          type="button"
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 text-zinc-800 hover:bg-zinc-100 transition focus-visible:ring-2 focus-visible:ring-brand"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-zinc-200 bg-white"
          >
            <div className="container-max py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="min-h-[44px] flex items-center px-3 py-2 text-base font-semibold text-zinc-800 hover:bg-zinc-50 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-zinc-100">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="min-h-[44px] flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-brand text-white font-medium text-sm transition"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
