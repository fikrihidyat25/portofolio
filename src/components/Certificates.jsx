import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle, ShieldCheck, FileCheck, ExternalLink } from 'lucide-react'

const certificatesList = [
  {
    title: 'Sertifikasi Kejuruan Teknik Komputer & Jaringan',
    issuer: 'SMK Negeri 6 Padang',
    year: '2022',
    category: 'Jaringan & Infrastruktur',
    competencies: [
      'Infrastruktur Local Area Network (LAN) & crimping cabling.',
      'Konfigurasi routing parameter Mikrotik RouterOS.',
      'Troubleshooting perangkat keras workstation & perakitan PC.',
    ],
  },
  {
    title: 'Penyelesaian Kurikulum & Riset Arsitektur Aplikasi Web',
    issuer: 'Institut Teknologi Padang (ITP)',
    year: '2026',
    category: 'Akademik & Rekayasa Web',
    competencies: [
      'Arsitektur perangkat lunak berbasis web modern.',
      'Riset dan implementasi sistem komputasi berorientasi objek.',
      'Desain database relasional dan optimasi query.',
    ],
  },
  {
    title: 'Sertifikat Magang Software Engineering',
    issuer: 'Dinas Kominfo Kota Bukittinggi',
    year: '2025',
    category: 'Magang Industri',
    competencies: [
      'Pengembangan antarmuka aplikasi mobile dengan Flutter & Dart.',
      'Integrasi endpoint RESTful API berbasis Laravel.',
      'Kolaborasi tim teknis dalam lingkungan instansi pemerintahan.',
    ],
  },
  {
    title: 'Sertifikat Praktik Kerja Teknisi Jaringan & IT',
    issuer: 'PT Media Tekno Nusantara',
    year: '2020',
    category: 'Industri IT & Jaringan',
    competencies: [
      'Manajemen jaringan kabel dan nirkabel untuk klien institusional.',
      'Maintenance hardware rutin dan penanganan komplain teknis.',
      'Penyetelan gateway dan routing jaringan Mikrotik.',
    ],
  },
  {
    title: 'Sertifikat Kepanitiaan Media & Dokumentasi (PDD)',
    issuer: 'Himpunan Informatika ITP (Campus Bolean)',
    year: '2024',
    category: 'Organisasi & Media Visual',
    competencies: [
      'Manajemen dokumentasi dan aset visual acara kampus.',
      'Pengelolaan alur publikasi informasi ke media sosial.',
      'Koordinasi tim publikasi lintas departemen.',
    ],
  },
]

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="py-16 sm:py-24 border-t border-zinc-200/80 bg-zinc-50/50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Sertifikasi & Kredensial
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Kredensial resmi dari institusi pendidikan, instansi magang, dan industri IT yang memvalidasi kompetensi teknis serta pengalaman praktik saya.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesList.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-card hover:border-zinc-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-zinc-500">{item.year}</span>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-950 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand mt-1">{item.issuer}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 space-y-2">
                  <p className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Kompetensi Tervalidasi:
                  </p>
                  {item.competencies.map((comp, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                      <CheckCircle className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kredensial Terverifikasi</span>
                </span>
                <span className="text-zinc-400">Arsip CV Resmi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Verification prompt */}
        <div className="mt-8 p-4 rounded-xl border border-zinc-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-brand shrink-0" />
            <span>
              Salinan fisik atau dokumen digital sertifikat resmi dapat diverifikasi atas permintaan langsung.
            </span>
          </div>
          <a
            href="#contact"
            className="min-h-[44px] inline-flex