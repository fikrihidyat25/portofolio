import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    role: 'Web Programmer (Proyek Tim)',
    organization: 'SIMPRO-KON',
    period: '2026',
    category: 'Rekayasa Perangkat Lunak',
    description:
      'Membangun dan memelihara fitur web inti untuk sistem manajemen proyek konstruksi dalam tim kolaboratif.',
    highlights: [
      'Mengimplementasikan logika backend menggunakan framework Laravel.',
      'Merancang antarmuka responsif guna menyederhanakan pelacakan aktivitas kontraktor.',
      'Bekerja sama erat dalam struktur tim pengembang untuk memastikan integritas data.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Responsive UI'],
  },
  {
    role: 'Software Engineering Intern',
    organization: 'Dinas Kominfo Bukittinggi',
    period: 'Agustus 2025 - September 2025',
    category: 'Magang Industri',
    description:
      'Mengembangkan fitur aplikasi mobile dan web untuk kebutuhan layanan publik serta dinas.',
    highlights: [
      'Membangun antarmuka mobile menggunakan framework Flutter dan bahasa pemrograman Dart.',
      'Melakukan integrasi backend API dengan framework Laravel.',
      'Berkolaborasi langsung dengan pengembang senior untuk menerapkan best practice rekayasa perangkat lunak.',
    ],
    tech: ['Flutter', 'Dart', 'Laravel API', 'RESTful API'],
  },
  {
    role: 'Panitia Media & Dokumentasi (PDD)',
    organization: 'Campus Bolean ITP & Welcoming Event',
    period: '2024',
    category: 'Organisasi & Publikasi',
    description:
      'Mengelola dokumentasi kegiatan serta aset media visual untuk acara penyambutan mahasiswa baru Jurusan Informatika ITP.',
    highlights: [
      'Mengabadikan dokumentasi momen kunci rangkaian acara.',
      'Mengelola alur publikasi media informasi dan materi visual.',
      'Bekerja sama dengan panitia lintas divisi untuk menyajikan materi visual yang menarik.',
    ],
    tech: ['Visual Documentation', 'Media Publication', 'Team Coordination'],
  },
  {
    role: 'IT & Network Technician Intern',
    organization: 'PT Media Tekno Nusantara',
    period: 'Januari 2020 - Mei 2020',
    category: 'Praktik Kerja Industri',
    description:
      'Menangani pemeliharaan teknis perangkat keras komputer dan infrastruktur jaringan lokal untuk klien institusi.',
    highlights: [
      'Menangani troubleshooting perangkat keras, perakitan komputer, dan pemeliharaan berkala.',
      'Melakukan konfigurasi jaringan Local Area Network (LAN) dan parameter routing Mikrotik.',
      'Memastikan konektivitas jaringan tetap stabil dan andal untuk operasional harian klien.',
    ],
    tech: ['Mikrotik RouterOS', 'LAN Networking', 'Hardware Troubleshooting', 'PC Assembly'],
  },
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-16 sm:py-24 border-t border-zinc-200/80 bg-zinc-50/50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Pengalaman Kerja & Organisasi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Pengalaman langsung dalam implementasi kode, arsitektur jaringan, serta kolaborasi tim nyata dari lingkungan pemerintahan, industri, proyek web, dan kampus.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-card hover:border-zinc-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700">
                      {exp.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 mt-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-brand mt-0.5">
                    <Building2 className="w-4 h-4 text-brand" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200/60 self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
                {exp.description}
              </p>

              <div className="mt-4 space-y-2">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-50 text-z