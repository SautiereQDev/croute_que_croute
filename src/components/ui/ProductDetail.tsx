"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/global";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetail({
  product,
  isOpen,
  onClose,
}: ProductDetailProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-amber-50 to-white p-0 rounded-xl border-amber-200 shadow-lg">
        <DialogHeader className="p-6 pb-0 border-b border-amber-100">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-amber-800 tracking-tight">
              {product.name}
            </DialogTitle>
            <DialogClose className="text-amber-600 hover:text-amber-800 transition-colors rounded-full hover:bg-amber-100 p-1" />
          </div>
        </DialogHeader>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3">
              <AspectRatio ratio={1 / 1} className="bg-muted overflow-hidden">
                <Image
                  src={
                    "https://cdn.quentinsautiere.com/croute_que_croute/" +
                    product.image
                  }
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </AspectRatio>
            </div>

            <div className="md:w-2/3">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-amber-600">
                  {product.price.toFixed(2)} €
                </span>
                <Badge
                  variant="outline"
                  className={`${
                    product.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.available ? "Disponible" : "Indisponible"}
                </Badge>
              </div>
              <p className="text-amber-700 mb-4">{product.description}</p>
            </div>
          </div>

          <Separator className="my-6 bg-amber-200" />

          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-3">
              Détails du produit
            </h3>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-amber-50">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-amber-200"
                >
                  Détails
                </TabsTrigger>
                <TabsTrigger
                  value="ingredients"
                  className="data-[state=active]:bg-amber-200"
                >
                  Ingrédients
                </TabsTrigger>
                <TabsTrigger
                  value="nutrition"
                  className="data-[state=active]:bg-amber-200"
                >
                  Nutrition
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-0">
                <Card className="border-amber-100 shadow-sm bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    {product.allergens && (
                      <div className="mb-4">
                        <h4 className="font-medium text-amber-700 mb-2">
                          Allergènes :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.allergens.map((allergen, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-red-50 text-red-700 hover:bg-red-100"
                            >
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {product.ingredients && (
                <TabsContent value="ingredients" className="mt-0">
                  <Card className="border-amber-100 shadow-sm bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.ingredients.map((ingredient, index) => (
                          <li
                            key={index}
                            className="flex items-center text-amber-700"
                          >
                            <span className="h-2 w-2 rounded-full bg-amber-400 mr-2"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {product.nutritionalInfo && (
                <TabsContent value="nutrition" className="mt-0">
                  <Card className="border-amber-100 shadow-sm bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg text-center shadow-sm"
                        >
                          <p className="text-amber-800 font-bold text-lg">
                            {product.nutritionalInfo.calories}
                          </p>
                          <p className="text-amber-600 text-sm">Calories</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg text-center shadow-sm"
                        >
                          <p className="text-amber-800 font-bold text-lg">
                            {product.nutritionalInfo.proteins}g
                          </p>
                          <p className="text-amber-600 text-sm">Protéines</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg text-center shadow-sm"
                        >
                          <p className="text-amber-800 font-bold text-lg">
                            {product.nutritionalInfo.carbs}g
                          </p>
                          <p className="text-amber-600 text-sm">Glucides</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg text-center shadow-sm"
                        >
                          <p className="text-amber-800 font-bold text-lg">
                            {product.nutritionalInfo.fats}g
                          </p>
                          <p className="text-amber-600 text-sm">Lipides</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
