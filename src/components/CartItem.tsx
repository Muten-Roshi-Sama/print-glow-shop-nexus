
import React from 'react';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

type CartItemProps = {
  product: Product;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      updateQuantity(product.id, quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border rounded-lg mb-4 bg-white shadow-sm">
      <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-4">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-brand-purple font-bold">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border rounded-md mr-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="h-8 w-8"
          >
            <MinusCircle className="h-4 w-4" />
          </Button>
          
          <span className="px-2">{quantity}</span>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
            className="h-8 w-8"
          >
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 h-8 w-8"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-auto flex items-center mt-4 sm:mt-0">
        <span className="font-semibold">
          ${(product.price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
