import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_52lkgym'
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mwcenhb'
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'yP_HfFyjDVtRWmq6d'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Dhaneera',
        },
        PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, text: '22cds0407@ms.sab.ac.lk', href: 'mailto:22cds0407@ms.sab.ac.lk' },
    { icon: FaPhone, text: '+94 77 286 5536', href: 'tel:+94772865536' },
    { icon: FaMapMarkerAlt, text: 'Colombo, Sri Lanka', href: '#' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dhaneera-dulvanya/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/DhaneeraDulvanya', label: 'GitHub' },
  ]

  return (
    <section id="contact" className="snap-start section-container bg-slate-950/10 dark:bg-slate-900/70">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel p-10">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
            I’m excited to collaborate on projects that combine data, AI, and polished design. Whether you have a creative idea or want to talk about a technical challenge, I’m happy to connect.
          </p>
          <div className="mt-10 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 rounded-3xl border border-slate-200/70 bg-white/80 px-5 py-4 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800/70 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:text-cyan-300"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300">
                    <Icon size={20} />
                  </span>
                  <span>{info.text}</span>
                </a>
              )
            })}
          </div>
          <div className="mt-10 flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-700 transition hover:bg-cyan-600 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-cyan-500"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="glass-panel p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                placeholder="Tell me about your project..."
              />
            </div>
            {submitStatus.type && (
              <div className={`rounded-3xl p-4 ${submitStatus.type === 'success' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200' : 'bg-rose-100 text-rose-800 dark:bg-rose-900/80 dark:text-rose-200'}`}>
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-3xl bg-cyan-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact


