import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Calendar, CheckCircle2, Briefcase, Award, Users } from 'lucide-react'

const experiences = [
  {
    role: 'Junior Web Programmer',
    organization: 'Mediatama Web (LPK Mediatama Web Indonesia)',
    period: 'Agustus 2026 - September 2026',
    category: 'Pelatihan',
    typeBadge: 'Pelatihan Kerja',
    description:
      'Program pelatihan kerja intensif 25 hari kerja Web Design berstandar Kemnaker RI.',
    highlights: [
      'Mengimplementasikan rancangan antarmuka pengguna (UI) web yang responsif dan interaktif.',
      'Menulis kode program terstruktur, manipulasi struktur data, dan pemanfaatan pustaka komponen web.',
      'Melakukan pengujian fungsionalitas aplikasi dan proses debugging kode program.',
    ],
    tech: ['Web Design', 'HTML5', 'CSS3', 'JavaScript', 'Debugging'],
  },
  {
    role: 'Web Programmer (Proyek Tim)',
    organization: 'DIGITAPRODA',
    period: '2026',
    category: 'Pengalaman Kerja',
    typeBadge: 'Proyek Rekayasa Perangkat Lunak',
    description:
      'Membangun dan memelihara fitur web inti untuk sistem manajemen proyek konstruksi dalam proyek kolaboratif bersama dosen dan tim pengembang.',
    highlights: [
      'Mengimplementasikan logika backend dan arsitektur database relasional menggunakan Laravel.',
      'Merancang antarmuka responsif guna menyederhanakan pelacakan progres aktivitas kontraktor.',
      'Bekerja sama erat dalam struktur tim pengembang untuk memastikan integritas data.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Responsive UI', 'Git'],
  },
  {
    role: 'Software Engineering Intern',
    organization: 'Dinas Kominfo Bukittinggi',
    period: 'Agustus 2025 - September 2025',
    category: 'Pengalaman Kerja',
    typeBadge: 'Magang Industri',
    description:
      'Mengembangkan fitur aplikasi mobile dan web untuk kebutuhan operasional layanan publik kedinasan.',
    highlights: [
      'Membangun antarmuka mobile menggunakan framework Flutter dan bahasa pemrograman Dart.',
      'Melakukan integrasi antarmuka dengan endpoint RESTful API berbasis Laravel.',
      'Berkolaborasi langsung dengan tim pengembang untuk menerapkan standar penulisan kode.',
    ],
    tech: ['Flutter', 'Dart', 'Laravel API', 'RESTful API'],
  },
  {
    role: 'IT & Network Technician Intern (PRAKERIN)',
    organization: 'PT Media Tekno Nusantara',
    period: 'Januari 2020 - Mei 2020',
    category: 'Pengalaman Kerja',
    typeBadge: 'Praktik Kerja Industri',
    description:
      'Melaksanakan praktik kerja industri dalam pemeliharaan perangkat keras dan instalasi jaringan komputer institusi.',
    highlights: [
      'Menangani troubleshooting perangkat keras komputer, perakitan PC, dan instalasi sistem operasi.',
      'Mengonfigurasi jaringan Local Area Network (LAN) dan manajemen parameter routing Mikrotik.',
      'Memastikan konektivitas internet stabil dan menangani kendala teknis jaringan klien.',
    ],
    tech: ['Mikrotik RouterOS', 'LAN Networking', 'Hardware Troubleshooting', 'Perakitan PC'],
  },
  {
    role: 'Panitia Media & Dokumentasi (PDD)',
    organization: 'HIMATIF Institut Teknologi Padang',
    period: '2024',
    category: 'Organisasi',
    typeBadge: 'Kepanitiaan Kampus',
    description:
      'Mengelola dokumentasi kegiatan serta publikasi materi visual untuk agenda orientasi mahasiswa baru Jurusan Informatika ITP (Campus Bolean).',
    highlights: [
      'Mendokumentasikan momen kunci selama rangkaian kegiatan acara berlangsung.',
      'Mengelola alur publikasi informasi dan materi visual melalui kanal resmi kegiatan.',
      'Bekerja sama lintas divisi panitia untuk menyajikan materi publikasi yang komunikatif.',
    ],
    tech: ['Dokumentasi Visual', 'Publikasi Media', 'Koordinasi Tim'],
  },
]

const categories = ['Semua', 'Pengalaman Kerja', 'Pelatihan', 'Organisasi']

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredExperiences =
    activeCategory === 'Semua'
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory)

  const getCategoryCount = (cat) => {
    if (cat === 'Semua') return experiences.length
    return experiences.filter((exp) => exp.category === cat).length
  }

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 transition-colors"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">
            Pengalaman Kerja, Pelatihan & Organisasi
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Rekam jejak terstruktur mencakup pengalaman kerja teknis, pelatihan resmi, serta keaktifan kepanitiaan dan organisasi kampus.
          </p>
        </div>

        {/* Filter Categories with min 44px tap targets */}
        <div className="w-full max-w-full overflow-hidden mt-6 sm:mt-8">
          <div className="w-full max-w-full flex items-center gap-2 overflow-x-auto pb-2.5 scrollbar-none touch-pan-x">
            {categories.map((cat) => {
              const count = getCategoryCount(cat)
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition whitespace-nowrap border flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand ${
                    activeCategory === cat
                      ? 'bg-zinc-900 dark:bg-brand border-zinc-900 dark:border-brand text-white shadow-sm'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
                      activeCategory === cat
                        ? 'bg-zinc-700 dark:bg-blue-800 text-zinc-100'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="mt-8 grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={`${exp.organization}-${exp.role}`}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-7 lg:p-8 shadow-card hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {exp.typeBadge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-100 mt-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-brand dark:text-blue-400 mt-1">
                      <Building2 className="w-4 h-4 text-brand dark:text-blue-400 shrink-0" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 self-start sm:self-auto shrink-0">
                    <Calendar className="w-4 h-4 text-zinc-400 dark:text-zinc-400 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4 space-y-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-brand dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
