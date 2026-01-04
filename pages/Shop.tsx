import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Category } from '../types';

export const Shop: React.FC = () => {
  const location = useLocation();
  // Simple parsing of query params
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') as Category | 'All';

  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(initialCategory || 'All');
  const [sortOption, setSortOption] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else {
        // featured logic (mock)
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortOption]);

  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">Shop All Toys</h1>
            <p className="text-gray-500">Showing {filteredProducts.length} results</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center space-x-2 mb-6 text-gray-900">
                <Filter size={20} />
                <h3 className="font-bold text-lg">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-sm text-gray-900 uppercase tracking-wider mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category"
                        className="form-radio text-brand-600 focus:ring-brand-500 h-4 w-4 border-gray-300"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat as Category | 'All')}
                      />
                      <span className={`text-sm ${selectedCategory === cat ? 'text-brand-600 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range (Mock) */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 uppercase tracking-wider mb-4">Price Range</h4>
                <div className="flex items-center space-x-2">
                   <div className="w-full bg-gray-100 rounded-lg p-3 text-center text-sm text-gray-500">All Prices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-end mb-6">
              <div className="relative inline-block text-left">
                <select 
                  className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent cursor-pointer text-sm font-medium"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No toys found in this category.</p>
                <button 
                    onClick={() => setSelectedCategory('All')}
                    className="mt-4 text-brand-600 font-bold hover:underline"
                >
                    Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
