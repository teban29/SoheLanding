import { motion } from "framer-motion";
import { CpuChipIcon, CheckIcon, UsersIcon } from "@heroicons/react/24/outline";

export const About = () => {
  const features = [
    {
      title: "Innovación Imparable",
      description:
        "Nos destacamos por nuestra capacidad para abrazar y aplicar las últimas tendencias tecnológicas, asegurando que nuestros clientes estén siempre un paso adelante en el mundo digital en constante evolución.",
      icon: CpuChipIcon,
    },
    {
      title: "Transformación Digital",
      description:
        "Nuestra misión es facilitar la transformación digital de su negocio, garantizando soluciones que aborden los desafíos actuales y anticipen las necesidades futuras.",
      icon: CheckIcon,
    },
    {
      title: "Equipo de Expertos Apasionados",
      description:
        "Nuestra fuerza radica en la diversidad de habilidades y perspectivas, trabajando juntos para ofrecer soluciones tecnológicas de calidad que impulsan el progreso y la innovación.",
      icon: UsersIcon,
    },
  ];

  return (
    <section id="about" className="relative py-24 text-gray-800 overflow-hidden">

      <div className="relative container mx-auto px-6 md:px-8 z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text dark: text-[#F6559A] uppercase">
            Acerca de
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Su socio estratégico en tecnología e innovación
          </p>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Features */}
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-white/5 backdrop-blur-xs border border-gray-200/20 dark:border-gray-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-xl">
                    <feature.icon className="h-6 w-6 text-[#F6559A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-[#F6559A]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-left">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white/5 backdrop-blur-xs rounded-2xl p-10 shadow-xl border border-gray-200/20 dark:border-gray-700/40 h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-[#F6559A] mb-6">
              ¿Por qué elegirnos?
            </h3>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 text-left">
              <p>
                En Sohe Solutions, nos dedicamos a ofrecer soluciones tecnológicas integrales que abarcan desde el desarrollo de software personalizado hasta la implementación de sistemas de inteligencia artificial.
              </p>
              <p>
                Nuestro equipo de expertos trabaja de cerca con cada cliente, entendiendo sus objetivos únicos y diseñando estrategias que impulsan el crecimiento, la eficiencia y la innovación.
              </p>
              <p>
                Elegir Sohe Solutions significa optar por un socio tecnológico comprometido con su éxito, guiándolo hacia el futuro digital con confianza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
