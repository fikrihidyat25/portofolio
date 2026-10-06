import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Github, Linkedin, ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] flex items-center py-6 sm:py-10 lg:py-0 border-b border-zinc-200/60 bg-white"
    >
      <div className="container-max w-full py-4 sm:py-6 lg:py-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Introduction Column */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15]">
              Halo, saya <span className="text-brand">Fikri Hidayat</span>
            </h1>

            <p className="mt-2.5 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-zinc-700">
              Mobile & Web Developer | Mahasiswa Teknik Informatika ITP
            </p>

            {/* Mobile & Tablet Responsive Photo: Visible directly in the hero flow on mobile (< lg) */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="block lg:hidden my-6"
            >
              <div className="w-full max-w-md mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-soft border border-zinc-200 bg-zinc-100 relative">
                <img
                  src="/profile.jpeg"
                  alt="Foto profil Fikri Hidayat"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-zinc-950/75 backdrop-blur-sm text-white text-xs font-medium flex items-center justify-between">
                  <span>Fikri Hidayat</span>
                  <span className="text-zinc-300 text-[11px]">Siap Kerja & Terus Belajar</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Mahasiswa Teknik Informatika dengan fokus pada pengembangan web full-stack, aplikasi mobile, serta jaringan komputer. Terbiasa membangun antarmuka web, integrasi API, dan perancangan database yang fungsional serta mudah digunakan.
            </p>

            {/* Action Buttons with min 44px tap targets */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -2 }}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-zinc-900 text-white font-medium text-sm sm:text-base hover:bg-zinc-800 transition shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#resume"
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -2 }}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-zinc-300 bg-white text-zinc-800 font-medium text-sm sm:text-base hover:bg-zinc-50 transition shadow-sm focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Download className="w-4 h-4 text-zinc-500" />
                <span>Ringkasan CV</span>
              </motion.a>

              <motion.a
                href="https://wa.me/6282387337572"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -2 }}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-zinc-200 text-zinc-700 font-medium text-sm sm:text-base hover:bg-zinc-100 transition focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Phone className="w-4 h-4 text-brand" />
                <span>WhatsApp</span>
              </motion.a>
            </div>

            {/* Quick Contact & Verified Profile Links */}
            <div className="mt-8 pt-5 border-t border-zinc-200 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Padang, Sumatera Barat</span>
              </div>
              <a
                href="https://github.com/fikrihidyat25"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-950 transition py-1 focus-visible:ring-2 focus-visible:ring-brand rounded"
              >
                <Github className="w-4 h-4 text-zinc-700 shrink-0" />
                <span>github.com/fikrihidyat25</span>
              </a>
              <a
                href="https://linkedin.com/in/fikri-hidayat-092070368/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-950 transition py-1 focus-visible:ring-2 focus-visible:ring-brand rounded"
              >
                <Linkedin className="w-4 h-4 text-zinc-700 shrink-0" />
                <span>LinkedIn Profil</span>
              </a>
            </div>
          </div>

          {/* Desktop Photo Column: Fills the full height of the desktop browser window */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="hidden lg:flex lg:col-span-5 justify-center items-center h-full"
          >
            <div className="w-full h-full min-h-[520px] xl:min-h-[600px] max-h-[680px] rounded-3xl border border-zinc-200/90 bg-white p-3 shadow-soft flex flex-col justify-between">
              <div className="w-full flex-1 rounded-2xl overflow-hidden bg-zinc-100 relative min-h-[440px]">
                <img
                  src="/profile.jpeg"
                  alt="Foto resmi Fikri Hidayat"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              <div className="mt-3.5 p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 shrink-0 text-left">
                <p className="text-sm font-bold text-zinc-950">
                  Siap Bekerja & Berkomitmen Belajar Lebih Jauh
                </p>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Memiliki rasa ingin tahu tinggi dan kemauan kuat untuk terus berkembang. Berbekal pengalaman magang, proyek web, dan infrastruktur jaringan, saya siap terjun ke lingkungan kerja profesional, beradaptasi dengan ritme tim, dan terbuka menerima bimbingan untuk mengasah keahlian teknis secara mendalam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
