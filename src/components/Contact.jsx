import { useState } from 'react'
import { FaArrowRight, FaExternalLinkAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const emailJsConfig = {
  serviceId: 'service_ena07yv',
  templateId: 'template_mwcenhb',
  publicKey: 'yP_HfFyjDVtRWmq6d',
}

const contactLinks = [
  { icon: FaEnvelope, eyebrow: 'Write me an email', label: 'dhaneeradulvanya0407@gmail.com', href: 'mailto:dhaneeradulvanya0407@gmail.com' },
  { icon: FaGithub, eyebrow: 'Follow my work', label: 'GitHub', href: 'https://github.com/DhaneeraDulvanya' },
  { icon: FaLinkedin, eyebrow: 'Let’s connect', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhaneera-dulvanya/' },
]

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const isConfigured = Object.values(emailJsConfig).every(
      (value) => value && !value.startsWith('YOUR_EMAILJS_'),
    )
    if (!isConfigured) {
      setStatus({
        type: 'error',
        message: 'The form is not configured yet. Please email me directly at 22cds0407@ms.sab.ac.lk.',
      })
      return
    }

    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const result = await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        form,
        { publicKey: emailJsConfig.publicKey },
      )
      if (result.status !== 200) {
        throw new Error(`EmailJS returned status ${result.status}.`)
      }
      form.reset()
      setStatus({ type: 'success', message: 'Your message has been sent. Thank you for getting in touch!' })
    } catch (error) {
      console.error('Unable to send portfolio contact form.', error)
      setStatus({
        type: 'error',
        message: 'Your message could not be sent. Please try again or email me directly at 22cds0407@ms.sab.ac.lk.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container section contact-section" aria-labelledby="contact-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Start a conversation <span>05</span></p>
        <h2 id="contact-title">Let’s build something <span>meaningful.</span></h2>
      </div>
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <p>I’d love to hear about internship opportunities, interesting data science projects or a collaboration that could make an idea real.</p>
          {contactLinks.map(({ icon: Icon, eyebrow, label, href }) => (
            <a className="contact-method" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="contact-method-icon"><Icon aria-hidden="true" /></span>
              <span><small>{eyebrow}</small><strong>{label}</strong></span>
              {href.startsWith('http') && <FaExternalLinkAlt className="contact-arrow" aria-hidden="true" />}
            </a>
          ))}
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="from_name" type="text" autoComplete="name" placeholder="Jane Smith" minLength="2" maxLength="100" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="from_email" type="email" autoComplete="email" placeholder="jane@example.com" maxLength="254" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" maxLength="150" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" minLength="10" maxLength="5000" placeholder="A little about what you have in mind..." required />
          </div>
          <button className="button button-primary submit-button" type="submit" disabled={isLoading}>
            <span>{isLoading ? 'Sending…' : 'Send message'}</span><FaArrowRight aria-hidden="true" />
          </button>
          {status.message && <p className="form-status" data-state={status.type} role="status" aria-live="polite">{status.message}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
