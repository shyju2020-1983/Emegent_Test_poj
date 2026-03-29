import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import { locations } from '../data/mock';
import { toast } from 'sonner';

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleReservation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
      location: selectedLocation.name
    };
    
    console.log('Reservation submitted:', data);
    toast.success('Table reservation request submitted! We will call you shortly to confirm.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ECEC75] via-[#e6e67c] to-[#ECEC75] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold font-serif text-[#0f172a] mb-4">
            Our Location
          </h1>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            Visit us at our location in Marathahalli, Bengaluru
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
            {locations.map(location => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                  selectedLocation.id === location.id
                    ? 'shadow-2xl ring-4 ring-[#ECEC75]'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="bg-gradient-to-br from-[#ECEC75] to-[#e6e67c] h-32 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-[#0f172a]" />
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold font-serif text-[#0f172a] mb-4">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#64748b] flex-shrink-0 mt-1" />
                      <p className="text-[#64748b] text-sm">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#64748b] flex-shrink-0" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-[#0f172a] font-medium hover:text-[#1e293b] transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#64748b] flex-shrink-0" />
                      <p className="text-[#64748b] text-sm">{location.hours}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#0f172a] text-white rounded-lg font-medium hover:bg-[#1e293b] transition-colors text-sm"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                    <a
                      href={`tel:${location.phone}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#ECEC75] text-[#0f172a] rounded-lg font-medium hover:bg-[#e6e67c] transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#ECEC75]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="h-[500px] bg-[#f8fafc] flex items-center justify-center">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${selectedLocation.coordinates.lat}!2d${selectedLocation.coordinates.lng}!3d${selectedLocation.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzI0LjgiTiA3N8KwMzgnNTkuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selectedLocation.name}`}
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Selected Location Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold font-serif text-[#0f172a] mb-6">
                  {selectedLocation.name}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECEC75] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0f172a]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#64748b] mb-1">Address</p>
                      <p className="text-[#0f172a] font-medium">{selectedLocation.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECEC75] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0f172a]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#64748b] mb-1">Phone</p>
                      <a
                        href={`tel:${selectedLocation.phone}`}
                        className="text-[#0f172a] font-medium hover:text-[#1e293b] transition-colors"
                      >
                        {selectedLocation.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECEC75] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#0f172a]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#64748b] mb-1">Hours</p>
                      <p className="text-[#0f172a] font-medium">{selectedLocation.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedLocation.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:${selectedLocation.phone}`}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#ECEC75] text-[#0f172a] rounded-lg font-semibold hover:bg-[#e6e67c] transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-[#0f172a] mb-4">
              Reserve a Table
            </h2>
            <p className="text-lg text-[#64748b]">
              Book your table in advance and enjoy a seamless dining experience
            </p>
          </div>

          <form onSubmit={handleReservation} className="bg-[#ECEC75]/10 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
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
                  className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                >
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="9+">9+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">
                  Location *
                </label>
                <select
                  name="location"
                  required
                  value={selectedLocation.id}
                  onChange={(e) => setSelectedLocation(locations.find(l => l.id === parseInt(e.target.value)))}
                  className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                >
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                name="notes"
                rows="3"
                className="w-full px-4 py-3 bg-white border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a] resize-none"
                placeholder="Any dietary restrictions or special occasions?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors text-lg"
            >
              Submit Reservation Request
            </button>

            <p className="text-sm text-[#64748b] text-center mt-4">
              We'll call you within 30 minutes to confirm your reservation
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Locations;
