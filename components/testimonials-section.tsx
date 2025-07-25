"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Working with TechFlow transformed our digital presence completely. Their innovative approach and attention to detail exceeded all our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    content:
      "The team's expertise in modern web technologies is outstanding. They delivered a scalable solution that perfectly fits our business needs.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content:
      "Exceptional service and remarkable results. Our website performance improved by 300% after their optimization work.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
      <section className="testimonials-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Don't just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="testimonials-container animate-on-scroll">
            <div className="testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-card ${index === currentIndex ? "active" : ""}`}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  <div className="card-background"></div>
                  <div className="quote-icon">
                    <Quote size={40} />
                  </div>

                  <div className="testimonial-content">
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="star" />
                      ))}
                    </div>

                    <p className="testimonial-text">"{testimonial.content}"</p>

                    <div className="testimonial-author">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="author-avatar"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`control-dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="floating-quotes">
          <div className="floating-quote quote-1">"</div>
          <div className="floating-quote quote-2">"</div>
          <div className="floating-quote quote-3">"</div>
        </div>
      </section>

      <style jsx>{`
        .testimonials-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
          color: #2d3748;
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
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #718096;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonials-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease 0.2s;
        }

        .testimonials-container.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonials-slider {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-card {
          position: absolute;
          width: 100%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 3rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: translateX(100px) scale(0.8);
          transition: all 0.6s ease;
          overflow: hidden;
        }

        .testimonial-card.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .testimonial-card:hover .card-background {
          opacity: 1;
        }

        .quote-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: rgba(102, 126, 234, 0.2);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .testimonial-content {
          position: relative;
          z-index: 2;
        }

        .stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
          justify-content: center;
        }

        .star {
          color: #ffd700;
          fill: #ffd700;
          animation: starTwinkle 2s ease-in-out infinite;
        }

        .star:nth-child(1) { animation-delay: 0s; }
        .star:nth-child(2) { animation-delay: 0.2s; }
        .star:nth-child(3) { animation-delay: 0.4s; }
        .star:nth-child(4) { animation-delay: 0.6s; }
        .star:nth-child(5) { animation-delay: 0.8s; }

        @keyframes starTwinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .testimonial-text {
          font-size: 1.3rem;
          line-height: 1.6;
          color: #2d3748;
          margin-bottom: 2rem;
          text-align: center;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .author-avatar {
          border-color: rgba(102, 126, 234, 0.6);
          transform: scale(1.05);
        }

        .author-info {
          text-align: left;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.25rem;
        }

        .author-role {
          font-size: 0.9rem;
          color: #718096;
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
        }

        .control-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(102, 126, 234, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-dot.active {
          background: #667eea;
          transform: scale(1.2);
        }

        .control-dot:hover {
          background: #667eea;
          transform: scale(1.1);
        }

        .floating-quotes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-quote {
          position: absolute;
          font-size: 8rem;
          font-weight: 800;
          color: rgba(102, 126, 234, 0.05);
          font-family: serif;
          animation: floatQuote 8s ease-in-out infinite;
        }

        .quote-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .quote-2 {
          top: 60%;
          right: 10%;
          animation-delay: 3s;
        }

        .quote-3 {
          bottom: 20%;
          left: 60%;
          animation-delay: 6s;
        }

        @keyframes floatQuote {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.1;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .testimonial-card {
            padding: 2rem;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }

          .quote-icon {
            top: 1rem;
            right: 1rem;
          }

          .floating-quote {
            font-size: 4rem;
          }
        }
      `}</style>
    </>
  )
}
