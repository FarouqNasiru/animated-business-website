"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: 150, suffix: "+", label: "Projects Completed", duration: 2000 },
  { number: 50, suffix: "+", label: "Happy Clients", duration: 1800 },
  { number: 5, suffix: "", label: "Years Experience", duration: 1500 },
  { number: 99, suffix: "%", label: "Success Rate", duration: 2200 },
]

function AnimatedCounter({ target, duration, suffix }: { target: number; duration: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <>
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}>
                <div className="stat-background"></div>
                <div className="stat-content">
                  <div className="stat-number">
                    <AnimatedCounter target={stat.number} duration={stat.duration} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="animated-background">
          <div className="bg-element element-1"></div>
          <div className="bg-element element-2"></div>
          <div className="bg-element element-3"></div>
          <div className="bg-element element-4"></div>
        </div>
      </section>

      <style jsx>{`
        .stats-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
          animation: slideInUp 0.8s ease-out var(--delay) both;
          overflow: hidden;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-item:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .stat-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stat-item:hover .stat-background {
          opacity: 1;
        }

        .stat-content {
          position: relative;
          z-index: 2;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: numberGlow 3s ease-in-out infinite;
        }

        @keyframes numberGlow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: pulse 4s ease-in-out infinite;
        }

        .stat-item:hover .stat-glow {
          opacity: 1;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .bg-element {
          position: absolute;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 50%;
          animation: floatElement 8s ease-in-out infinite;
        }

        .element-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 150px;
          height: 150px;
          top: 20%;
          right: 10%;
          animation-delay: 2s;
        }

        .element-3 {
          width: 80px;
          height: 80px;
          bottom: 30%;
          left: 15%;
          animation-delay: 4s;
        }

        .element-4 {
          width: 120px;
          height: 120px;
          bottom: 10%;
          right: 20%;
          animation-delay: 6s;
        }

        @keyframes floatElement {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 4rem 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-item {
            padding: 2rem 1.5rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
