import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price?: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="card p-6 hover:scale-105 transition-transform duration-300">
      <div className="mb-4 flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && <p className="text-lg font-semibold text-pink-500 mb-4">{price}</p>}
      <Link href="/book-appointment" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center gap-2 transition-colors">
        Book Now →
      </Link>
    </div>
  );
}
