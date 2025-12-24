import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Store,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

import config from '../config/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-sm text-gray-700">

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="block py-2 hover:text-pink-600 transition-colors">Home</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-pink-600 transition-colors">Contact Us</Link></li>
            <li><Link href="/book-appointment" className="block py-2 hover:text-pink-600 transition-colors">Book Appointment</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Our Offerings</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-pink-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Our Services</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Bridal Makeup</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Hair Care</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Skincare</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Nail Care</Link></li>
            <li><Link href="/services" className="block py-2 hover:text-pink-600 transition-colors">Threading & Waxing</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-pink-600 transition-colors">Special Events</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Contact Us</h4>

          <div className="flex gap-2 mb-4 items-start">
            <MapPin size={18} className="text-pink-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700 whitespace-normal text-sm">
              {config.business.name}<br />
              {config.business.contact.address}
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <Store size={18} className="text-pink-600 flex-shrink-0 mt-1" />
            <div className="text-gray-700">
              <p className="hover:text-pink-600 transition-colors cursor-pointer">Salon Locator</p>
              <p className="hover:text-pink-600 transition-colors cursor-pointer">Appointments</p>
            </div>
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Get in Touch</h4>

          <div className="flex gap-2 mb-3">
            <Phone size={18} className="text-pink-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700">{config.business.contact.phone}</p>
          </div>

          <div className="flex gap-2 mb-6">
            <Mail size={18} className="text-pink-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700">{config.business.contact.email}</p>
          </div>

          <h4 className="font-semibold mb-3 text-gray-900">Follow Us</h4>
          <div className="flex flex-wrap gap-3">
            <a href={config.business.social.instagram} aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-pink-50 transition-colors">
              <Instagram size={18} className="text-pink-600" />
            </a>
            <a href={config.business.social.facebook} aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-pink-50 transition-colors">
              <Facebook size={18} className="text-pink-600" />
            </a>
            <a href={config.business.social.twitter} aria-label="X" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-pink-50 transition-colors">
              <Twitter size={18} className="text-pink-600" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-pink-50 transition-colors">
              <Linkedin size={18} className="text-pink-600" />
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-pink-50 transition-colors">
              <Youtube size={18} className="text-pink-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-200"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
        <p>&copy; {currentYear} Dulhan Beauty Parlour. All rights reserved.</p>
      </div>

      {/* Floating Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-4 z-40">
        {/* <Link href="/book-appointment" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white border-0 rounded-full px-6 py-3 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 font-semibold text-sm whitespace-nowrap">
          Book Appointment
        </Link> */}

        <a
          href={`https://wa.me/918936076541`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl text-2xl transition-all duration-300"
          title="Chat with us on WhatsApp"
        >
          💬
        </a>
        </div>
      {/* Mobile sticky action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <Link href="/book-appointment" className="flex-1 mr-2 bg-pink-600 text-white rounded-lg py-3 text-center font-semibold">Book</Link>
          <a href={`https://wa.me/918936076541`} target="_blank" rel="noopener noreferrer" className="flex-1 ml-2 bg-green-500 text-white rounded-lg py-3 text-center font-semibold">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
