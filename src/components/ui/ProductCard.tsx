"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/global";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      whileHover={{ y: -5 }}
    >
      <Card
        className="h-full overflow-hidden border-amber-200 bg-white hover:shadow-lg transition-all duration-300 max-w-xs mx-auto"
        onClick={() => onClick(product)}
      >
        <CardHeader className="p-0">
          <div className="bg-amber-100 p-2">
            <AspectRatio ratio={4 / 3} className="bg-muted overflow-hidden">
              <Image
                src={
                  "https://cdn.quentinsautiere.com/croute_que_croute/" +
                  product.image
                }
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-2 pb-1">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-amber-800 line-clamp-1">
              {product.name}
            </h3>
            <span className="font-bold text-amber-600 text-xs">
              {product.price.toFixed(2)} €
            </span>
          </div>
          <p className="text-amber-700 mb-1 line-clamp-1 text-sm">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-2 pt-0 flex justify-between items-center">
          <Badge
            variant="outline"
            className={`text-sm py-1 px-2 h-5 ${
              product.available
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-red-100 text-red-800 hover:bg-red-200"
            }`}
          >
            {product.available ? "Disponible" : "Indisponible"}
          </Badge>
          <Button
            variant="ghost"
            size="default"
            className="text-amber-600 hover:text-amber-800 hover:bg-amber-100 font-medium text-xs px-2 py-0 h-5"
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
          >
            Voir détails
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
