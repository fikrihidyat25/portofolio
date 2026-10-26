import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Mail, Phone, ExternalLink } from 'lucide-react'

export default function ResumeCTA() {
  return (
    <section
      id="resume"
      className="py-12 sm:py-16 lg:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 transition-colors"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 lg:p-12 shadow-card"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">
                Lihat Ringkasan Riwayat Hidup
              </h2>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Informasi terpadu seputar riwayat pendidikan di Institut Teknologi Padang & SMK 6 Padang, pengalaman magang di Kominfo Bukittinggi, portofolio sistem proyek DIGITAPRODA, serta daftar keahlian teknis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="/fikrihidayat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-brand dark:hover:bg-blue-600 text-white font-medium text-sm transition shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Lihat File CV</span>
              </a>

              <a
                href="mailto:fikrihidayat2712@gmail.com"
                className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Kirim Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
