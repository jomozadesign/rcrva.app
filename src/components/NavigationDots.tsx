/**
 * NavigationDots
 * Propósito: Menú de navegación vertical tipo dots para la landing de rcrva.
 * Entrada: sections: string[] (nombres de las secciones).
 * Salida: JSX.Element con los dots y navegación scroll a cada sección.
 * Ejemplo de uso: <NavigationDots sections={["Inicio", "Características", ...]} />
 */
import { useState } from "react";

interface NavigationDotsProps {
  sections: string[];
}

export default function NavigationDots({ sections }: NavigationDotsProps) {
  const [active, setActive] = useState(0);

  // Sincroniza el dot activo con el scroll
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const sectionIds = ["hero", "features", "plans", "testimonials", "faq", "contact"];
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(i);
            break;
          }
        }
      }
    };
  }

  const handleClick = (idx: number) => {
    const sectionIds = ["hero", "features", "plans", "testimonials", "faq", "contact"];
    const el = document.getElementById(sectionIds[idx]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, idx) => (
        <button
          key={section}
          aria-label={section}
          className={`w-4 h-4 rounded-full border-2 border-blue-700 transition bg-white ${active === idx ? "bg-blue-700" : "bg-white"}`}
          onClick={() => handleClick(idx)}
        />
      ))}
    </nav>
  );
} 