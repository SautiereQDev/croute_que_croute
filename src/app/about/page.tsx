"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import getAssetPath from "@/lib/assetPath";

const AboutPage = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
                Notre Histoire
              </h1>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
              <p className="text-amber-700 max-w-2xl mx-auto">
                Découvrez l&apos;histoire de notre boulangerie artisanale et les
                valeurs qui nous animent depuis plus de 35 ans.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-amber-100 p-6 rounded-lg shadow-md">
                    <Image
                      src={getAssetPath("/images/baker_hat.svg")}
                      alt="Fondation de la boulangerie"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded mb-4"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-amber-800 mb-4">
                    Nos Débuts en 1987
                  </h2>
                  <p className="text-amber-700 mb-4">
                    Fondée en 1987 par la famille Dupain, notre boulangerie est
                    née d&apos;une passion pour le pain authentique et les
                    traditions boulangères françaises. Dans un petit local du
                    quartier, Robert et Marie Dupain ont commencé à façonner
                    leurs premières baguettes, déterminés à offrir des produits
                    d&apos;exception à leurs clients.
                  </p>
                  <p className="text-amber-700">
                    Rapidement, la qualité de leurs créations a attiré une
                    clientèle fidèle, séduite par le goût incomparable de leurs
                    pains et viennoiseries. La réputation de la boulangerie
                    s&apos;est construite jour après jour, fournée après
                    fournée.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="order-2 md:order-1"
                >
                  <h2 className="text-2xl font-semibold text-amber-800 mb-4">
                    L&apos;Évolution et la Transmission
                  </h2>
                  <p className="text-amber-700 mb-4">
                    Au fil des années, la boulangerie s&apos;est agrandie et
                    modernisée, tout en préservant l&apos;essence de son
                    savoir-faire artisanal. En 2010, Thomas Dupain, fils des
                    fondateurs, a repris le flambeau avec la même passion et le
                    même engagement pour la qualité.
                  </p>
                  <p className="text-amber-700">
                    Formé aux techniques traditionnelles par ses parents et
                    enrichi d&apos;une formation auprès des meilleurs artisans
                    boulangers de France, Thomas a su apporter une touche de
                    modernité tout en respectant l&apos;héritage familial. Sous
                    sa direction, la gamme de produits s&apos;est diversifiée
                    pour répondre aux goûts et aux besoins d&apos;une clientèle
                    toujours plus exigeante.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="order-1 md:order-2"
                >
                  <div className="bg-amber-100 p-6 rounded-lg shadow-md">
                    <Image
                      src={getAssetPath("/images/wheat.svg")}
                      alt="Évolution de la boulangerie"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded mb-4"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-amber-100 p-8 rounded-lg shadow-md mb-16"
              >
                <h2 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
                  Nos Valeurs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-amber-800 mb-3">
                      Qualité
                    </h3>
                    <p className="text-amber-700">
                      Nous sélectionnons les meilleurs ingrédients et
                      n&apos;utilisons aucun additif artificiel. Chaque produit
                      est préparé avec soin pour garantir une qualité
                      irréprochable.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-amber-800 mb-3">
                      Authenticité
                    </h3>
                    <p className="text-amber-700">
                      Nous respectons les méthodes traditionnelles de
                      fabrication, avec des temps de fermentation longs et un
                      façonnage à la main, pour préserver le goût authentique de
                      nos créations.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-amber-800 mb-3">
                      Proximité
                    </h3>
                    <p className="text-amber-700">
                      Nous privilégions les circuits courts et les producteurs
                      locaux. Notre farine provient de moulins régionaux, nos
                      fruits et légumes sont issus de l&apos;agriculture locale.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h2 className="text-2xl font-semibold text-amber-800 mb-6">
                  Notre Équipe
                </h2>
                <p className="text-amber-700 max-w-2xl mx-auto mb-8">
                  Aujourd&apos;hui, notre équipe compte 12 passionnés qui se
                  lèvent chaque jour aux aurores pour vous proposer des produits
                  frais et savoureux. Boulangers, pâtissiers, vendeuses...
                  chacun contribue à faire de votre visite un moment de plaisir
                  et de gourmandise.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Thomas Dupain",
                      role: "Maître Boulanger",
                      image: "/images/baker_hat.svg",
                    },
                    {
                      name: "Sophie Martin",
                      role: "Chef Pâtissière",
                      image: "/images/oven.svg",
                    },
                    {
                      name: "Lucas Petit",
                      role: "Boulanger",
                      image: "/images/baguette.svg",
                    },
                    {
                      name: "Emma Leclerc",
                      role: "Responsable Vente",
                      image: "/images/wheat.svg",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div className="bg-amber-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-amber-800">
                        {member.name}
                      </h3>
                      <p className="text-amber-600">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
