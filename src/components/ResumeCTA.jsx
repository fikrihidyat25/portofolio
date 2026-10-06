import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Mail, Phone, ExternalLink } from 'lucide-react'

export default function ResumeCTA() {
  return (
    <section
      id="resume"
      className="py-16 sm:py-20 border-t border-zinc-200/80 bg-zinc-50/50"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-card"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Unduh Ringkasan Riwayat Hidup
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Informasi terpadu seputar riwayat pendidikan di Institut Teknologi Padang & SMK 6 Padang, pengalaman magang di Kominfo Bukittinggi, portofolio sistem proyek SIMPRO-KON, serta daftar keahlian teknis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href="/Bro_CV.pdf"
                download="CV_Fikri_Hidayat.pdf"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm transition shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                <Download className="w-4 h-4" />
                <span>Unduh File CV</span>
              </a>

              <a
                href="mailto:fikrihidayat2712@gmail.com"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 font-medium text-sm transition focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>Kirim Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
