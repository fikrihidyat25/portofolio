import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink, Code2, Layers, CheckCircle, X } from 'lucide-react'

const projectsData = [
  {
    id: 'simpro-kon',
    title: 'SIMPRO-KON (Construction Project Management System)',
    subtitle: 'Sistem Manajemen Proyek Kontraktor Berbasis Web',
    year: '2026',
    category: 'Full-Stack Web',
    overview:
      'Aplikasi web manajemen proyek konstruksi yang dirancang untuk memantau progres lapangan, aktivitas kontraktor, dan alur pelaporan tim secara terstruktur.',
    role: 'Web Programmer & Backend Logic Developer (Proyek Tim)',
    achievements: [
      'Merancang arsitektur backend dan relasi database dengan Laravel & MySQL.',
      'Membangun antarmuka responsif yang memudahkan kontraktor memperbarui status pekerjaan di lokasi proyek.',
      'Menerapkan validasi data untuk meminimalkan anomali pelaporan aktivitas proyek.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Responsive UI'],
    repoLink: 'https://github.com/fikrihidyat25',
  },
  {
    id: 'kominfo-app',
    title: 'Aplikasi Mobile & Integrasi Layanan Kominfo',
    subtitle: 'Integrasi Antarmuka Mobile dengan Backend API',
    year: '2025',
    category: 'Mobile & API Integration',
    overview:
      'Pengembangan fitur aplikasi mobile untuk kebutuhan dinas komunikasi dan informatika kota Bukittinggi yang terhubung langsung dengan backend API.',
    role: 'Software Engineering Intern',
    achievements: [
      'Membangun antarmuka mobile berbasis Flutter dan bahasa pemrograman Dart.',
      'Mengintegrasikan endpoint RESTful API berbasis Laravel untuk pertukaran data secara aman.',
      'Menerapkan prinsip reusable UI components untuk mempercepat iterasi fitur.',
    ],
    stack: ['Flutter', 'Dart', 'Laravel API', 'REST Client', 'Postman'],
    repoLink: 'https://github.com/fikrihidyat25',
  },
  {
    id: 'mikrotik-infra',
    title: 'Infrastruktur Jaringan LAN & Mikrotik Routing',
    subtitle: 'Arsitektur Jaringan Lokal dan Manajemen Bandwidth',
    year: '2020 - 2022',
    category: 'System & Networking',
    overview:
      'Implementasi dan optimasi jaringan lokal perkantoran untuk menjamin stabilitas throughput data serta keamanan distribusi koneksi klien.',
    role: 'IT & Network Technician',
    achievements: [
      'Konfigurasi parameter routing Mikrotik, firewall rules, dan pembagian bandwidth per user/workstation.',
      'Pemasangan kabel terstruktur (LAN cabling) dan pengujian koneksi jaringan lokal.',
      'Pemecahan masalah hardware PC dan perangkat switch secara berkala.',
    ],
    stack: ['Mikrotik RouterOS', 'LAN Infrastructure', 'Bandwidth Management', 'Hardware Diagnostics'],
    repoLink: 'https://github.com/fikrihidyat25',
  },
  {
    id: 'bolean-media',
    title: 'Visual Documentation & Publication Hub',
    subtitle: 'Manajemen Aset Media Visual Departemen Informatika',
    year: '2024',
    category: 'Digital Media & UI/UX',
    overview:
      'Alur manajemen aset visual dan publikasi media untuk rangkaian kegiatan Campus Bolean dan penyambutan mahasiswa baru Teknik Informatika ITP.',
    role: 'Koordinator PDD (Publikasi, Dekorasi, Dokumentasi)',
    achievements: [
      'Merancang visual framing dan materi publikasi informasi departemen.',
      'Mengelola penyimpanan dan distribusi aset media foto serta video kegiatan.',
      'Koordinasi lintas divisi untuk menjaga keselarasan identitas visual acara.',
    ],
    stack: ['Visual Framing', 'Media Production', 'Team Collaboration', 'Asset Management'],
    repoLink: 'https://github.com/fikrihidyat25',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.section
      id="projects"
      className="py-16 sm:py-24 border-t border-zinc-200/80 bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Portofolio Proyek
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Kumpulan proyek berbasis web, aplikasi mobile, dan infrastruktur sistem nyata yang telah saya kerjakan dalam tim maupun penugasan industri.
            </p>
          </div>

          <a
            href="https://github.com/fikrihidyat25"
            target="_blank"
            rel="noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:text-brand transition py-2 px-1 self-start md:self-auto focus-visible:ring-2 focus-visible:ring-brand rounded-md"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Kunjungi GitHub Lengkap</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/40 hover:bg-white p-6 sm:p-7 shadow-card hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-brand mt-1">{project.subtitle}</p>

                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  {project.overview}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/70 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 hover:text-brand transition py-2 px-1 focus-visible:ring-2 focus-visible:ring-brand rounded-md"
                >
                  <Layers className="w-4 h-4 text-brand" />
                  <span>Lihat Detail Arsitektur</span>
                </button>

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-900 transition py-2 px-2"
                  aria-label={`Buka repositori ${project.title}`}
                >
                  <span>Repositori</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Detail Proyek (Accessible with Escape & backdrop click) */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto border border-zinc-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-4">
                <div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-100 text-zinc-700">
                    {selectedProject.category}
                  </span>
                  <h3 id="modal-title" className="text-xl font-bold text-zinc-950 mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Peran: {selectedProject.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label="Tutup jendela rincian proyek"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    Ringkasan Proyek
                  </h4>
                  <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    Cakupan Kerja & Hasil
                  </h4>
                  <div className="mt-2 space-y-2">
                    {selectedProject.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600">
                        <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    Teknologi yang Diterapkan
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="min-h-[44px] px-4 py-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition"
                >
                  Tutup
                </button>
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition"
           