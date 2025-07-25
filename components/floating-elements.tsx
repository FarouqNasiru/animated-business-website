"use client"

export default function FloatingElements() {
  return (
    <>
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
        <div className="floating-element element-5"></div>
        <div className="floating-element element-6"></div>
      </div>

      <style jsx>{`
        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 50%;
          animation: floatAround 20s ease-in-out infinite;
        }

        .element-1 {
          width: 60px;
          height: 60px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
          animation-duration: 25s;
        }

        .element-2 {
          width: 40px;
          height: 40px;
          top: 20%;
          right: 10%;
          animation-delay: 5s;
          animation-duration: 30s;
        }

        .element-3 {
          width: 80px;
          height: 80px;
          top: 60%;
          left: 15%;
          animation-delay: 10s;
          animation-duration: 35s;
        }

        .element-4 {
          width: 50px;
          height: 50px;
          bottom: 30%;
          right: 20%;
          animation-delay: 15s;
          animation-duration: 28s;
        }

        .element-5 {
          width: 70px;
          height: 70px;
          bottom: 10%;
          left: 60%;
          animation-delay: 20s;
          animation-duration: 32s;
        }

        .element-6 {
          width: 35px;
          height: 35px;
          top: 40%;
          right: 5%;
          animation-delay: 8s;
          animation-duration: 26s;
        }

        @keyframes floatAround {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-40px) translateX(10px) rotate(270deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  )
}
