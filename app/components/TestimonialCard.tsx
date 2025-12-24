interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}

export default function TestimonialCard({ name, role, testimonial, rating }: TestimonialCardProps) {
  return (
    <div className="card p-6">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial}"</p>
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
