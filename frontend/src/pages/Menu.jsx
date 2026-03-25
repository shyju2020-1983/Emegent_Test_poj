import React, { useState } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import { menuItems, addToCart } from '../data/mock';
import { toast } from 'sonner';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ECEC75] via-[#e6e67c] to-[#ECEC75] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold font-serif text-[#0f172a] mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            Explore our authentic Malabar and Kerala specialties
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-[#e6e67c]/20 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a] placeholder-[#64748b]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-[#64748b] flex-shrink-0" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#0f172a] text-white'
                      : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#ECEC75]/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12 bg-[#ECEC75]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#64748b]">No dishes found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {item.popular && (
                        <span className="bg-[#0f172a] text-white px-3 py-1 rounded-full text-xs font-medium">
                          Most Ordered
                        </span>
                      )}
                      {item.chefSpecial && (
                        <span className="bg-[#ECEC75] text-[#0f172a] px-3 py-1 rounded-full text-xs font-medium">
                          Chef's Special
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-[#0f172a]">{item.name}</h3>
                      <span className="text-sm text-[#64748b] bg-[#f8fafc] px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    
                    <p className="text-[#64748b] text-sm mb-4 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#e6e67c]/30">
                      <span className="text-2xl font-bold text-[#0f172a]">₹{item.price}</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center space-x-2 px-5 py-2.5 bg-[#0f172a] text-white rounded-lg font-medium hover:bg-[#1e293b] transition-all duration-200 transform hover:scale-105"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Info */}
      <section className="py-12 bg-white border-t border-[#e6e67c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ECEC75]/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-serif text-[#0f172a] mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-[#64748b] mb-6">
              Call us to inquire about daily specials or customize your order
            </p>
            <a
              href="tel:+918012345678"
              className="inline-flex items-center px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
            >
              Call Now: +91 80 1234 5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
