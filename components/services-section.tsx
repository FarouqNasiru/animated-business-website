"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Code, Smartphone, Globe, Zap, Shield, BarChart } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    color: "#667eea",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    color: "#764ba2",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description:
      "Comprehensive digital transformation strategies tailored to your business objectives and market needs.",
    color: "#f093fb",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast loading times and seamless user interactions through advanced optimization techniques.",
    color: "#f5576c",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security implementations to protect your digital assets and user data.",
    color: "#4facfe",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Data-driven insights and analytics solutions to help you make informed business decisions.",
    color: "#43e97b",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const cards = sectionRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="services" className="services-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions designed to elevate your business to new heights
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{ "--delay": `${index * 0.1}s`, "--color": service.color } as React.CSSProperties}
              >
                <div className="card-background"></div>
                <div className="card-content">
                  <div className="service-icon">
                    <service.icon size={32} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="card-hover-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      <style jsx>{`
        .services-section {
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(50px);
          overflow: hidden;
        }

        .service-card.animate-in {
          animation: slideInUp 0.8s ease-out var(--delay) forwards;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--color), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover .card-background {
          opacity: 0.1;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--color), rgba(255, 255, 255, 0.1));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }

        .service-card:hover .service-icon::before {
          opacity: 1;
          animation: shimmer 1.5s ease-in-out;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-title {
          color: var(--color);
        }

        .service-description {
          color: #718096;
          line-height: 1.6;
          font-size: 1rem;
        }

        .card-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .service-card:hover .card-hover-effect {
          left: 100%;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          animation: floatShape 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: 3s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 70%;
          animation-delay: 6s;
        }

        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  )
}
