"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Play } from "lucide-react"

export default function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div
          className="mouse-follower"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
          }}
        ></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Transform Your</span>
              <span className="title-line">Digital Future</span>
              <span className="title-line">With Innovation</span>
            </h1>

            <p className="hero-description">
              We create cutting-edge digital solutions that drive growth, enhance user experience, and revolutionize the
              way you do business.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started
                <ArrowRight className="btn-icon" size={20} />
              </button>

              <button className="btn-secondary">
                <Play className="btn-icon" size={20} />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <div className="card-text">Fast Performance</div>
              </div>
            </div>

            <div className="floating-card card-2">
              <div className="card-content">
                <div className="card-icon">💡</div>
                <div className="card-text">Smart Solutions</div>
              </div>
            </div>

            <div className="floating-card card-3">
              <div className="card-content">
                <div className="card-icon">🎯</div>
                <div className="card-text">Targeted Results</div>
              </div>
            </div>

            <div className="central-element">
              <div className="rotating-ring ring-1"></div>
              <div className="rotating-ring ring-2"></div>
              <div className="rotating-ring ring-3"></div>
              <div className="center-dot"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <div className="scroll-text">Scroll to explore</div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.15);
          top: 60%;
          right: 20%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: rgba(255, 255, 255, 0.1);
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .mouse-follower {
          position: fixed;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
          backdrop-filter: blur(5px);
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }

        .title-line {
          display: block;
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .title-line:nth-child(1) { animation-delay: 0.2s; }
        .title-line:nth-child(2) { animation-delay: 0.4s; }
        .title-line:nth-child(3) { animation-delay: 0.6s; }

        .gradient-text {
          background: linear-gradient(45deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(90deg); }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 2rem;
          animation: fadeIn 1s ease-out 0.8s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          animation: slideInUp 0.8s ease-out 1s forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          color: white;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 107, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        .hero-visual {
          position: relative;
          height: 500px;
          animation: fadeIn 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          animation: floatCard 4s ease-in-out infinite;
        }

        .card-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 20%;
          right: 10%;
          animation-delay: 1.5s;
        }

        .card-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 3s;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: white;
        }

        .card-icon {
          font-size: 2rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .card-text {
          font-weight: 600;
        }

        .central-element {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
        }

        .rotating-ring {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: rgba(255, 255, 255, 0.8);
        }

        .ring-1 {
          width: 100%;
          height: 100%;
          animation: rotate 10s linear infinite;
        }

        .ring-2 {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          animation: rotate 8s linear infinite reverse;
        }

        .ring-3 {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          animation: rotate 6s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .center-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #ffd89b, #19547b);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.7);
          animation: fadeIn 1s ease-out 1.5s forwards;
          opacity: 0;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.7));
          animation: scrollLine 2s ease-in-out infinite;
        }

        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }

        .scroll-text {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
            padding-top: 7rem; // Added extra padding for mobile view
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-visual {
            height: 300px;
          }

          .floating-card {
            padding: 1rem;
          }

          .card-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}
