import AnimatedHero from "@/components/animated-hero"
import AnimatedNavbar from "@/components/animated-navbar"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <FloatingElements />
      <AnimatedNavbar />
      <AnimatedHero />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
