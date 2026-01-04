import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Category } from '../types';

export const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.isNew || p.rating >= 4.8).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-accent-purple overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="lg:w-1/2">
            <span className="inline-block bg-accent-yellow text-amber-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-lg transform -rotate-2">
              🚀 Free Shipping on orders over $50!
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-sm">
              Spark Wonder <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-accent-pink">
                Every Day.
              </span>
            </h1>
            <p className="text-xl text-brand-50 mb-8 leading-relaxed max-w-lg">
              Discover the world's most imaginative toys, curated to inspire learning, creativity, and endless fun for kids of all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center bg-white text-brand-700 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
              >
                Shop Now <ArrowRight size={20} className="ml-2" />
              </Link>
               <Link 
                to="/shop" 
                className="inline-flex items-center justify-center bg-brand-800/50 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-brand-800/70 transition-all"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Floating Image (CSS placeholder for simplicity) */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full">
            <img 
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy kid playing" 
                className="absolute right-0 bottom-0 h-[90%] w-auto object-contain object-bottom drop-shadow-2xl"
            />
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
                <div className="bg-blue-50 p-3 rounded-full text-brand-600">
                    <Truck size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Fast Delivery</h3>
                    <p className="text-sm text-gray-500">2-3 business days delivery</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 justify-center md:justify-start">
                <div className="bg-green-50 p-3 rounded-full text-green-600">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Safety First</h3>
                    <p className="text-sm text-gray-500">Certified non-toxic materials</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 justify-center md:justify-start">
                <div className="bg-purple-50 p-3 rounded-full text-purple-600">
                    <RefreshCcw size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Easy Returns</h3>
                    <p className="text-sm text-gray-500">30-day return policy</p>
                </div>
            </div>
        </div>
      </div>

      {/* Category Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect playmate for every interest.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[Category.EDUCATIONAL, Category.ACTION, Category.DOLLS, Category.ARTS].map((cat, idx) => (
               <Link 
                key={idx} 
                to={`/shop?category=${cat}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white shadow-sm hover:shadow-lg transition-all"
               >
                 <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10`} />
                 <img 
                    src={`https://picsum.photos/seed/${cat}/400/300`} 
                    alt={cat} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute bottom-4 left-4 z-20 text-white">
                    <h3 className="font-bold text-lg md:text-xl">{cat}</h3>
                    <span className="text-sm text-white/80 group-hover:text-white flex items-center mt-1">
                        Explore <ArrowRight size={14} className="ml-1" />
                    </span>
                 </div>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">Trending Now</h2>
                <p className="text-gray-600">Kids are loving these right now!</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-brand-600 font-bold hover:text-brand-700">
                View All <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-block bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-lg">
                View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-accent-yellow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/polka-dots-large.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">Join the Fun Club!</h2>
              <p className="text-amber-800 mb-8 text-lg">Sign up for our newsletter and get 15% off your first order plus secret birthday treats.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-amber-400 focus:border-amber-600 focus:outline-none shadow-sm"
                  />
                  <button className="bg-amber-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-amber-800 transition-colors shadow-lg">
                    Subscribe
                  </button>
              </form>
          </div>
      </section>
    </div>
  );
};
