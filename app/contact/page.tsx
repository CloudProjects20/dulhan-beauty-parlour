'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import SectionDivider from '../components/SectionDivider';
import config from '../config/config';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star, ExternalLink } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'Contact Us | Dulhan Beauty Parlour',
//   description: 'Get in touch with Dulhan Beauty Parlour for appointments, inquiries, and more information about our beauty services.',
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const mapsUrl = typeof config.business.contact.latitude === 'number' && typeof config.business.contact.longitude === 'number'
    ? `https://www.google.com/maps/search/?api=1&query=${config.business.contact.latitude},${config.business.contact.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.business.contact.address.replace(/\n/g, ' '))}`;

  const reviewUrl = config.business.contact.googlePlaceId
    ? `https://search.google.com/local/writereview?placeid=${config.business.contact.googlePlaceId}`
    : mapsUrl;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex items-start text-pink-500"><MapPin className="w-7 h-7" aria-hidden /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">{config.business.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center text-pink-500"><Phone className="w-7 h-7" aria-hidden /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600"><a href={`tel:${config.business.contact.phone}`} className="hover:text-pink-500 transition-colors">{config.business.contact.phone}</a></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center text-pink-500"><Mail className="w-7 h-7" aria-hidden /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600"><a href={`mailto:${config.business.contact.email}`} className="hover:text-pink-500 transition-colors">{config.business.contact.email}</a></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center text-pink-500"><Clock className="w-7 h-7" aria-hidden /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                  {config.business.contact.hours.map((line, index) => (
                    <div key={index} className="text-gray-600">{line.day} <b>{line.time}</b></div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center text-pink-500"><MapPin className="w-7 h-7" aria-hidden /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href={config.business.social.facebook} target="_blank" rel="noreferrer" className="inline-flex w-10 h-10 bg-pink-500 text-white rounded-full items-center justify-center hover:bg-pink-600 transition-colors">
                      <Facebook className="w-5 h-5" aria-hidden />
                    </a>
                    <a href={config.business.social.instagram} target="_blank" rel="noreferrer" className="inline-flex w-10 h-10 bg-pink-500 text-white rounded-full items-center justify-center hover:bg-pink-600 transition-colors">
                      <Instagram className="w-5 h-5" aria-hidden />
                    </a>
                    <a href={config.business.social.twitter} target="_blank" rel="noreferrer" className="inline-flex w-10 h-10 bg-pink-500 text-white rounded-full items-center justify-center hover:bg-pink-600 transition-colors">
                      <Twitter className="w-5 h-5" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={config.business.contact.phone}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a subject</option>
                  <option value="appointment">Appointment Inquiry</option>
                  <option value="services">Services Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Find Us on the Map</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden mt-8 shadow-md">
            {/* Responsive Google Maps embed (no API key) - prefers coordinates when available */}
            {typeof config.business.contact.latitude === 'number' && typeof config.business.contact.longitude === 'number' ? (
              <iframe
                title="Dulhan Beauty Parlour location"
                src={`https://www.google.com/maps?q=${config.business.contact.latitude},${config.business.contact.longitude}&z=15&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Dulhan Beauty Parlour location"
              />
            ) : (
              <iframe
                title="Dulhan Beauty Parlour location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(config.business.contact.address.replace(/\n/g, ' '))}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Dulhan Beauty Parlour location"
              />
            )}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            If the map doesn't load, <a href={
              typeof config.business.contact.latitude === 'number' && typeof config.business.contact.longitude === 'number'
                ? `https://www.google.com/maps/search/?api=1&query=${config.business.contact.latitude},${config.business.contact.longitude}`
                : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.business.contact.address.replace(/\n/g, ' '))}`
            } target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">open in Google Maps</a>.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-pink-600 rounded-lg border border-pink-200 hover:shadow-md transition">
              <ExternalLink className="w-4 h-4" />
              <span>View on Google</span>
            </a>
            <a href={reviewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              <Star className="w-4 h-4" />
              <span>Rate us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
