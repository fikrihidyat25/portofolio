import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, HeartHandshake, Compass } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 transition-colors"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">
            Latar Belakang & Pendidikan
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Saya menempuh studi Sarjana Teknik Informatika di Institut Teknologi Padang (ITP). Menggabungkan pengalaman praktis jaringan dari SMK dengan arsitektur rekayasa perangkat lunak modern untuk menciptakan produk web dan mobile yang tangguh, aman, dan mudah digunakan.
          </p>
        </div>

        {/* Education & Core Values */}
        <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Education Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-5 sm:p-7 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand dark:text-blue-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">Riwayat Pendidikan</h3>
            </div>

            <div className="space-y-6">
              <div className="relative pl-5 sm:pl-6 border-l-2 border-brand dark:border-brand-accent">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-brand dark:border-brand-accent" />
                <span className="text-xs font-semibold text-brand dark:text-blue-400">2022 - Perkiraan Lulus November 2026</span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  S1 Teknik Informatika (S.Kom)
                </h4>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Institut Teknologi Padang (ITP)</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Menyelesaikan seluruh mata kuliah utama dan riset tugas akhir arsitektur aplikasi web. Fokus pendalaman pada Rekayasa Perangkat Lunak, Pengembangan Web, dan Arsitektur Sistem.
                </p>
              </div>

              <div className="relative pl-5 sm:pl-6 border-l-2 border-zinc-200 dark:border-zinc-700">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-400 dark:border-zinc-500" />
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">2019 - 2022</span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  Teknik Komputer & Jaringan (TKJ)
                </h4>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">SMK Negeri 6 Padang</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Lulus dengan spesialisasi pemeliharaan perangkat keras komputer, infrastruktur Local Area Network (LAN), dan konfigurasi router Mikrotik.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-7 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Pendekatan Kerja & Nilai</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand dark:text-blue-400" />
                    <span>Perancangan Sistem & UI/UX</span>
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Merancang alur database dan logika backend terlebih dahulu, lalu menerjemahkannya ke dalam antarmuka web yang rapi dan mudah digunakan.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-brand dark:text-blue-400" />
                    <span>Komunikasi & Kolaborasi Tim</span>
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Terbuka terhadap masukan, adaptif terhadap arahan tim, dan mengutamakan koordinasi yang jelas dalam menyelesaikan pekerjaan.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Bertekad untuk terus memperdalam rekayasa perangkat lunak, siap berkontribusi langsung dalam tim kerja profesional, serta terbuka mengeksplorasi ekosistem teknologi modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
