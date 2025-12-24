export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-pink-300" />
      <span className="text-pink-500 text-2xl">✨</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-pink-300" />
    </div>
  );
}
