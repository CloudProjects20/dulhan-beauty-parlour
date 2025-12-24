import Link from 'next/link'

export const metadata = {
  title: 'Training Centre — Dulhan Beauty Parlour',
  description: 'Professional beauty training courses and certifications at Dulhan Beauty Parlour.',
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 border rounded-lg bg-white/5">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  )
}

function Module({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <li className="p-4 bg-white/5 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-pink-500/90 text-white flex items-center justify-center font-bold">{num}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-slate-400">{desc}</p>
        </div>
      </div>
    </li>
  )
}

export default function TrainingPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-50/40 to-white/10 rounded-2xl p-8 mb-10 shadow-sm">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Training Centre — Professional Beauty Courses</h1>
            <p className="text-lg text-slate-600 mb-6">Hands-on, industry-led training for makeup artists, bridal stylists, skincare specialists and nail technicians. Small classes, practical demos and certification on completion.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-appointment" className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold shadow-md">Book a Training Slot</Link>
              <Link href="/contact" className="inline-block px-6 py-3 border border-pink-200 text-pink-600 rounded-lg">Contact Us</Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Upcoming Batch</h3>
                <p className="text-sm text-slate-500 mb-4">Next batch starts: <strong>5th Jan 2026</strong></p>
                <p className="text-sm text-slate-500">Duration: <strong>4 weeks</strong> • Hours: <strong>Mon–Fri, 10:00–14:00</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Why choose Dulhan Training Centre?</h2>
          <p className="text-slate-600 mb-6">Our trainers are certified industry professionals with years of salon and bridal experience. We focus on practical skills, portfolio building and live client demos so you graduate job-ready.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Feature title="Hands-on Practice" desc="Small groups with real-model practice sessions." />
            <Feature title="Certification" desc="Accredited certificate on successful completion." />
            <Feature title="Industry Tools" desc="Learn with professional brands and salon equipment." />
            <Feature title="Career Support" desc="Portfolio reviews and placement guidance." />
          </div>
        </div>
        <aside className="p-6 bg-white/5 rounded-lg">
          <h3 className="font-semibold mb-2">Class size</h3>
          <p className="text-slate-400 mb-4">Maximum 6 students per batch to ensure personalised attention.</p>
          <h3 className="font-semibold mb-2">Location</h3>
          <p className="text-slate-400">Dulhan Beauty Parlour — Main Branch</p>
        </aside>
      </section>

      {/* Curriculum */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          <Module num={1} title="Foundations of Makeup" desc="Skin prep, product knowledge, daytime & evening looks." />
          <Module num={2} title="Bridal Makeup & Hairstyling" desc="Traditional & contemporary bridal looks, bun & blow-dry techniques." />
          <Module num={3} title="Skincare & Facials" desc="Skin analysis, facial protocols and client consultation." />
          <Module num={4} title="Nail Art & Manicure" desc="Sanitation, classic & gel manicure, creative nail art basics." />
        </ul>
      </section>

      {/* Instructors */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Meet Your Trainers</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl mb-3">AR</div>
            <h4 className="font-semibold">Anjali Roy</h4>
            <p className="text-sm text-slate-400">Senior Makeup Artist — 10+ years bridal experience</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl mb-3">SK</div>
            <h4 className="font-semibold">Sana Khan</h4>
            <p className="text-sm text-slate-400">Skincare Specialist & Trainer</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl mb-3">RM</div>
            <h4 className="font-semibold">Ritu Mehra</h4>
            <p className="text-sm text-slate-400">Nail & Styling Expert</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Pricing & Enrollment</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Basic</h3>
            <p className="text-slate-400 mb-4">Introductory course • 1 week</p>
            <p className="text-xl font-bold mb-4">₹4,999</p>
            <Link href="/book-appointment" className="inline-block px-4 py-2 bg-pink-600 text-white rounded">Enroll</Link>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Professional</h3>
            <p className="text-slate-400 mb-4">Full program • 4 weeks</p>
            <p className="text-xl font-bold mb-4">₹19,999</p>
            <Link href="/book-appointment" className="inline-block px-4 py-2 bg-pink-600 text-white rounded">Enroll</Link>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Masterclass</h3>
            <p className="text-slate-400 mb-4">Advanced techniques • 2 weeks</p>
            <p className="text-xl font-bold mb-4">₹29,999</p>
            <Link href="/book-appointment" className="inline-block px-4 py-2 bg-pink-600 text-white rounded">Enroll</Link>
          </div>
        </div>
      </section>

      {/* Testimonials / CTA */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">What our students say</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <blockquote className="p-6 bg-white/5 rounded-lg">“The trainers were so supportive — hands-on classes made all the difference. I started freelancing within a month.” — Meera S.</blockquote>
          <blockquote className="p-6 bg-white/5 rounded-lg">“Excellent curriculum and real-client practice. The portfolio review helped me land a salon position.” — Riya P.</blockquote>
        </div>
        <div className="mt-6 text-center">
          <Link href="/contact" className="px-6 py-3 bg-pink-600 text-white rounded-lg">Ask about group discounts</Link>
        </div>
      </section>
    </main>
  )
}
