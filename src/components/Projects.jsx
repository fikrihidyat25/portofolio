import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, ExternalLink, Code2, Layers, CheckCircle, X, Filter } from 'lucide-react'

const projectsData = [
  {
    id: 'kontraktor',
    title: 'SIMPRO-KON (Sistem Manajemen Kontraktor)',
    subtitle: 'Manajemen Proyek Lapangan & Laporan Kontraktor',
    category: 'Full-Stack Web',
    year: '2025',
    overview:
      'Aplikasi web manajemen proyek yang dirancang untuk membantu pencatatan progres pekerjaan, aktivitas tim kontraktor, dan rekapitulasi data di lapangan. Dibangun secara kolaboratif bersama tim menggunakan framework Laravel.',
    role: 'Kolaborasi Tim (Web & Backend Logic)',
    achievements: [
      'Pembangunan modul pengelolaan data proyek dan pelaporan progres lapangan.',
      'Perancangan struktur tabel database relasional menggunakan MySQL.',
      'Penerapan validasi input form untuk meminimalkan anomali pencatatan berkas proyek.',
    ],
    stack: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS'],
    repoLink: 'https://github.com/fikrihidyat25/kontraktor',
  },
  {
    id: 'findly',
    title: 'Findly (Lost & Found Web Platform)',
    subtitle: 'Platform Pencarian & Pelaporan Barang Hilang',
    category: 'Full-Stack Web',
    year: '2024',
    overview:
      'Platform berbasis web yang memfasilitasi pengguna untuk memposting laporan kehilangan maupun penemuan barang di area sekitar. Proyek ini dikerjakan saat mengikuti program pelatihan web programmer dengan fokus pada arsitektur Next.js dan Supabase.',
    role: 'Full-Stack Developer (Program Pelatihan)',
    achievements: [
      'Pembuatan fitur publikasi dan penelusuran barang berdasarkan kategori serta lokasi.',
      'Integrasi backend Supabase untuk autentikasi pengguna dan penyimpanan data terpusat.',
      'Penyusunan antarmuka yang responsif untuk kenyamanan akses melalui perangkat mobile dan desktop.',
    ],
    stack: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    repoLink: 'https://github.com/fikrihidyat25/findly',
  },
  {
    id: 'toko-bangunan',
    title: 'Katalog & Web Toko Bangunan',
    subtitle: 'Katalog Produk Material Bangunan Berbasis Web',
    category: 'Full-Stack Web',
    year: '2024',
    overview:
      'Website yang dikembangkan atas permintaan pemilik usaha toko bangunan untuk menampilkan katalog material, informasi spesifikasi produk, dan mempermudah pelanggan memeriksa ketersediaan barang secara online.',
    role: 'Solo Developer (Freelance / Permintaan Klien)',
    achievements: [
      'Penyusunan modul katalog produk material bangunan beserta kategorisasi barang.',
      'Penghubungan antarmuka Next.js ke database Supabase untuk pembaruan data produk.',
      'Desain tampilan yang rapi dan mudah dinavigasi oleh pelanggan umum.',
    ],
    stack: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    repoLink: 'https://github.com/fikrihidyat25/nextjstokobangunan',
  },
  {
    id: 'sim-pkl',
    title: 'SIM-PKL (Sistem Informasi Magang / PKL)',
    subtitle: 'Sistem Administrasi Magang & Log Harian Mahasiswa',
    category: 'Full-Stack Web',
    year: '2024',
    overview:
      'Aplikasi web pengelolaan praktik kerja lapangan yang dikembangkan untuk mendukung kebutuhan sistem skripsi klien. Mencakup alur registrasi peserta, pencatatan logbook harian, dan evaluasi kegiatan magang.',
    role: 'Backend & Full-Stack Developer (Proyek Klien Skripsi)',
    achievements: [
      'Pembangunan alur pendaftaran, pencatatan jurnal harian, dan verifikasi berkas magang.',
      'Penerapan autentikasi dan pemisahan hak akses antara admin, pembimbing, dan mahasiswa.',
      'Struktur kode modular berbasis framework Laravel dengan database MySQL.',
    ],
    stack: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Bootstrap'],
    repoLink: 'https://github.com/fikrihidyat25/sim-pkl',
  },
  {
    id: 'flutter-laravel',
    title: 'Aplikasi Mobile & RESTful API Kominfo',
    subtitle: 'Aplikasi Mobile Flutter Terhubung Backend Laravel',
    category: 'Mobile & API',
    year: '2025',
    overview:
      'Proyek yang dikerjakan selama masa magang di Dinas Komunikasi dan Informatika (Kominfo). Mengembangkan antarmuka aplikasi mobile menggunakan Flutter yang terhubung dengan backend RESTful API berbasis Laravel.',
    role: 'Software Engineering Intern (Dinas Kominfo)',
    achievements: [
      'Pembangunan komponen antarmuka aplikasi mobile Flutter yang responsif dan konsisten.',
      'Integrasi endpoint RESTful API Laravel untuk pertukaran data secara terstruktur.',
      'Pengujian pengiriman parameter request dan parsing respons JSON menggunakan Postman.',
    ],
    stack: ['Flutter', 'Dart', 'Laravel API', 'RESTful API', 'Postman', 'MySQL'],
    repoLink: 'https://github.com/fikrihidyat25/flutter-laravel',
  },
  {
    id: 'trenblur',
    title: 'Tren Blur Foto (Image Processing Script)',
    subtitle: 'Tool Python untuk Efek Blur Foto Otomatis',
    category: 'Python & Script',
    year: '2024',
    overview:
      'Program Python sederhana untuk menerapkan efek blur otomatis pada foto dan gambar, terinspirasi dari tren efek visual di media sosial. Menggunakan teknik manipulasi citra digital dasar untuk menghasilkan gambar dengan gaya tertentu.',
    role: 'Creator & Developer',
    achievements: [
      'Automasi pemrosesan file gambar lokal dengan pustaka manipulasi citra Python.',
      'Pengaturan parameter tingkat keburaman (blur intensity) secara fleksibel.',
      'Eksplorasi script automasi ringan untuk kebutuhan pengolahan konten visual.',
    ],
    stack: ['Python', 'OpenCV / PIL', 'Image Processing', 'Automation Script'],
    repoLink: 'https://github.com/fikrihidyat25/trenblur',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Semua')

  const categories = ['Semua', 'Full-Stack Web', 'Mobile & API', 'Python & Script']

  const filteredProjects =
    activeCategory === 'Semua'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 border-t border-zinc-200/80 bg-white"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Portofolio Proyek
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Kumpulan proyek berbasis web, aplikasi mobile, dan script automasi nyata yang pernah saya kerjakan, baik proyek tim, magang di instansi, maupun pesanan klien.
            </p>
          </div>

          <a
            href="https://github.com/fikrihidyat25"
            target="_blank"
            rel="noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800 hover:text-brand transition py-2 px-1 self-start md:self-auto focus-visible:ring-2 focus-visible:ring-brand rounded-md"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Lihat Profil GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Filter Pills with min 44px tap targets */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2 overflow-x-auto pb-2.5 scrollbar-none touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition whitespace-nowrap border focus-visible:ring-2 focus-visible:ring-brand ${
                activeCategory === cat
                  ? 'bg-zinc-900 border-zinc-900 text-white shadow-sm'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/40 hover:bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">{project.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand mt-1">{project.subtitle}</p>

                <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/70 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-brand transition py-2 px-1 focus-visible:ring-2 focus-visible:ring-brand rounded-md"
                >
                  <Layers className="w-4 h-4 text-brand" />
                  <span>Rincian Fitur</span>
                </button>

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition py-2 px-2"
                  aria-label={`Buka repositori GitHub ${project.title}`}
                >
                  <span>Repositori</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Detail Proyek (Portaled to document.body for flawless mobile stacking & full-screen view) */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {selectedProject && (
                <div
                  className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
                  onClick={() => setSelectedProject(null)}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-title"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-7 shadow-2xl max-h-[90dvh] overflow-y-auto border border-zinc-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-4">
                      <div>
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-100 text-zinc-700">
                          {selectedProject.category}
                        </span>
                        <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-zinc-950 mt-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-0.5">Peran: {selectedProject.role}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="w-11 h-11 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition focus-visible:ring-2 focus-visible:ring-brand shrink-0"
                        aria-label="Tutup jendela rincian proyek"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-5 space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                          Deskripsi Proyek
                        </h4>
                        <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                          {selectedProject.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                          Cakupan Pekerjaan & Fitur
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
                          Teknologi yang Digunakan
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

                    <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="min-h-[44px] w-full sm:w-auto px-4 py-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition flex items-center justify-center"
                      >
                        Tutup
                      </button>
                      <a
                        href={selectedProject.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition"
                      >
                        <span>Buka Repositori GitHub</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  )
}

