
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  featured: boolean;
  stock: number;
};

export type Category = {
  id: string;
  name: string;
};
