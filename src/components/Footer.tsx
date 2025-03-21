import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-800 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/images/bakery_logo.svg"
                  alt="Croûte que Croûte"
                  width={60}
                  height={60}
                  className="mr-3 bg-amber-100 rounded-full p-1"
                />
                <span className="text-amber-100 font-bold text-xl">
                  Croûte que Croûte
                </span>
              </Link>
              <p className="mb-4 text-amber-200">
                Artisans boulangers depuis 1987, nous perpétuons la tradition du
                bon pain et des pâtisseries artisanales.
              </p>
            </motion.div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-amber-100">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-produits"
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    Nos Produits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos"
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-amber-100">
                Horaires
              </h3>
              <ul className="space-y-2 text-amber-200">
                <li>Lundi - Vendredi: 7h - 19h</li>
                <li>Samedi: 7h - 20h</li>
                <li>Dimanche: 7h - 13h</li>
              </ul>
            </motion.div>
          </div>

          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-amber-100">
                Contact
              </h3>
              <address className="not-italic text-amber-200 space-y-2">
                <p>123 Rue du Pain Frais</p>
                <p>75001 Paris, France</p>
                <p className="mt-4">+33 1 23 45 67 89</p>
                <p>contact@croutequecroute.fr</p>
              </address>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-12 pt-8 text-center text-amber-300">
          <p>&copy; {currentYear} Croûte que Croûte. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
