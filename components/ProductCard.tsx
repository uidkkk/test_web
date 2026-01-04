import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.isNew && (
        <span className="absolute top-4 left-4 bg-accent-yellow text-amber-900 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
          NEW
        </span>
      )}

      {/* Image */}
      <div className="aspect-square w-full overflow-hidden rounded-t-2xl bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Quick Add Button - visible on hover */}
        <div 
          className={`absolute bottom-4 right-4 transition-all duration-300 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-white text-brand-600 p-3 rounded-full shadow-lg hover:bg-brand-600 hover:text-white transition-colors"
          >
            <Plus size={20} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center space-x-1 mb-2">
          <Star size={14} className="fill-accent-yellow text-accent-yellow" />
          <span className="text-sm text-gray-500 font-medium">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-brand-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-xl font-bold text-slate-800">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="md:hidden text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
