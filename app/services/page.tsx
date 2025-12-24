import { Metadata } from 'next';
import ServiceCard from '../components/ServiceCard';
import SectionDivider from '../components/SectionDivider';
import config from '../config/config';
import { getIconByCategory } from '../components/Icons';
import Reveal from '../components/Reveal';
import { UserCheck, Package, ShieldCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Dulhan Beauty Parlour',
  description: 'Explore our wide range of beauty services including bridal makeup, skincare, hair care, and more.',
};

const allServices = config.services;

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive beauty treatments designed to enhance your natural beauty and confidence.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <Reveal key={index} from="up" delay={index * 60} className="h-full">
              <ServiceCard
                icon={getIconByCategory(service.category)}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Dulhan Beauty?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <UserCheck size={48} className="mx-auto text-pink-500" />, title: 'Expert Staff', desc: 'Certified professionals with years of experience' },
              { icon: <Package size={48} className="mx-auto text-pink-500" />, title: 'Premium Products', desc: 'Only best quality, cruelty-free products' },
              { icon: <ShieldCheck size={48} className="mx-auto text-pink-500" />, title: 'Hygienic', desc: 'Strict hygiene and safety standards' },
              { icon: <Clock size={48} className="mx-auto text-pink-500" />, title: 'Flexible Hours', desc: 'Open early morning to late evening' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
