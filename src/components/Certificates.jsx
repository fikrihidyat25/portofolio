import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MoreVertical, X, Eye, ExternalLink, Download } from 'lucide-react'

const certificatesData = [
  {
    id: 'mediatama-web-design',
    fileName: 'MEDIATAMA.pdf',
    previewImage: '/sertifikat-previews/MEDIATAMA.webp',
    title: 'Pelatihan Kerja Kejuruan: Web Design',
    issuer: 'LPK Mediatama Web Indonesia',
    credentialId: '015/SPK/LPK/MWI/IX/2026',
    dateText: 'Anda membukanya • 16 Sep',
    year: '2026',
    category: 'Web & Backend',
    description:
      'Pelatihan kerja intensif 25 hari kerja kejuruan Web Design berstandar Kemnaker RI, mencakup implementasi antarmuka pengguna, struktur data, pemrograman terstruktur, dan debugging.',
  },
  {
    id: 'ms-fabric-ai',
    fileName: 'ONLFDLSC4C.pdf',
    previewImage: '/sertifikat-previews/ONLFDLSC4C.webp',
    title: 'Model AI Terpadu di Microsoft Fabric',
    issuer: 'Microsoft Elevate × Dicoding',
    credentialId: 'ONLFDLSC4C',
    dateText: 'Anda membukanya • 11 Agu',
    year: '2024',
    category: 'AI & Data',
    description:
      'Short course intensif penerapan model kecerdasan buatan terpadu pada ekosistem Microsoft Fabric.',
    verifyUrl: 'https://www.dicoding.com/elevate/certificates/ONLFDLSC4C',
  },
  {
    id: 'aws-cloud-genai',
    fileName: 'sertifikat_course_251_2223923_110725193330.pdf',
    previewImage: '/sertifikat-previews/sertifikat_course_251_2223923_110725193330.webp',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia × AWS',
    credentialId: '72ZDKQ43LPYW',
    dateText: 'Anda membukanya • 11 Jul',
    year: '2024',
    category: 'AI & Data',
    description:
      'Fondasi arsitektur cloud computing dan pemanfaatan generative AI pada infrastruktur Amazon Web Services.',
    verifyUrl: 'https://www.dicoding.com/certificates/72ZDKQ43LPYW',
  },
  {
    id: 'backend-javascript',
    fileName: 'sertifikat_course_261_2223923_191225155227.pdf',
    previewImage: '/sertifikat-previews/sertifikat_course_261_2223923_191225155227.webp',
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    credentialId: '1RXYQV2JKZVM',
    dateText: 'Anda membukanya • 19 Des',
    year: '2024',
    category: 'Web & Backend',
    description:
      'Membangun RESTful API dengan Node.js, pengelolaan routing, database, dan arsitektur backend JavaScript.',
    verifyUrl: 'https://www.dicoding.com/certificates/1RXYQV2JKZVM',
  },
  {
    id: 'spec-driven-dev',
    fileName: 'sertifikat_course_929_2223923_240526204511.pdf',
    previewImage: '/sertifikat-previews/sertifikat_course_929_2223923_240526204511.webp',
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    credentialId: 'N9ZONL4Q0XG5',
    dateText: 'Anda membukanya • 24 Mei',
    year: '2024',
    category: 'Web & Backend',
    description:
      'Pengembangan software berbasis spesifikasi terarah, pengujian kode, dan pemodelan alur kerja sistem modern.',
    verifyUrl: 'https://www.dicoding.com/certificates/N9ZONL4Q0XG5',
  },
  {
    id: 'cisco-cybersecurity',
    fileName: 'Introduction_to_Cybersecurity_certificate_fikrihidayat2712-gmail-com_07cd5935-c45a-42b8-9b60-d8042e1ad064.pdf',
    previewImage:
      '/sertifikat-previews/Introduction_to_Cybersecurity_certificate_fikrihidayat2712-gmail-com_07cd5935-c45a-42b8-9b60-d8042e1ad064.webp',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    credentialId: 'CISCO-CS-2024/FIKRI',
    dateText: 'Anda membukanya • 7 Mar',
    year: '2024',
    category: 'Cybersecurity & Jaringan',
    description:
      'Dasar keamanan siber, mitigasi ancaman jaringan, perlindungan data, dan prinsip pertahanan sistem informasi.',
  },
  {
    id: 'prakerin-tkj-mtn',
    fileName: 'Nomor 002 MtN - Umum (lV 12021.pdf',
    previewImage: '/sertifikat-previews/Nomor 002 MtN - Umum (lV 12021.webp',
    title: 'Praktik Kerja Industri (PRAKERIN) - TKJ',
    issuer: 'PT Media Tekno Nusantara × SMKN 6 Padang',
    credentialId: '002/MTN-Umum/IV/2021',
    dateText: 'Anda membukanya • 5 Apr',
    year: '2021',
    category: 'Cybersecurity & Jaringan',
    description:
      'Praktik kerja industri Teknik Komputer dan Jaringan: instalasi sistem operasi, perakitan dan troubleshooting PC, serta instalasi dan penanganan kendala jaringan komputer.',
  },
  {
    id: 'bnsp-network-admin',
    fileName: 'sertifikasi jaringan.pdf',
    previewImage: '/sertifikat-previews/sertifikasi jaringan.webp',
    title: 'Sertifikasi Kompetensi: Network Administrator',
    issuer: 'BNSP × LSP SMKN 6 Padang',
    credentialId: '62090 2523 2 001178 2022',
    dateText: 'Anda membukanya • 8 Jun',
    year: '2022',
    category: 'Cybersecurity & Jaringan',
    description:
      'Sertifikat kompetensi resmi Badan Nasional Sertifikasi Profesi (BNSP) kualifikasi Network Administrator pada Klaster Instalasi Jaringan Komputer Berbasis Kabel (KKNI Level II).',
  },
  {
    id: 'data-visualization',
    fileName: 'sertifikat_course_177_2223923_300524192132.pdf',
    previewImage: '/sertifikat-previews/sertifikat_course_177_2223923_300524192132.webp',
    title: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Indonesia',
    credentialId: 'RVZKRRV7EPD5',
    dateText: 'Anda membukanya • 30 Mei',
    year: '2024',
    category: 'AI & Data',
    description:
      'Pengolahan data mentah, eksplorasi pola visual, dan penyajian grafik data yang komunikatif.',
    verifyUrl: 'https://www.dicoding.com/certificates/RVZKRRV7EPD5',
  },
  {
    id: 'juara-vibecoding',
    fileName: 'Fikri Hidayat_Certificate.pdf',
    previewImage: '/sertifikat-previews/Fikri Hidayat_Certificate.webp',
    title: 'Certificate of Completion: #JuaraVibeCoding',
    issuer: 'JuaraVibeCoding Program',
    credentialId: 'JVC-COMP/2024/FIKRI',
    dateText: 'Anda membukanya • 27 Jun',
    year: '2024',
    category: 'Web & Backend',
    description:
      'Eksplorasi pengembangan aplikasi modern dan pemanfaatan assistive coding tools.',
    verifyUrl: 'https://certificate-verifier-1023611269119.asia-southeast1.run.app/',
  },
  {
    id: 'dqlab-ai-1',
    fileName: 'certificate-DQLABAI001FOTAGR.pdf',
    previewImage: '/sertifikat-previews/certificate-DQLABAI001FOTAGR.webp',
    title: 'Fundamental Artificial Intelligence',
    issuer: 'DQLab',
    credentialId: 'DQLABAI001FOTAGR',
    dateText: 'Anda membukanya • 19 Jan',
    year: '2024',
    category: 'AI & Data',
    description:
      'Konsep sistem kecerdasan buatan, logika algoritma data, dan implementasi machine learning praktis.',
  },
  {
    id: 'dqlab-ai-3',
    fileName: 'certificate-DQLABAI003VAGJCV.pdf',
    previewImage: '/sertifikat-previews/certificate-DQLABAI003VAGJCV.webp',
    title: 'Generative AI & Data Application',
    issuer: 'DQLab',
    credentialId: 'DQLABAI003VAGJCV',
    dateText: 'Anda membukanya • 14 Jan',
    year: '2024',
    category: 'AI & Data',
    description:
      'Penerapan modul generative AI untuk automasi tugas dan pemrosesan informasi berbasis data.',
  },
  {
    id: 'dqlab-python',
    fileName: 'certificate-DQLABINTP1KFBJUO.pdf',
    previewImage: '/sertifikat-previews/certificate-DQLABINTP1KFBJUO.webp',
    title: 'Introduction to Programming: Python',
    issuer: 'DQLab',
    credentialId: 'DQLABINTP1KFBJUO',
    dateText: 'Anda membukanya • 19 Jan',
    year: '2024',
    category: 'AI & Data',
    description:
      'Dasar pemrograman Python, struktur data, pengkondisian logika, dan manipulasi data komputasi.',
  },
  {
    id: 'bolean-itp',
    fileName: 'Sertifikat Bolean - Fikri Hidayat.pdf',
    previewImage: '/sertifikat-previews/Sertifikat Bolean - Fikri Hidayat.webp',
    title: 'Sertifikat Bolean Informatika ITP',
    issuer: 'HIMATIF Institut Teknologi Padang',
    credentialId: '001/A/PAN-PEL/Bolean/IX/2024',
    dateText: 'Anda membukanya • 13 Jan',
    year: '2024',
    category: 'Kampus & Organisasi',
    description:
      'Bimbingan Orientasi Lapangan dan Akademik Tahunan Himpunan Mahasiswa Teknik Informatika ITP.',
  },
  {
    id: 'startup-1000',
    fileName: 'certificate_1201695743534_131815.pdf',
    previewImage: '/sertifikat-previews/certificate_1201695743534_131815.webp',
    title: 'Roadshow 1000 Startup Digital x ITP',
    issuer: 'Kemenkominfo & ITP',
    credentialId: '1000STARTUP/ITP/2023',
    dateText: 'Anda membukanya • 30 Sep',
    year: '2023',
    category: 'Kampus & Organisasi',
    description:
      'Program inisiasi perintisan produk digital, validasi ide masalah, dan ekosistem startup teknologi.',
  },
  {
    id: 'itp-2025',
    fileName: '20250923152039Sertifikat Fikri Hidayat ITP 2025.pdf',
    previewImage: '/sertifikat-previews/20250923152039Sertifikat Fikri Hidayat ITP 2025.webp',
    title: 'Sertifikat Kegiatan Kemahasiswaan ITP',
    issuer: 'Institut Teknologi Padang',
    credentialId: 'ITP/SERTIFIKAT/2025',
    dateText: 'Anda membukanya • 23 Sep',
    year: '2025',
    category: 'Kampus & Organisasi',
    description:
      'Partisipasi dalam agenda akademik dan pengembangan mahasiswa Teknik Informatika ITP.',
  },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Semua')

  const categories = [
    'Semua',
    'AI & Data',
    'Web & Backend',
    'Cybersecurity & Jaringan',
    'Kampus & Organisasi',
  ]

  const filteredCerts =
    activeCategory === 'Semua'
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 border-t border-zinc-200/80 bg-zinc-50/60"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Sertifikasi & Kredensial
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Arsip sertifikat pelatihan resmi, kompetensi software engineering, dan kegiatan akademik. Klik berkas untuk melihat pratinjau dokumen asli atau mengunduh PDF.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-zinc-900 border-zinc-900 text-white shadow-sm'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={index * 40}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="px-3.5 pt-3.5 pb-2.5 flex items-center justify-between gap-2 border-b border-zinc-100">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="shrink-0 px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] leading-tight tracking-tight">
                    PDF
                  </div>
                  <span
                    className="text-xs sm:text-sm font-semibold text-zinc-800 truncate group-hover:text-zinc-950"
                    title={cert.fileName}
                  >
                    {cert.fileName}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`Opsi untuk ${cert.fileName}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedCert(cert)
                  }}
                  className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition shrink-0"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Real Certificate Preview Snapshot */}
              <div className="relative p-3 bg-zinc-100/70 group-hover:bg-zinc-100 transition-colors flex items-center justify-center min-h-[175px]">
                <div className="w-full max-w-[240px] aspect-[1.414/1] bg-white rounded-md shadow-sm border border-zinc-200/80 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center">
                  <img
                    src={cert.previewImage}
                    alt={`Pratinjau sertifikat ${cert.title}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-lg bg-zinc-900/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Pratinjau</span>
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs text-zinc-500 bg-white">
                <div className="flex items-center gap-2 min-w-0">
                  <img
                    src="/profile.jpeg"
                    alt="Fikri Hidayat"
                    className="w-5 h-5 rounded-full object-cover border border-zinc-200 shrink-0"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span className="truncate text-[11px] text-zinc-600 font-medium">
                    {cert.dateText}
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 shrink-0">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Google Drive Document Viewer Modal (Rendered via Portal to body) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-zinc-950/85 backdrop-blur-sm"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col"
                >
                  <div className="px-4 sm:px-6 py-3.5 bg-zinc-900 text-white flex items-center justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-xs tracking-tight">
                        PDF
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm truncate text-white">
                          {selectedCert.fileName}
                        </h3>
                        <p className="text-[11px] text-zinc-400 truncate">
                          {selectedCert.issuer} • {selectedCert.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={encodeURI(`/sertifikat/${selectedCert.fileName}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Buka PDF</span>
                      </a>
                      <button
                        onClick={() => setSelectedCert(null)}
                        aria-label="Tutup pratinjau"
                        className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Real Certificate Image View in Modal */}
                  <div className="p-3 sm:p-5 overflow-y-auto bg-zinc-100 flex flex-col items-center gap-3">
                    <div className="w-full bg-white rounded-xl shadow-sm border border-zinc-200 p-2 sm:p-3 flex items-center justify-center">
                      <img
                        src={selectedCert.previewImage}
                        alt={selectedCert.title}
                        className="max-w-full max-h-[46vh] sm:max-h-[48vh] object-contain block rounded"
                      />
                    </div>

                    {/* Details Footer Bar inside Modal */}
                    <div className="w-full bg-white rounded-xl border border-zinc-200 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-zinc-900 leading-snug">{selectedCert.title}</h4>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          {selectedCert.issuer} • Tahun {selectedCert.year} • ID: {selectedCert.credentialId}
                        </p>
                        <p className="text-xs text-zinc-600 mt-1 max-w-xl">{selectedCert.description}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                        {selectedCert.verifyUrl && (
                          <a
                            href={selectedCert.verifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="min-h-[40px] flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Verifikasi</span>
                          </a>
                        )}
                        <a
                          href={encodeURI(`/sertifikat/${selectedCert.fileName}`)}
                          download={selectedCert.fileName}
                          className="min-h-[40px] flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Unduh PDF</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-3 bg-white border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600 shrink-0">
                    <span className="hidden sm:inline-block">
                      Tekan <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-300 font-mono text-[10px]">ESC</kbd> untuk menutup
                    </span>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="min-h-[40px] ml-auto px-5 py-2 rounded-xl bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 transition"
                    >
                      Tutup Pratinjau
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  )
}
