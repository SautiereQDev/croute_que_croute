"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import { Product, ProductCategory } from "@/types/global";
import products from "@/data/produits";

const ProductsPage = () => {
  // État pour filtrer les produits par catégorie
  const categories: { id: ProductCategory | "all"; name: string }[] = [
    { id: "all", name: "Tous les produits" },
    { id: "pain", name: "Pains" },
    { id: "viennoiserie", name: "Viennoiseries" },
    { id: "patisserie", name: "Pâtisseries" },
  ];

  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>(
    "all"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtrer les produits en fonction de la catégorie sélectionnée
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Fonction pour afficher les détails d&apos;un produit
  const showProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  // Fonction pour fermer la modal des détails
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

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
                Nos Délicieuses Créations
              </h1>
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
              animate="visible"
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
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  whileHover={{ y: -5 }}
                  onClick={() => showProductDetails(product)}
                >
                  <div className="p-4 flex justify-center bg-amber-100">
                    <Image
                      src={
                        "https://cdn.quentinsautiere.com/croute_que_croute/" +
                        product.image
                      }
                      alt={product.name}
                      width={120}
                      height={120}
                      className="object-contain h-32"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-amber-800">
                        {product.name}
                      </h3>
                      <span className="font-bold text-amber-600">
                        {product.price.toFixed(2)} €
                      </span>
                    </div>
                    <p className="text-amber-700 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          product.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.available ? "Disponible" : "Indisponible"}
                      </span>
                      <button
                        className="text-amber-600 hover:text-amber-800 font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          showProductDetails(product);
                        }}
                      >
                        Voir détails
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Modal pour les détails du produit */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-amber-800">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={closeProductDetails}
                    className="text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 bg-amber-100 p-4 rounded-lg flex items-center justify-center">
                    <Image
                      src={
                        "https://cdn.quentinsautiere.com/croute_que_croute/" +
                        selectedProduct.image
                      }
                      alt={selectedProduct.name}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-amber-600">
                        {selectedProduct.price.toFixed(2)} €
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          selectedProduct.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {selectedProduct.available
                          ? "Disponible"
                          : "Indisponible"}
                      </span>
                    </div>
                    <p className="text-amber-700 mb-4">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-amber-200 pt-6">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">
                    Détails du produit
                  </h3>

                  {selectedProduct.ingredients && (
                    <div className="mb-4">
                      <h4 className="font-medium text-amber-700 mb-2">
                        Ingrédients :
                      </h4>
                      <ul className="list-disc list-inside text-amber-600 pl-2">
                        {selectedProduct.ingredients.map(
                          (ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {selectedProduct.allergens && (
                    <div className="mb-4">
                      <h4 className="font-medium text-amber-700 mb-2">
                        Allergènes :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.allergens.map((allergen, index) => (
                          <span
                            key={index}
                            className="bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs"
                          >
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProduct.nutritionalInfo && (
                    <div>
                      <h4 className="font-medium text-amber-700 mb-2">
                        Informations nutritionnelles :
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-amber-50 p-3 rounded-lg text-center">
                          <p className="text-amber-800 font-bold">
                            {selectedProduct.nutritionalInfo.calories}
                          </p>
                          <p className="text-amber-600 text-sm">Calories</p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg text-center">
                          <p className="text-amber-800 font-bold">
                            {selectedProduct.nutritionalInfo.proteins}g
                          </p>
                          <p className="text-amber-600 text-sm">Protéines</p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg text-center">
                          <p className="text-amber-800 font-bold">
                            {selectedProduct.nutritionalInfo.carbs}g
                          </p>
                          <p className="text-amber-600 text-sm">Glucides</p>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg text-center">
                          <p className="text-amber-800 font-bold">
                            {selectedProduct.nutritionalInfo.fats}g
                          </p>
                          <p className="text-amber-600 text-sm">Lipides</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
