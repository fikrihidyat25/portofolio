import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="font-extrabold text-base tracking-tight text-zinc-950">
            Fikri Hidayat
          </a>
          <p className="text-xs text-zinc-500 mt-1">
            Portofolio Mahasiswa Teknik Informatika ITP
          </p>
          <p className="text-xs text-zinc-400 mt-0.5">
            © {new Date().getFullYear()} Fikri Hidayat. Hak cipta dilindungi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-zinc-600">
          <a
            href="https://github.com/fikrihidyat25"
            target="_blank"
            rel="noreferrer"
            className="min-h-[44px] flex items-center gap-1.5 hover:text-zinc-950 transition p-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/fikri-hidayat-092070368/"
            target="_blank"
            rel="noreferrer"
            className="min-h-[44px] flex items-center gap-1.5 hover:text-zinc-950 transition p-1"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:fikrihidayat2712@gmail.com"
            className="min-h-[44px] flex items-center gap-1.5 hover:text-zinc-950 transition p-1"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <a
            href="#"
            className="min-h-[44px] inline-flex items-center gap-1 text-xs text-brand font-semibold hover:underline p-1"
            aria-label="Kembali ke atas halaman"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Ke Atas</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
