import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PlansSection from "../components/PlansSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import NavigationDots from "../components/NavigationDots";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <NavigationDots sections={["Inicio", "Características", "Planes", "Testimonios", "FAQ", "Contacto"]} />
      <section id="hero" className="snap-start h-screen flex items-center justify-center">
        <HeroSection />
      </section>
      <section id="features" className="snap-start h-screen flex items-center justify-center">
        <FeaturesSection />
      </section>
      <section id="plans" className="snap-start h-screen flex items-center justify-center">
        <PlansSection />
      </section>
      <section id="testimonials" className="snap-start h-screen flex items-center justify-center">
        <TestimonialsSection />
      </section>
      <section id="faq" className="snap-start h-screen flex items-center justify-center">
        <FAQSection />
      </section>
      <section id="contact" className="snap-start h-screen flex items-center justify-center">
        <ContactSection />
      </section>
    </div>
  );
}
