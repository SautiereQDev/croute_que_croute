import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
  const heroRef = useRef<HTMLDivElement>(null);

  // Pour l'effet de parallaxe
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Image de fond avec effet parallaxe */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-black/30 z-10" />{" "}
        {/* Overlay pour améliorer la lisibilité du texte */}
        <Image
          src="/images/boulangerie.jpg"
          alt="Boulangerie Croûte que Croûte"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Animated background elements - Rendu uniquement côté client */}
      <div className="absolute inset-0 overflow-hidden z-10">
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

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-20">
        <motion.div
          className="text-center mb-12 backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Image
              src="/images/bakery_logo.svg"
              alt="Croûte que Croûte Logo"
              width={100}
              height={100}
              className="mx-auto bg-white rounded-full p-2 shadow-lg"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bienvenue chez <br />
            <span className="text-amber-300">Croûte que Croûte</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
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
              className="px-8 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir nos produits
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full font-medium hover:bg-white/30 transition-all shadow-lg hover:shadow-white/20 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center transform transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full shadow-inner">
                  <Image
                    src="/images/baguette.svg"
                    alt="Pain frais"
                    width={60}
                    height={60}
                    className="transform transition-all duration-300 hover:rotate-6"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Pain Frais
              </h3>
              <p className="text-amber-700">
                Pétri et cuit chaque jour pour une fraîcheur incomparable.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center transform transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full shadow-inner">
                  <Image
                    src="/images/croissant.svg"
                    alt="Viennoiseries"
                    width={60}
                    height={60}
                    className="transform transition-all duration-300 hover:rotate-6"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Viennoiseries
              </h3>
              <p className="text-amber-700">
                Feuilletées et dorées, pour un petit-déjeuner gourmand.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center transform transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full shadow-inner">
                  <Image
                    src="/images/cake.svg"
                    alt="Pâtisseries"
                    width={60}
                    height={60}
                    className="transform transition-all duration-300 hover:rotate-6"
                  />
                </div>
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
