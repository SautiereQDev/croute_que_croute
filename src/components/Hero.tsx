import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Définition de l&apos;interface pour les bulles
interface Bubble {
  width: number;
  height: number;
  top: number;
  left: number;
  yOffset: number;
}

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Générer les bulles uniquement côté client pour éviter les problèmes d&apos;hydratation
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 5; i++) {
        newBubbles.push({
          width: Math.random() * 200 + 50,
          height: Math.random() * 200 + 50,
          top: Math.random() * 100,
          left: Math.random() * 100,
          yOffset: Math.random() * 100 - 50,
        });
      }
      setBubbles(newBubbles);
      setIsMounted(true);
    };

    generateBubbles();
  }, []);
  return (
    <section
      id="accueil"
      className="relative min-h-screen bg-amber-50 overflow-hidden"
    >
      {/* Animated background elements - Rendu uniquement côté client */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted &&
          bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-200 opacity-20"
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                top: `${bubble.top}%`,
                left: `${bubble.left}%`,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1, 1.1, 1],
                rotate: [0, 90],
                y: [0, bubble.yOffset],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            Bienvenue chez <br />
            <span className="text-amber-600">Croûte que Croûte</span>
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto mb-8">
            Artisans boulangers depuis 1987, nous perpétuons la tradition du bon
            pain et des pâtisseries artisanales.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="#nos-produits"
              className="px-8 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir nos produits
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-600 rounded-full font-medium hover:bg-amber-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/baguette.svg"
                  alt="Pain frais"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Pain Frais
              </h3>
              <p className="text-amber-700">
                Pétri et cuit chaque jour pour une fraîcheur incomparable.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/croissant.svg"
                  alt="Viennoiseries"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Viennoiseries
              </h3>
              <p className="text-amber-700">
                Feuilletées et dorées, pour un petit-déjeuner gourmand.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/oven.svg"
                  alt="Pâtisseries"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Pâtisseries
              </h3>
              <p className="text-amber-700">
                Créations artisanales pour tous vos moments de plaisir.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
