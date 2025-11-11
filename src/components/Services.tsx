import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  Cog8ToothIcon,
  CubeTransparentIcon,
  CpuChipIcon,
  ArrowsRightLeftIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export const Services = () => {
  const services = [
    {
      title: "Desarrollo de Software Personalizado",
      description:
        "Creamos soluciones únicas impulsadas por IA que se adaptan a las necesidades específicas de tu negocio.",
      icon: CodeBracketIcon,
    },
    {
      title: "Soluciones de Automatización",
      description:
        "Optimizamos tus flujos de trabajo con automatización inteligente basada en aprendizaje automático.",
      icon: Cog8ToothIcon,
    },
    {
      title: "Desarrollo en Odoo",
      description:
        "Implementamos módulos e integraciones personalizadas potenciadas con inteligencia artificial.",
      icon: CubeTransparentIcon,
    },
    {
      title: "Agentes de IA",
      description:
        "Diseñamos agentes inteligentes que automatizan tareas, analizan información y mejoran decisiones empresariales.",
      icon: CpuChipIcon,
    },
    {
      title: "Integración de Sistemas",
      description:
        "Conectamos tus sistemas y plataformas garantizando flujos de datos eficientes y procesos optimizados.",
      icon: ArrowsRightLeftIcon,
    },
    {
      title: "Consultoría Tecnológica",
      description:
        "Brindamos asesoría experta en estrategia digital, innovación y adopción de tecnologías emergentes.",
      icon: LightBulbIcon,
    },
  ];

  return (
    <section className="relative py-2 text-gray-800 dark:text-gray-200 overflow-hidden" id="services">
      <div className="container mx-auto px-6 py-8 md:px-8 text-center relative z-10">
        {/* Encabezado */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-3 text-[#F6559A] uppercase"
        >
          Nuestros Servicios
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-16"
        >
          Soluciones integrales impulsadas por inteligencia artificial
        </motion.p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-xs border border-gray-200/20 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#F6559A]/10 rounded-xl mb-4">
                  <service.icon className="h-10 w-10 text-[#F6559A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F6559A]">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
