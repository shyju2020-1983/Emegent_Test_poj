import React, { useState, useEffect } from 'react';
import { Plus, Minus, Trash2, ShoppingBag, Clock, MapPin } from 'lucide-react';
import { getCartItems, updateCartQuantity, clearCart, calculateTotal, locations } from '../data/mock';
import { toast } from 'sonner';

const OrderOnline = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderType, setOrderType] = useState('delivery'); // delivery or pickup
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const loadCart = () => {
    setCartItems(getCartItems());
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = updateCartQuantity(itemId, newQuantity);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
    
    if (newQuantity === 0) {
      toast.success('Item removed from cart');
    }
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success('Cart cleared');
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderData = {
      items: cartItems,
      total: calculateTotal(cartItems),
      orderType,
      location: orderType === 'pickup' ? selectedLocation : null,
      customerInfo: {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: orderType === 'delivery' ? formData.get('address') : null,
        notes: formData.get('notes')
      }
    };
    
    console.log('Order placed:', orderData);
    toast.success('Order placed successfully! We will contact you shortly.');
    handleClearCart();
    setShowCheckout(false);
    e.target.reset();
  };

  const subtotal = calculateTotal(cartItems);
  const deliveryFee = orderType === 'delivery' ? 40 : 0;
  const tax = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ECEC75] via-[#e6e67c] to-[#ECEC75] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold font-serif text-[#0f172a] mb-4">
            Order Online
          </h1>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            {cartItems.length > 0 
              ? `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`
              : 'Your cart is empty'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#ECEC75]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-[#64748b]" />
            </div>
            <h2 className="text-3xl font-bold font-serif text-[#0f172a] mb-4">
              Your cart is empty
            </h2>
            <p className="text-lg text-[#64748b] mb-8">
              Add some delicious items from our menu to get started
            </p>
            <a
              href="/menu"
              className="inline-flex items-center px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
            >
              Browse Menu
            </a>
          </div>
        ) : (
          // Cart Content
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-serif text-[#0f172a]">Your Order</h2>
                <button
                  onClick={handleClearCart}
                  className="text-[#64748b] hover:text-red-600 transition-colors text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#0f172a] mb-1">{item.name}</h3>
                      <p className="text-sm text-[#64748b] mb-3 line-clamp-1">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#0f172a]">₹{item.price}</span>
                        
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-[#f8fafc] hover:bg-[#ECEC75]/30 rounded-lg flex items-center justify-center transition-colors"
                          >
                            {item.quantity === 1 ? <Trash2 className="w-4 h-4 text-red-600" /> : <Minus className="w-4 h-4 text-[#0f172a]" />}
                          </button>
                          
                          <span className="text-lg font-semibold text-[#0f172a] min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-[#f8fafc] hover:bg-[#ECEC75]/30 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4 text-[#0f172a]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold font-serif text-[#0f172a] mb-6">Order Summary</h2>

                {/* Order Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#0f172a] mb-3">Order Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        orderType === 'delivery'
                          ? 'bg-[#0f172a] text-white'
                          : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#ECEC75]/30'
                      }`}
                    >
                      Delivery
                    </button>
                    <button
                      onClick={() => setOrderType('pickup')}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        orderType === 'pickup'
                          ? 'bg-[#0f172a] text-white'
                          : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#ECEC75]/30'
                      }`}
                    >
                      Pickup
                    </button>
                  </div>
                </div>

                {/* Pickup Location */}
                {orderType === 'pickup' && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#0f172a] mb-3">Pickup Location</label>
                    <select
                      value={selectedLocation.id}
                      onChange={(e) => setSelectedLocation(locations.find(l => l.id === parseInt(e.target.value)))}
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                    >
                      {locations.map(location => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-[#e6e67c]/30">
                  <div className="flex justify-between text-[#64748b]">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-[#64748b]">
                      <span>Delivery Fee</span>
                      <span>₹{deliveryFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#64748b]">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-[#0f172a]">Total</span>
                  <span className="text-2xl font-bold text-[#0f172a]">₹{total}</span>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center space-x-2 text-[#64748b]">
                    <Clock className="w-4 h-4" />
                    <span>{orderType === 'delivery' ? '30-45 min delivery' : '20-30 min preparation'}</span>
                  </div>
                  {orderType === 'pickup' && (
                    <div className="flex items-start space-x-2 text-[#64748b]">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">{selectedLocation.address}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full px-6 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-[#0f172a]/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold font-serif text-[#0f172a]">Checkout</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="text-[#64748b] hover:text-[#0f172a] transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCheckout} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                  placeholder="your.email@example.com"
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a] resize-none"
                    placeholder="Enter your complete address"
                  ></textarea>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Special Instructions
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a] resize-none"
                  placeholder="Any special requests?"
                ></textarea>
              </div>

              <div className="bg-[#ECEC75]/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#0f172a]">Total Amount</span>
                  <span className="text-2xl font-bold text-[#0f172a]">₹{total}</span>
                </div>
                <p className="text-sm text-[#64748b] mt-2">
                  Payment: Cash on {orderType === 'delivery' ? 'Delivery' : 'Pickup'}
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors text-lg"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;
