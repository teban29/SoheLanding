import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {Textarea} from "@heroui/input";

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#F6559A] uppercase mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Contacta con Nosotros
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Hablemos sobre cómo podemos ayudarle a transformar su negocio.
          </motion.p>
        </div>

        {/* Formulario */}
        <motion.div
          className="mt-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <form className="grid grid-cols-1 gap-6">
            <div>
              <Input
                variant="bordered"
                type="text"
                label="Nombre"
                isRequired
                placeholder="Tu Nombre"
                size="lg"
                />
            </div>

            <div>
              <Input
                variant="bordered"
                type="email"
                label="Correo Electrónico"
                isRequired
                placeholder="Tu Correo Electrónico"
                size="lg"
                />
            </div>

            <div>
                <Textarea
                label="Mensaje"
                isRequired
                placeholder="Tu Mensaje"
                variant="bordered"
                rows={5}
                size="lg"
                />
            </div>

            <div>
              <Button
                type="submit"
                variant="shadow"
                size="lg"
                radius="full"
                className="w-full bg-[#F6559A] hover:bg-pink-600 text-white shadow-lg shadow-[#F6559A]/50">
                Enviar Mensaje
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
