import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { locations } from '../data/mock';
import { toast } from 'sonner';

const ContactUs = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    console.log('Contact form submitted:', data);
    toast.success('Thank you for contacting us! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ECEC75] via-[#e6e67c] to-[#ECEC75] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold font-serif text-[#0f172a] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-[#64748b] max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any inquiries or feedback
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <div className="bg-[#ECEC75]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Call Us</h3>
              <a href="tel:+918012345678" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
                +91 80 1234 5678
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#ECEC75]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Email Us</h3>
              <a href="mailto:info@thalasserykitchen.com" className="text-[#64748b] hover:text-[#0f172a] transition-colors text-sm">
                info@thalasserykitchen.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-[#ECEC75]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Visit Us</h3>
              <p className="text-[#64748b] text-sm">1 Location in Bengaluru</p>
            </div>

            {/* Hours */}
            <div className="bg-[#ECEC75]/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#0f172a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Open Daily</h3>
              <p className="text-[#64748b] text-sm">10:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-[#ECEC75]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-serif text-[#0f172a] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#64748b]">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation</option>
                      <option value="catering">Catering Services</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e6e67c]/30 rounded-lg focus:outline-none focus:border-[#ECEC75] transition-colors text-[#0f172a] resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[#0f172a] text-white rounded-lg font-semibold hover:bg-[#1e293b] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Location Selection & Map */}
            <div className="space-y-6">
              {/* Location Selector */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold font-serif text-[#0f172a] mb-4">
                  Our Location
                </h3>
                <div className="space-y-3">
                  {locations.map(location => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                        selectedLocation.id === location.id
                          ? 'bg-[#ECEC75] shadow-md'
                          : 'bg-[#f8fafc] hover:bg-[#ECEC75]/30'
                      }`}
                    >
                      <h4 className="font-semibold text-[#0f172a] mb-1">{location.name}</h4>
                      <p className="text-sm text-[#64748b] mb-2">{location.address}</p>
                      <div className="flex items-center space-x-4 text-xs text-[#64748b]">
                        <span className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {location.phone}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="h-[400px] bg-[#f8fafc] flex items-center justify-center">
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
                <div className="p-6">
                  <h4 className="font-semibold text-[#0f172a] mb-2">{selectedLocation.name}</h4>
                  <p className="text-sm text-[#64748b] mb-3">{selectedLocation.address}</p>
                  <div className="flex gap-3">
                    <a
                      href={selectedLocation.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#0f172a] text-white rounded-lg font-medium hover:bg-[#1e293b] transition-colors text-sm"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${selectedLocation.phone}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#ECEC75] text-[#0f172a] rounded-lg font-medium hover:bg-[#e6e67c] transition-colors text-sm"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-[#0f172a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#64748b]">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#ECEC75]/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                What are your operating hours?
              </h3>
              <p className="text-[#64748b]">
                We are open daily from 10:00 AM to 11:30 PM at all our locations.
              </p>
            </div>

            <div className="bg-[#ECEC75]/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Do you offer catering services?
              </h3>
              <p className="text-[#64748b]">
                Yes! We provide catering services for events, parties, and corporate gatherings. Please contact us for more details and pricing.
              </p>
            </div>

            <div className="bg-[#ECEC75]/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Can I make a reservation?
              </h3>
              <p className="text-[#64748b]">
                Absolutely! You can reserve a table through our Locations page or by calling us directly at any of our branches.
              </p>
            </div>

            <div className="bg-[#ECEC75]/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Do you offer home delivery?
              </h3>
              <p className="text-[#64748b]">
                Yes, we offer home delivery through our Order Online page. We deliver within a 10km radius of each location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#ECEC75] rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-[#0f172a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
            Have a Question?
          </h2>
          <p className="text-xl text-[#94a3b8] mb-8">
            Our team is here to help. Reach out to us anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918012345678"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ECEC75] text-[#0f172a] rounded-lg font-semibold hover:bg-[#e6e67c] transition-colors"
            >
              Call Us Now
            </a>
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

export default ContactUs;
