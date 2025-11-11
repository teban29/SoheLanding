import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import React from "react";


export const Hero = () => {
  const handleScroll = (
    e: React.MouseEvent<Element, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1); // Remove the '#'
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById("main-navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 72; // Default height if navbar not found

    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center h-96 w-full text-center overflow-hidden">
      {/* Contenido principal */}
      <motion.div
        className="relative z-10 px-6 md:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight uppercase">
          Transformando desafíos en{" "}
          <span className="text-[#F6559A]">Innovación</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Potencie su negocio con soluciones de software de vanguardia,
          automatización e integración de IA.
        </p>

        <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
          <Button
            variant="shadow"
            size="lg"
            radius="full"
            className="bg-[#F6559A] hover:bg-pink-600 hover:transition-all text-white shadow-lg shadow-[#F6559A]/50">
            Contáctenos
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};
