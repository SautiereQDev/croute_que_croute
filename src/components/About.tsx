import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Pour l'effet de parallaxe
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Image de fond avec effet parallaxe */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-amber-800/10 z-10" />{" "}
        {/* Overlay pour améliorer la lisibilité du texte */}
        <Image
          src="/images/wheat.svg"
          alt="Fond de blé"
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <Image
                src="/images/baker_hat.svg"
                alt="Chapeau de boulanger"
                width={80}
                height={80}
                className="mx-auto bg-amber-50 p-3 rounded-full shadow-lg"
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-4 flex items-center">
                <span className="bg-amber-100 p-2 rounded-full mr-3 shadow-sm">
                  <Image
                    src="/images/bread.svg"
                    alt="Pain"
                    width={24}
                    height={24}
                  />
                </span>
                Tradition & Passion
              </h3>
              <p className="text-amber-700 mb-6">
                Fondée en 1987 par la famille Dupain, notre boulangerie perpétue
                un savoir-faire transmis de génération en génération. Chaque
                jour, nos artisans boulangers se lèvent aux aurores pour vous
                proposer des produits frais et savoureux.
              </p>
              <p className="text-amber-700">
                Notre secret ? Des ingrédients soigneusement sélectionnés, des
                recettes traditionnelles et beaucoup d&apos;amour dans chacune
                de nos créations. Nous travaillons avec des producteurs locaux
                pour vous garantir des produits de la plus haute qualité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-4 flex items-center">
                <span className="bg-amber-100 p-2 rounded-full mr-3 shadow-sm">
                  <Image
                    src="/images/tart.svg"
                    alt="Tarte"
                    width={24}
                    height={24}
                  />
                </span>
                Nos Valeurs
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3 bg-amber-50/80 p-3 rounded-lg shadow-sm mb-2 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-amber-600 text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <p className="text-amber-700">
                    <strong>Qualité</strong> - Nous sélectionnons les meilleurs
                    ingrédients et n&apos;utilisons aucun additif artificiel.
                  </p>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3 bg-amber-50/80 p-3 rounded-lg shadow-sm mb-2 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-amber-600 text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <p className="text-amber-700">
                    <strong>Authenticité</strong> - Nous respectons les méthodes
                    traditionnelles de fabrication.
                  </p>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3 bg-amber-50/80 p-3 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-amber-600 text-xl flex-shrink-0 mt-1">
                    •
                  </span>
                  <p className="text-amber-700">
                    <strong>Proximité</strong> - Nous privilégions les circuits
                    courts et les producteurs locaux.
                  </p>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
