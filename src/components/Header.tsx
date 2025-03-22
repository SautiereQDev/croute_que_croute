import getAssetPath from "@/lib/assetPath";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Utiliser useEffect pour s&apos;assurer que le composant est monté côté client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="py-4 px-4 md:px-6 bg-amber-50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <Image
                src={getAssetPath("/images/bakery_logo.svg")}
                alt="Croûte que Croûte"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="text-amber-800 font-bold text-xl md:text-2xl">
                Croûte que Croûte
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a
              href="/"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              Accueil
            </motion.a>
            <motion.a
              href="/nos-produits"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              Nos Produits
            </motion.a>
            <motion.a
              href="/a-propos"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              À Propos
            </motion.a>
            <motion.a
              href="/#contact"
              className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-amber-800 focus:outline-none"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation - Rendu conditionnel uniquement côté client */}
        {isMounted && isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 py-4 bg-amber-100 rounded-lg"
            initial="closed"
            animate="open"
            variants={menuVariants}
          >
            <ul className="flex flex-col space-y-3 px-4">
              <motion.li variants={menuItemVariants}>
                <Link
                  href="/"
                  className="text-amber-800 hover:text-amber-600 font-medium block py-2 px-4 hover:bg-amber-200 rounded transition-colors"
                  onClick={toggleMenu}
                >
                  Accueil
                </Link>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <a
                  href="/nos-produits"
                  className="text-amber-800 hover:text-amber-600 font-medium block py-2 px-4 hover:bg-amber-200 rounded transition-colors"
                  onClick={toggleMenu}
                >
                  Nos Produits
                </a>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <a
                  href="/a-propos"
                  className="text-amber-800 hover:text-amber-600 font-medium block py-2 px-4 hover:bg-amber-200 rounded transition-colors"
                  onClick={toggleMenu}
                >
                  À Propos
                </a>
              </motion.li>
              <motion.li variants={menuItemVariants}>
                <Link
                  href="/#contact"
                  className="text-amber-800 hover:text-amber-600 font-medium block py-2 px-4 hover:bg-amber-200 rounded transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
