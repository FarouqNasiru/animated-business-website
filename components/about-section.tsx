"use client"

import { useEffect, useRef } from "react"
import { Users, Award, Clock, Target } from "lucide-react"

export default function AboutSection() {
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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="about" className="about-section" ref={sectionRef}>
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <h2 className="about-title">Crafting Digital Excellence Since 2020</h2>
              <p className="about-description">
                We are a team of passionate developers, designers, and strategists dedicated to transforming ideas into
                powerful digital experiences. Our mission is to help businesses thrive in the digital age through
                innovative solutions and cutting-edge technology.
              </p>
              <p className="about-description">
                With years of experience and a portfolio of successful projects, we bring expertise, creativity, and
                dedication to every challenge. From startups to enterprise solutions, we scale our approach to meet your
                unique needs.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <Users className="feature-icon" size={24} />
                  <div>
                    <h4>Expert Team</h4>
                    <p>Skilled professionals with diverse expertise</p>
                  </div>
                </div>

                <div className="feature-item">
                  <Award className="feature-icon" size={24} />
                  <div>
                    <h4>Award Winning</h4>
                    <p>Recognized for excellence in digital innovation</p>
                  </div>
                </div>

                <div className="feature-item">
                  <Clock className="feature-icon" size={24} />
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock assistance for your projects</p>
                  </div>
                </div>

                <div className="feature-item">
                  <Target className="feature-icon" size={24} />
                  <div>
                    <h4>Goal Oriented</h4>
                    <p>Focused on delivering measurable results</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-visual animate-on-scroll">
              <div className="visual-container">
                <div className="rotating-element">
                  <div className="orbit orbit-1">
                    <div className="planet planet-1"></div>
                  </div>
                  <div className="orbit orbit-2">
                    <div className="planet planet-2"></div>
                  </div>
                  <div className="orbit orbit-3">
                    <div className="planet planet-3"></div>
                  </div>
                  <div className="center-core"></div>
                </div>

                <div className="floating-elements">
                  <div className="floating-dot dot-1"></div>
                  <div className="floating-dot dot-2"></div>
                  <div className="floating-dot dot-3"></div>
                  <div className="floating-dot dot-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-pattern">
          <div className="pattern-line line-1"></div>
          <div className="pattern-line line-2"></div>
          <div className="pattern-line line-3"></div>
        </div>
      </section>

      <style jsx>{`
        .about-section {
          padding: 8rem 0;
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

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text {
          color: white;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .about-text.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .about-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.2;
          background: linear-gradient(45deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .feature-icon {
          color: #ffd89b;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .feature-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .feature-item p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
        }

        .about-visual {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease 0.2s;
        }

        .about-visual.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .visual-container {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rotating-element {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .orbit {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-1 {
          width: 100%;
          height: 100%;
          animation: rotate 20s linear infinite;
        }

        .orbit-2 {
          width: 70%;
          height: 70%;
          animation: rotate 15s linear infinite reverse;
        }

        .orbit-3 {
          width: 40%;
          height: 40%;
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .planet {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, #ffd89b, #19547b);
        }

        .planet-1 {
          width: 20px;
          height: 20px;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          animation: planetGlow 3s ease-in-out infinite;
        }

        .planet-2 {
          width: 15px;
          height: 15px;
          top: -7.5px;
          left: 50%;
          transform: translateX(-50%);
          animation: planetGlow 2s ease-in-out infinite 1s;
        }

        .planet-3 {
          width: 12px;
          height: 12px;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          animation: planetGlow 2.5s ease-in-out infinite 0.5s;
        }

        @keyframes planetGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 216, 155, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 216, 155, 0.8); }
        }

        .center-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          border-radius: 50%;
          animation: coreGlow 4s ease-in-out infinite;
        }

        @keyframes coreGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(255, 107, 107, 0.8);
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: floatDot 6s ease-in-out infinite;
        }

        .dot-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .dot-2 {
          top: 30%;
          right: 15%;
          animation-delay: 2s;
        }

        .dot-3 {
          bottom: 25%;
          left: 20%;
          animation-delay: 4s;
        }

        .dot-4 {
          bottom: 35%;
          right: 25%;
          animation-delay: 1s;
        }

        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-20px); opacity: 1; }
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .pattern-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          height: 1px;
          animation: moveLine 8s ease-in-out infinite;
        }

        .line-1 {
          top: 20%;
          width: 100%;
          animation-delay: 0s;
        }

        .line-2 {
          top: 50%;
          width: 100%;
          animation-delay: 3s;
        }

        .line-3 {
          top: 80%;
          width: 100%;
          animation-delay: 6s;
        }

        @keyframes moveLine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .about-features {
            grid-template-columns: 1fr;
          }

          .visual-container {
            height: 300px;
          }

          .rotating-element {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </>
  )
}
