'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeSection({ children, className = '', delay = 0 }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
