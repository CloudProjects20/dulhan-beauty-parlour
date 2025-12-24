'use client';

import { useState } from 'react';
import SectionDivider from '../components/SectionDivider';
// import { config } from '../../config';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Bridal Makeup',
    'Manicure',
    'Pedicure',
    'Facial',
    'Threading',
    'Waxing',
    'Hair Cutting',
    'Hair Spa',
    'Hair Coloring',
    'Makeup Lesson',
    'Nail Art',
  ];

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking to a backend
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Appointment</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule your beauty treatment with our expert professionals. Easy and quick booking process.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {submitted && (
            <div className="mb-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">✓ Appointment Booked Successfully!</h3>
              <p>We'll send you a confirmation email shortly. Thank you for choosing Dulhan Beauty!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
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

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="+919891103958" //${config.business.contact.phone}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={minDate}
                    className="input-field"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Notes</h3>
              <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">Special Requests (Optional)</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="input-field resize-none"
                placeholder="Any special requests or preferences? Let us know here..."
              />
            </div>

            <button type="submit" className="btn-primary w-full text-lg font-bold py-4">
              Confirm Booking
            </button>

            <p className="text-center text-gray-600 text-sm">
              We'll send you a confirmation email with your appointment details.
            </p>
          </form>

          <SectionDivider />

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-8">
              {[
                {
                  q: 'How far in advance should I book?',
                  a: 'We recommend booking at least 24 hours in advance. For bridal appointments, we suggest booking 2-3 weeks ahead.'
                },
                {
                  q: 'What is your cancellation policy?',
                  a: 'Cancellations made 24 hours before the appointment are free. Late cancellations may incur a 50% charge.'
                },
                {
                  q: 'Do you offer gift certificates?',
                  a: 'Yes! Gift certificates are available for any amount. Perfect for special occasions!'
                },
                {
                  q: 'Are walk-ins accepted?',
                  a: 'Walk-ins are welcome subject to availability. Booking in advance ensures your preferred time slot.'
                },
              ].map((item, index) => (
                <details key={index} className="group border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <summary className="font-semibold text-gray-900 group-open:text-pink-500">
                    {item.q}
                  </summary>
                  <p className="text-gray-600 mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
