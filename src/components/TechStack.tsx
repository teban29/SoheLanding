import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import laravelLogo from "../media/img/Laravel.svg";
import fastApiLogo from "../media/img/FastAPI.svg";
import cloudFlareLogo from "../media/img/cloudflare-color.svg";

interface TechItem {
  name: string;
  image: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const techStack: TechCategory[] = [
  {
    title: "Lenguajes de Programación",
    items: [
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Bash", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Nuxt", image: "https://nuxt.com/assets/design-kit/icon-green.svg" },
      { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Laravel", image: laravelLogo },
      { name: "FastAPI", image: fastApiLogo },
      { name: "ElectronJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Oracle", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "SQL Server", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    title: "Proveedores Cloud",
    items: [
      { name: "AWS", image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
      { name: "Google Cloud Run", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Digital Ocean", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
      { name: "Cloudflare", image: cloudFlareLogo },
    ],
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="relative py-24 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#F6559A] uppercase">
            Nuestra Pila Tecnológica
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tecnologías de vanguardia que potencian nuestras soluciones
          </p>
        </div>

        <div className="space-y-16">
          {techStack.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-[#F6559A]">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:flex md:flex-wrap md:justify-center">
                {category.items.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="relative bg-white/5 dark:bg-white/15 backdrop-blur-xs border border-gray-200/20 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-40 h-40 flex flex-col items-center justify-center text-center"
                  >
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={100}
                      height={100}
                      isBlurred
                      className="object-contain h-16 w-16"
                    />

                    <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
