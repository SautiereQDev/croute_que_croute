import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
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
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                Nos Valeurs
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-amber-700">
                    <strong>Qualité</strong> - Nous sélectionnons les meilleurs
                    ingrédients et n&apos;utilisons aucun additif artificiel.
                  </p>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-amber-700">
                    <strong>Authenticité</strong> - Nous respectons les méthodes
                    traditionnelles de fabrication.
                  </p>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-amber-600 text-xl">•</span>
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
