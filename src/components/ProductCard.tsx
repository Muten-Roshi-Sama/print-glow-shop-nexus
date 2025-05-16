
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card group animate-fade-in">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.featured && (
            <span className="absolute top-2 right-2 bg-brand-orange text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg mb-1 text-gray-800">{product.name}</h3>
          <p className="text-brand-purple font-bold mb-2">${product.price.toFixed(2)}</p>
          
          <div className="flex justify-between items-center mt-4">
            <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
            
            <Button 
              variant="outline" 
              size="sm"
              className="text-brand-blue hover:text-white hover:bg-brand-blue"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
