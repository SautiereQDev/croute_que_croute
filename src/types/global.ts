export type ProductCategory = "pain" | "viennoiserie" | "patisserie";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  available: boolean;
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
    calories: number;
    proteins: number;
    carbs: number;
    fats: number;
  };
}
