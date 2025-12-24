import React from 'react';

type IconProps = { className?: string };

export const MakeupIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 21l7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 11l6-6 4 4-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NailIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M15 9l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const FootIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 21s6-1 6-7-4-7-6-7-4 2-4 5 0 9 4 9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FacialIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 14c.8 1.2 2.2 2 3 2s2.2-.8 3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const ThreadingIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WaxIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="5" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const ScissorsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 10l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const SpaIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3s4 2 4 6-4 8-4 8-4-4-4-8 4-6 4-6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PackageIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4.46a2 2 0 0 0 2 0l7-4.46A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function getIconByCategory(category: string, className = 'w-12 h-12 text-pink-500') {
  switch (category) {
    case 'makeup':
      return <MakeupIcon className={className} />;
    case 'nails':
      return <NailIcon className={className} />;
    case 'skincare':
      return <FacialIcon className={className} />;
    case 'waxing':
      return <WaxIcon className={className} />;
    case 'hair':
      return <ScissorsIcon className={className} />;
    case 'packages':
      return <PackageIcon className={className} />;
    default:
      return <SpaIcon className={className} />;
  }
}

export default null;

export const FlowerIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7c1.7 0 3 1 4.2 2.2C17.6 11.4 16 13 14 13s-3.6-1.6-2.2-3.8C9 8 10.3 7 12 7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12c1.2-1.2 2.8-2.2 4.6-2.8C10.4 8.6 11 10 9.2 11.8 7.4 13.6 5.2 13 4 12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SparklesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l1.2 3.2L16 7l-3.2 1.8L12 12l-1.8-3.2L7 7l3.2-1.8L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M20 12l.8 2.1L23 15l-2.2 1.1L20 18l-.8-1.9L17 15l2.2-1.1L20 12z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M4 16l.6 1.6L6 19l-1.4.6L4 21l-.6-1.4L2 19l1.6-1.4L4 16z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);
