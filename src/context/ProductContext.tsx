
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";
import { Product, Category } from '@/types';
import { defaultProducts } from '@/data/products';

type ProductContextType = {
  products: Product[];
  categories: Category[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  getProductById: (productId: string) => Product | undefined;
  getProductsByCategory: (categoryId: string) => Product[];
  getFeaturedProducts: () => Product[];
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });

  const [categories] = useState<Category[]>([
    { id: 'cat-3d-prints', name: '3D Prints' },
    { id: 'cat-led-lights', name: 'LED Lights' },
    { id: 'cat-diffusers', name: 'Diffusers' },
    { id: 'cat-detectors', name: 'Presence Detectors' }
  ]);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    // Generate a simple UUID
    const id = 'prod-' + Math.random().toString(36).substring(2, 15);
    const newProduct = { ...product, id };
    
    setProducts(prevProducts => [...prevProducts, newProduct]);
    toast.success(`Added ${product.name} to products!`);
    return newProduct;
  };

  const updateProduct = (product: Product) => {
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === product.id ? product : p
      )
    );
    toast.success(`Updated ${product.name}!`);
  };

  const deleteProduct = (productId: string) => {
    setProducts(prevProducts => {
      const productToDelete = prevProducts.find(p => p.id === productId);
      const newProducts = prevProducts.filter(p => p.id !== productId);
      
      if (productToDelete) {
        toast.info(`Removed ${productToDelete.name}`);
      }
      
      return newProducts;
    });
  };

  const getProductById = (productId: string) => {
    return products.find(p => p.id === productId);
  };

  const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.categoryId === categoryId);
  };

  const getFeaturedProducts = () => {
    return products.filter(p => p.featured);
  };

  const value = {
    products,
    categories,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductsByCategory,
    getFeaturedProducts
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
