import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setFeedbackMsg('Mohon isi nama, email, dan pesan Anda dengan lengkap.')
      return
    }

    // Construct mailto link
    const subject = encodeURIComponent(
      formData.subject || `Pesan Portofolio dari ${formData.name}`
    )
    const body = encodeURIComponent(
      `Nama Pengirim: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )
    window.location.href = `mailto:fikrihidayat2712@gmail.com?subject=${subject}&body=${body}`

    setStatus('success')
    setFeedbackMsg('Aplikasi email Anda telah dibuka. Anda juga dapat menghubungi langsung melalui WhatsApp.')
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-zinc-200/80 bg-white"
      data-aos="fade-up"
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Kontak & Kolaborasi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Terbuka untuk diskusi proyek rekayasa perangkat lunak, peluang magang, kolaborasi tim, maupun kesempatan program Apple Developer Academy.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Cards */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-card">
              <h3 className="font-bold text-base text-zinc-950 mb-4">
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:fikrihidayat2712@gmail.com"
                  className="min-h-[44px] flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200 hover:border-brand transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Email Utama</p>
                    <p className="text-sm font-bold text-zinc-900 group-hover:text-brand transition-colors">
                      fikrihidayat2712@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6282387337572"
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200 hover:border-brand transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">WhatsApp / Telepon</p>
                    <p className="text-sm font-bold text-zinc-900 group-hover:text-brand transition-colors">
                      +62 823-8733-7572
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 text-zinc-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Lokasi Domisili</p>
                    <p className="text-sm font-bold text-zinc-900">
                      Padang, Sumatera Barat, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-200/80">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  Profil Media Sosial
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://linkedin.com/in/fikri-hidayat-092070368/"
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold transition"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a
                    href="https://github.com/fikrihidyat25"
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold transition"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a
                    href="https://instagram.com/nikcfikri0"
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold transition"
                  >
                    <span>Instagram (@nikcfikri0)</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-card">
              <h3 className="font-bold text-lg text-zinc-950 mb-1">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mb-6">
                Formulir ini akan meneruskan draft ke email resmi saya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Subjek Diskusi
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Diskusi Proyek Web / Peluang Kolaborasi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Isi Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan kebutuhan atau pertanyaan Anda di sini..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                    {feedbackMsg}
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm transition shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim via Email</span>
                  </button>

                  <a
                    href="https://wa.me/6282387337572"
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-800 font-medium text-sm transition focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <MessageSquare className="w-4 h-4 text-brand" />
                    <span>Kirim Pesan WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
