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
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-amber-800">
              {product.name}
            </DialogTitle>
            <DialogClose className="text-amber-600 hover:text-amber-800 transition-colors" />
          </div>
        </DialogHeader>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3">
              <div className="bg-amber-100 p-4 rounded-lg">
                <AspectRatio ratio={1 / 1} className="bg-muted overflow-hidden">
                  <Image
                    src={
                      "https://cdn.quentinsautiere.com/croute_que_croute/" +
                      product.image
                    }
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
              </div>
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

            {product.ingredients && (
              <div className="mb-4">
                <h4 className="font-medium text-amber-700 mb-2">
                  Ingrédients :
                </h4>
                <ul className="list-disc list-inside text-amber-600 pl-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

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

            {product.nutritionalInfo && (
              <div>
                <h4 className="font-medium text-amber-700 mb-2">
                  Informations nutritionnelles :
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                    <p className="text-amber-800 font-bold">
                      {product.nutritionalInfo.calories}
                    </p>
                    <p className="text-amber-600 text-sm">Calories</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                    <p className="text-amber-800 font-bold">
                      {product.nutritionalInfo.proteins}g
                    </p>
                    <p className="text-amber-600 text-sm">Protéines</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                    <p className="text-amber-800 font-bold">
                      {product.nutritionalInfo.carbs}g
                    </p>
                    <p className="text-amber-600 text-sm">Glucides</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-center">
                    <p className="text-amber-800 font-bold">
                      {product.nutritionalInfo.fats}g
                    </p>
                    <p className="text-amber-600 text-sm">Lipides</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
