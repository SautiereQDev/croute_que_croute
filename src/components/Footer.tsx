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
                <a href="https://www.google.com/maps/place/123+Rue+au+Pain,+78100+Saint-Germain-en-Laye/@48.8977239,2.0882104,17z/data=!3m1!4b1!4m9!1m2!2m1!1s123+Rue+du+Pain+Frais!3m5!1s0x47e6882c49c8d495:0x609881d35ef5ca4e!8m2!3d48.897724!4d2.0930813!15sChUxMjMgUnVlIGR1IFBhaW4gRnJhaXOSARBnZW9jb2RlZF9hZGRyZXNz4AEA?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D">
                  123 Rue du Pain Frais
                </a>
                <p>75001 Paris, France</p>
                <a href="tel:+33123456789" className="mt-4">
                  +33 1 23 45 67 89
                </a>
                <br />
                <a href="mailto:contact@croutequecroute.fr">
                  contact@croutequecroute.fr
                </a>
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
