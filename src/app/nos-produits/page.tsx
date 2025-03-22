"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Product, ProductCategory } from "@/types/global";
import products from "@/data/produits";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductDetail } from "@/components/ui/ProductDetail";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  // Fonction pour afficher les détails d'un produit
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
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => setActiveCategory(category.id)}
                      variant={
                        activeCategory === category.id ? "default" : "outline"
                      }
                      className={`rounded-full transition-colors ${
                        activeCategory === category.id
                          ? "bg-amber-600 text-white hover:bg-amber-700"
                          : "bg-amber-200 text-amber-800 hover:bg-amber-300 border-amber-300"
                      }`}
                    >
                      {category.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10"
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
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={showProductDetails}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Composant de détail du produit */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={closeProductDetails}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
