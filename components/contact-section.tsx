"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="contact" className="contact-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>hello@techflow.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h3>Visit Us</h3>
                  <p>123 Tech Street, Digital City, DC 12345</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container animate-on-scroll">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitted}>
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">TechFlow</span>
            </div>
            <p className="footer-text">© 2024 TechFlow. All rights reserved. Crafted with ❤️ for the digital future.</p>
          </div>
        </footer>
      </section>

      <style jsx>{`
        .contact-section {
          padding: 8rem 0 0 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .section-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(45deg, #ffd89b, #19547b);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .contact-info.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .info-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #ffd89b, #19547b);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          animation: iconGlow 3s ease-in-out infinite;
        }

        @keyframes iconGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 216, 155, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 216, 155, 0.6); }
        }

        .info-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .info-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .contact-form-container {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease 0.2s;
        }

        .contact-form-container.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(255, 216, 155, 0.5);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 20px rgba(255, 216, 155, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .submit-btn:disabled {
          background: linear-gradient(45deg, #4ade80, #22c55e);
          cursor: not-allowed;
        }

        .footer {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .logo-text {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0 0 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .info-card {
            padding: 1.5rem;
          }

          .contact-form {
            padding: 2rem;
          }

          .info-icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </>
  )
}
