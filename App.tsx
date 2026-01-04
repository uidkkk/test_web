import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { AIChatAssistant } from './components/AIChatAssistant';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Footer Component
const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
            <span className="font-display font-bold text-2xl text-slate-800 tracking-tight">
              Wonder<span className="text-brand-500">Toys</span>
            </span>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Making childhood magical since 2023. We believe in the power of play to inspire, educate, and delight.
            </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-600">New Arrivals</a></li>
            <li><a href="#" className="hover:text-brand-600">Best Sellers</a></li>
            <li><a href="#" className="hover:text-brand-600">Gift Sets</a></li>
            <li><a href="#" className="hover:text-brand-600">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-600">Track Order</a></li>
            <li><a href="#" className="hover:text-brand-600">Returns</a></li>
            <li><a href="#" className="hover:text-brand-600">Shipping Info</a></li>
            <li><a href="#" className="hover:text-brand-600">FAQ</a></li>
          </ul>
        </div>
        <div>
           <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
           <p className="text-sm text-gray-500 mb-2">hello@wondertoys.com</p>
           <p className="text-sm text-gray-500">1-800-WONDER-1</p>
           <div className="flex space-x-4 mt-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-100 transition-colors"></div>
             <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-100 transition-colors"></div>
             <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-100 transition-colors"></div>
           </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">© 2024 WonderToys Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="text-sm text-gray-400">Privacy Policy</span>
          <span className="text-sm text-gray-400">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                  <h1 className="text-4xl font-bold mb-4">About Us</h1>
                  <p className="text-lg text-gray-600">We are passionate about bringing joy to children everywhere.</p>
                </div>
              } />
            </Routes>
          </main>
          <AIChatAssistant />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
