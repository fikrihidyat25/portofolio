import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Wrench, Users } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Web & Mobile Coding',
    desc: 'Pengembangan aplikasi web full-stack dan antarmuka aplikasi mobile dengan struktur kode yang terkelola.',
    items: [
      { name: 'PHP & Laravel', note: 'Backend Logic & RESTful API' },
      { name: 'React.js', note: 'Komponen Antarmuka Web' },
      { name: 'TypeScript & JavaScript', note: 'Frontend Logic & Tipifikasi' },
      { name: 'Dart & Flutter', note: 'Aplikasi Mobile Multiplatform' },
    ],
  },
  {
    icon: Server,
    title: 'Sistem & Infrastruktur Jaringan',
    desc: 'Pengaturan jaringan lokal, diagnosis perangkat keras, serta deployment aplikasi ke cloud platform.',
    items: [
      { name: 'Mikrotik RouterOS', note: 'Routing & Bandwidth Management' },
      { name: 'Infrastruktur LAN', note: 'Instalasi & Troubleshooting Jaringan' },
      { name: 'Database MySQL', note: 'Perancangan Relasi & Query Data' },
      { name: 'Google Cloud Run & Vercel', note: 'Deployment & Hosting Modern' },
    ],
  },
  {
    icon: Wrench,
    title: 'Workflow & Alat Kerja',
    desc: 'Alur kerja mulai dari perancangan antarmuka, version control, hingga pengujian fungsionalitas software.',
    items: [
      { name: 'Wireframing & Prototyping', note: 'Perancangan Konsep & Alur UI' },
      { name: 'Figma & UI Tools', note: 'Eksplorasi Struktur & Desain Layar' },
      { name: 'Black-box Testing', note: 'Validasi Fungsionalitas Software' },
      { name: 'Git & GitHub', note: 'Version Control & Kolaborasi Kode' },
    ],
  },
  {
    icon: Users,
    title: 'Kolaborasi & Nilai Tim',
    desc: 'Kerja sama yang solid dan komunikasi yang baik untuk menyelesaikan proyek secara efektif.',
    items: [
      { name: 'Komunikasi Terbuka', note: 'Penyampaian Ide yang Jelas & Terarah' },
      { name: 'Kerja Sama Tim', note: 'Koordinasi & Eksekusi Tugas Bersama' },
      { name: 'Terbuka terhadap Evaluasi', note: 'Menerima & Menerapkan Feedback' },
      { name: 'Adaptasi Cepat', note: 'Kemampuan Mempelajari Teknologi Baru' },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 border-t border-zinc-200/80 bg-white"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Kompetensi Teknis & Soft Skills
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
            Dikelompokkan sesuai pengalaman akademik di ITP, SMK TKJ, magang Kominfo, dan proyek riil tanpa angka statistik buatan.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/40 p-5 sm:p-7 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-zinc-950">{group.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-5 sm:mb-6 leading-relaxed">
                    {group.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {group.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-3 rounded-xl border border-zinc-200/80 bg-white"
                      >
                        <p className="font-bold text-xs sm:text-sm text-zinc-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

