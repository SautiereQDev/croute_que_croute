import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: "pain" | "viennoiserie" | "patisserie";
};

const products: Product[] = [
  {
    id: 1,
    name: "Pain de Campagne",
    description:
      "Notre pain traditionnel à la mie dense et au goût authentique.",
    image: "/images/bread.svg",
    category: "pain",
  },
  {
    id: 2,
    name: "Croissant au Beurre",
    description:
      "Viennoiserie feuilletée au bon goût de beurre, croustillante à l&apos;extérieur et moelleuse à l&apos;intérieur.",
    image: "/images/croissant.svg",
    category: "viennoiserie",
  },
  {
    id: 3,
    name: "Tarte aux Fruits",
    description:
      "Pâte sablée garnie de crème pâtissière et de fruits frais de saison.",
    image: "/images/tart.svg",
    category: "patisserie",
  },
  {
    id: 4,
    name: "Baguette Tradition",
    description: "La classique baguette française, croustillante et dorée.",
    image: "/images/bread.svg",
    category: "pain",
  },
  {
    id: 5,
    name: "Pain au Chocolat",
    description: "Viennoiserie feuilletée garnie de bâtons de chocolat noir.",
    image: "/images/croissant.svg",
    category: "viennoiserie",
  },
  {
    id: 6,
    name: "Éclair au Café",
    description: "Pâte à choux garnie de crème au café et glacée.",
    image: "/images/cake.svg",
    category: "patisserie",
  },
];

const ProductsSection = () => {
  const categories = [
    { id: "all", name: "Tous les produits" },
    { id: "pain", name: "Pains" },
    { id: "viennoiserie", name: "Viennoiseries" },
    { id: "patisserie", name: "Pâtisseries" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="nos-produits" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Nos Délicieuses Créations
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Découvrez notre sélection de produits faits maison avec des
            ingrédients de qualité et beaucoup d&apos;amour.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white"
                    : "bg-amber-200 text-amber-800 hover:bg-amber-300"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="p-4 flex justify-center bg-amber-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={120}
                  className="object-contain h-32"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-amber-700">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
