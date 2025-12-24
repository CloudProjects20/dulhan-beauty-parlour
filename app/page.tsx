"use client";

import Link from 'next/link';
import Image from 'next/image';
import SectionDivider from './components/SectionDivider';
import config from './config/config';
import { getIconByCategory } from './components/Icons';
import Reveal from './components/Reveal';
import { UserCheck, Package, ShieldCheck, Clock } from 'lucide-react';

export default function Home() {
  const services = config.services.slice(0, 6);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      testimonial: 'Dulhan made me feel beautiful on my wedding day. The makeup was flawless and lasted all day!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Regular Client',
      testimonial: 'Professional, friendly, and always provides excellent service. Highly recommended!',
      rating: 5
    },
    {
      name: 'Jessica Wilson',
      role: 'Event Client',
      testimonial: 'The team was incredibly helpful for my engagement party. Worth every penny!',
      rating: 5
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-pink-950 to-slate-900 min-h-screen flex items-center pt-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-32 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <Reveal from="left" className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6 w-fit">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">Welcome to Excellence</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Elevate Your <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">Beauty</span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Experience the epitome of luxury beauty treatments. Our expert professionals deliver transformative results using premium, ethically-sourced products.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <Link href="/book-appointment" className="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold overflow-hidden hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                  <span className="relative z-10">Book Appointment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/services" className="px-8 py-3 border-2 border-pink-400 text-pink-200 rounded-lg font-semibold hover:bg-pink-400/10 transition-all duration-300">
                  Explore Services
                </Link>
              </div>
            </Reveal>

            {/* Right Image - embedded banner */}
            <Reveal from="right" className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-3xl blur-2xl pointer-events-none"></div>
              <div className="relative w-full aspect-square rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/images/pricing_men_banner.png"
                    alt="Dulhan Beauty banner"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-200 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-8xl group-hover:scale-125 transition-transform duration-500">
                    {/* Decorative flower icon */}
                    <svg className="w-20 h-20 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 8c1 1.6 2.8 2.8 4.8 3.2C10.4 11.6 12 13 10 14.8 8.2 16.6 6 16 4 15z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-pink-600 text-sm font-semibold uppercase tracking-widest">Our Story</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Dulhan Beauty Parlour</span>
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Dulhan—meaning bride in Hindi—is your sanctuary for transformative beauty experiences. With over a decade of excellence, our certified professionals are dedicated to unveiling your most radiant self.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We curate only premium, ethically-sourced, cruelty-free products and adhere to international beauty standards, ensuring every treatment is a luxurious journey toward confidence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.features.map((f, idx) => {
                  const iconMap: Record<string, React.ReactNode> = {
                    UserCheck: <UserCheck className="w-8 h-8 text-pink-500" />, 
                    Package: <Package className="w-8 h-8 text-pink-500" />, 
                    ShieldCheck: <ShieldCheck className="w-8 h-8 text-pink-500" />, 
                    Clock: <Clock className="w-8 h-8 text-pink-500" />,
                  };

                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">{iconMap[f.icon]}</div>
                      <div>
                        <h4 className="text-gray-900 font-semibold">{f.title}</h4>
                        <p className="text-gray-600 text-sm">{f.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-pink-600 text-sm font-semibold uppercase tracking-widest">Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Signature <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Services</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of beauty treatments designed for the modern, confident woman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={index} from="up" delay={index * 80} className="group h-full">
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-pink-200">
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 group-hover:h-2 transition-all duration-300"></div>
                  
                  <div className="p-8">
                    <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                      {getIconByCategory(service.category, 'w-14 h-14 text-pink-500 mx-auto')}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        {service.price}
                      </p>
                      <Link href="/book-appointment" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                        Book →
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-pink-600 text-sm font-semibold uppercase tracking-widest">Gallery</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrate the transformations and beautiful moments we've created.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <Reveal key={item} from="up" delay={idx * 60} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-400 to-pink-500 opacity-90"></div>
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Content */}
                  <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
                    <svg className="w-16 h-16 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                
                {/* Border animation */}
                <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-pink-600 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">What Our Clients <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Love</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their transformative experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} from="up" delay={index * 80} className="group h-full">
                <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-pink-200 p-8 overflow-hidden relative">
                  {/* Accent background */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? 'text-yellow-400 text-lg' : 'text-gray-300 text-lg'}>
                          ★
                        </span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="border-t border-gray-200 pt-6 group-hover:border-pink-200 transition-colors duration-300">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-pink-600 font-semibold text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-pink-900 to-slate-900"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Look?
            </h2>
            
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Book your appointment today and experience the luxury beauty service you deserve. Our expert team awaits to unveil your most radiant self.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment" className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              
              <Link href="/services" className="px-10 py-4 border-2 border-pink-400 text-pink-200 rounded-xl font-bold text-lg hover:bg-pink-400/10 transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
    