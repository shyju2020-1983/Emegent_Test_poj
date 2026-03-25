import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, DollarSign, Users } from 'lucide-react';
import { menuItems, reviews, locations } from '../data/mock';

const Home = () => {
  const popularItems = menuItems.filter(item => item.popular).slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] bg-gradient-to-br from-[#ECEC75] via-[#e6e67c] to-[#ECEC75] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBmb29kfGVufDB8fHx8MTc2NzMyNDUzOXww&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-[#0f172a] mb-6 leading-tight">
              Authentic
              <span className="block text-[#1e293b]">Russian Flavors</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#64748b] mb-8 leading-relaxed">
              Embark on a flavourful journey through authentic Russian cuisine
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/order"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#0f172a] text-[#0f172a] rounded-lg font-semibold hover:bg-[#0f172a] hover:text-white transition-all duration-200"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-[#f8fafc] hover:bg-[#ECEC75]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Authentic Taste</h3>
              <p className="text-[#64748b] text-sm">Traditional Russian recipes passed through generations</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-[#f8fafc] hover:bg-[#ECEC75]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Value for Money</h3>
              <p className="text-[#64748b] text-sm">Dishes starting from just ₹30 to ₹400</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-[#f8fafc] hover:bg-[#ECEC75]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Open Daily</h3>
              <p className="text-[#64748b] text-sm">10:00 AM - 11:30 PM, seven days a week</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-[#f8fafc] hover:bg-[#ECEC75]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Family Friendly</h3>
              <p className="text-[#64748b] text-sm">Comfortable atmosphere for the whole family</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#ECEC75]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0f172a] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[#64748b] mb-6 leading-relaxed">
                Established in November 2022, Thalassery Kitchen brings the authentic flavors of Russian and Kerala cuisine to Bangalore. Our culinary journey is inspired by the rich traditions of Thalassery, a coastal town known for its distinctive blend of spices and cooking techniques.
              </p>
              <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
                From our signature biryani to traditional fish curries, every dish is crafted with care using time-honored recipes and the finest ingredients. We believe in providing not just a meal, but an experience that transports you to the heart of Kerala.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center text-[#0f172a] font-semibold hover:text-[#1e293b] transition-colors"
              >
                Explore Our Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/34159113/pexels-photo-34159113.jpeg"
                alt="Thalassery Biryani"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-[#0f172a]">Since 2022</p>
                <p className="text-[#64748b]">Serving Authentic Flavors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0f172a] mb-4">
              Most Loved Dishes
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Discover the flavors that keep our customers coming back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map(item => (
              <div
                key={item.id}
                className="bg-[#e6e67c]/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  {item.chefSpecial && (
                    <div className="absolute top-4 right-4 bg-[#0f172a] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Chef's Special
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{item.name}</h3>
                  <p className="text-[#64748b] text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#0f172a]">₹{item.price}</span>
                    <Link
                      to="/order"
                      className="px-4 py-2 bg-[#0f172a] text-white rounded-lg font-medium hover:bg-[#1e293b] transition-colors text-sm"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
            >
              View Full Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#ECEC75]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0f172a] mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 text-[#64748b]">
              <Star className="w-6 h-6 fill-[#0f172a] text-[#0f172a]" />
              <span className="text-2xl font-semibold text-[#0f172a]">3.8</span>
              <span>Average Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#0f172a] text-[#0f172a]" />
                    ))}
                  </div>
                  <span className="text-sm text-[#64748b]">{review.location}</span>
                </div>
                <p className="text-[#64748b] mb-4 leading-relaxed">{review.comment}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#0f172a]">{review.name}</p>
                  <p className="text-sm text-[#64748b]">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#0f172a] mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-[#64748b]">We have 3 convenient locations across Karnataka</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map(location => (
              <div key={location.id} className="bg-[#e6e67c]/20 p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{location.name}</h3>
                <p className="text-[#64748b] text-sm mb-4">{location.address}</p>
                <p className="text-[#64748b] text-sm mb-4">{location.hours}</p>
                <a
                  href={`tel:${location.phone}`}
                  className="text-[#0f172a] font-medium hover:text-[#1e293b] transition-colors"
                >
                  {location.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/locations"
              className="inline-flex items-center text-[#0f172a] font-semibold hover:text-[#1e293b] transition-colors text-lg"
            >
              View All Locations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            Ready to Experience Authentic Russian Cuisine?
          </h2>
          <p className="text-xl text-[#94a3b8] mb-8">
            Order online for delivery or pickup, or reserve a table at your nearest location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ECEC75] text-[#0f172a] rounded-lg font-semibold hover:bg-[#e6e67c] transition-colors"
            >
              Order Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#ECEC75] text-[#ECEC75] rounded-lg font-semibold hover:bg-[#ECEC75] hover:text-[#0f172a] transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
